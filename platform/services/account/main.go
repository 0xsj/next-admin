package main

import (
	"fmt"
	"log"
	"net"
	"os"
)

func main() {
	// salt := enc.GenerateSalt(10)
	// fmt.Println(salt)

	// sha1 := enc.SHA1EncryptWithSalt("example", salt)
	// fmt.Println(sha1)

	fmt.Println("account main.go")

	port, exists := os.LookupEnv(("ACCOUNT_SERVICE_PORT"))
	if !exists {
		log.Fatalln("No ACCOUNT_SERVICE_PORT .env variable specified")
	}

	lis, err := net.Listen("tcp", fmt.Sprintf(":%s", port))
	if err != nil {
		log.Fatalln("TCP server start error", err.Error())
	}

	// server, err := server.NewAccountService()

}
