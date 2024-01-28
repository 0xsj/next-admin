package main

import (
	"context"
	"kakao/platform/internal/proto/pb"
	"log"
	"net"

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
	if err := s.Serve(listener); err != nil {
		log.Fatalln("failed to serve", err)
	}
}
