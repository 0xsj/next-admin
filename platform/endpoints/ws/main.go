package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/gorilla/websocket"
)

// upgrade http to websocket connection
var upgrader = websocket.Upgrader{
	CheckOrigin: func(r *http.Request) bool {
		return true
	},
}

func main() {
	fmt.Println("Websocket main running")
	fmt.Println("hello world")
	wsPort, exists := os.LookupEnv("WS_SERVICE_PORT")

	if !exists {
		log.Fatalln("No WS_SERVICE_PORT env variable")
	}

	log.Println("Starting websocket service on port:", wsPort)

	accountHost, exists := os.LookupEnv(("ACCOUNT_SERVICE_HOST"))
	if !exists {
		log.Fatalln("no ACCOUNT_SERVICE_HOST_SPECIFIED")
	}

	accountPort, exists := os.LookupEnv("ACCOUNT_SERVICE_PORT")
	if !exists {
		log.Fatalln("no ACCOUNT_SERVICE_PORT specified")
	}

	accountConnString := fmt.Sprintf("%s:%s", accountHost, accountPort)
	fmt.Println("account connection string for grpc:   ", accountConnString)

	// socketHandler := &WebSocketClientHandler{}

}
