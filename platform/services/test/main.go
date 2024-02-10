package main

import (
	"fmt"
	"log"
	"net"

	"github.com/0xsj/kakao/internal/env"
	"github.com/0xsj/kakao/pkg/turso"
)

func main() {
	// Create a configuration instance
	conf := env.New(nil)

	// Create a Turso client
	turso.NewTursoClient(conf)

	// Start listening for connections
	listener, err := net.Listen("tcp", ":8080") // Adjust the port as needed
	if err != nil {
		log.Fatalf("Failed to listen: %v", err)
	}
	defer listener.Close()

	fmt.Println("Server is listening on port 8080")

	// Loop indefinitely to accept connections
	for {
		conn, err := listener.Accept()
		if err != nil {
			log.Printf("Failed to accept connection: %v", err)
			continue
		}

		// Handle each connection in a separate goroutine
		go handleConnection(conn)
	}
}

// handleConnection handles each incoming connection
func handleConnection(conn net.Conn) {
	defer conn.Close()

	// Your logic to handle the connection goes here
	fmt.Printf("Accepted connection from %s\n", conn.RemoteAddr().String())

	// Example: Echo back the received data
	buf := make([]byte, 1024)
	for {
		n, err := conn.Read(buf)
		if err != nil {
			log.Printf("Error reading from connection: %v", err)
			return
		}
		if n == 0 {
			fmt.Println("Connection closed by client")
			return
		}
		fmt.Printf("Received data: %s", string(buf[:n]))

		// Example: Echo back the received data
		_, err = conn.Write(buf[:n])
		if err != nil {
			log.Printf("Error writing to connection: %v", err)
			return
		}
	}
}
