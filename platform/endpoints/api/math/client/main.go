package main

import (
	"context"
	"crypto/tls"
	"flag"
	"fmt"
	"kakao/platform/internal/proto/pb"
	"log"
	"time"

	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials"
)

func main() {
	serverAddress := flag.String(
		"server", "localhost:8080",
		"The server address in the format of host:port",
	)

	flag.Parse()

	creds := credentials.NewTLS(&tls.Config{InsecureSkipVerify: false})

	opts := []grpc.DialOption{
		grpc.WithTransportCredentials(creds),
	}

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	conn, err := grpc.DialContext(ctx, *serverAddress, opts...)
	if err != nil {
		log.Fatalln("fail to dial: ", err)
	}

	defer conn.Close()

	client := pb.NewMathServiceClient(conn)

	res, err := client.Add(ctx, &pb.MathRequest{
		OperandA: 10,
		OperandB: 20,
	})

	if err != nil {
		log.Fatalln("error sending request:  ", err)
	}

	fmt.Println("result", res.Result)

}
