package main

import (
	"fmt"
	"kakao/platform/internal/proto/pb"
	"kakao/platform/services/account/server"
	"log"
	"net"
	"os"

	"google.golang.org/grpc"
)

func main() {

	fmt.Println("account main.go")

	port, exists := os.LookupEnv(("ACCOUNT_SERVICE_PORT"))
	if !exists {
		log.Fatalln("No ACCOUNT_SERVICE_PORT .env variable specified")
	}

	lis, err := net.Listen("tcp", fmt.Sprintf(":%s", port))
	if err != nil {
		log.Fatalln("TCP server start error", err.Error())
	}

	accountServer, err := server.NewAccountSerivce()
	if err != nil {
		log.Fatalln("could not create server instance", err)
	}

	grpcServer := grpc.NewServer()
	pb.RegisterAccountServiceServer(grpcServer, accountServer)

	if err := grpcServer.Serve(lis); err != nil {
		log.Fatalln("account service error", err)
	}
}
