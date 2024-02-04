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

	// Create a gRPC Server and Register the Definitions
	grpcSrv := grpc.NewServer()
	pb.RegisterAccountServiceServer(grpcSrv, accountServer)

	// Log a quick message
	log.Println("Starting Account service...")

	// Run the Server
	if err := grpcSrv.Serve(lis); err != nil {
		log.Fatalln("Critical Error in Account Service: ", err.Error())
	}

	// grpcServer := grpc.NewServer()
	// reflection.Register(grpcServer)
	// pb.RegisterAccountServiceServer(grpcServer, accountServer)

	// log.Println("starting account service with config")

	// // if err := grpcServer.Serve(lis); err != nil {
	// // 	fmt.Println(lis )
	// // 	log.Fatalln("account service error", err)
	// // }

	// fmt.Println("Before Serve call")
	// if err := grpcServer.Serve(lis); err != nil {
	// 	fmt.Println("Error during Serve:", err)
	// 	log.Fatalln("account service error", err)
	// }
	// fmt.Println("After Serve call")

}
