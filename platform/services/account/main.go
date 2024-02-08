package main

import (
	"fmt"
	"log"
	"net"
	"os"
)

// main entry
func main() {
	// load envs
	port, exists := os.LookupEnv("KAKAO_ACCOUNT_SERVICE_PORT")
	if !exists {
		log.Fatalln("No KAKAO_ACCOUNT_SERVICE_PORT environment variable found. Kill server")
	}

	// create a TCP listener
	lis, err := net.Listen("tcp", fmt.Sprintf(":%s", port))
	if err != nil {
		log.Fatalln("Could not start TCP server: ", err.Error())
	}
	// new service definitino
	for {
		conn, err := lis.Accept()
		if err != nil {
			log.Println("error accepting connection:", err.Error())
			continue
		}
		go handleConnection(conn)
	}

	// grpc server, register

	// reflect

	// run server

}

func handleConnection(conn net.Conn) {
	defer conn.Close()

}
