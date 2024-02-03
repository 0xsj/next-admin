package main

import (
	"context"
	"fmt"
	"kakao/platform/internal/proto/pb"
	"log"
	"net"
	"os"
	"os/signal"
	"sync"
	"syscall"

	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
)

type server struct {
	pb.UnimplementedMathServiceServer
}

func (s *server) Add(
	ctx context.Context, in *pb.MathRequest,
) (*pb.MathResponse, error) {
	return &pb.MathResponse{
		Result: in.OperandA + in.OperandB,
	}, nil
}
func main() {
	listener, err := net.Listen("tcp", ":8080")
	if err != nil {
		log.Fatalln("failed to create listener: ", err)
	}

	s := grpc.NewServer()
	reflection.Register(s)

	pb.RegisterMathServiceServer(s, &server{})

	var wg sync.WaitGroup
	wg.Add(1)

	// Handle OS interrupt signals to initiate a graceful shutdown
	go func() {
		defer wg.Done()
		sigCh := make(chan os.Signal, 1)
		signal.Notify(sigCh, syscall.SIGINT, syscall.SIGTERM)
		<-sigCh
		fmt.Println("\nReceived interrupt signal. Shutting down gracefully...")
		s.GracefulStop()
	}()

	// Serve gRPC requests in a separate goroutine
	go func() {
		fmt.Println("Server is listening on :8080")
		if err := s.Serve(listener); err != nil {
			log.Println("failed to serve:", err)
		}
	}()

	wg.Wait()
}
