package main

import (
	"kakao/platform/internal/proto/pb"

	"github.com/gorilla/websocket"
)

type Client struct {
	conn *websocket.Conn
	jwt  string
	send chan Event
}

type WebSocketClientHandler struct {
	accounts       pb.AccountServiceClient
	conversations  pb.ConversationServiceClient
	authMiddleware func(Event, string) bool
	clients        map[*Client]bool
	register       chan *Client
	unregister     chan *Client
	broadcast      chan Event
}

type Event struct{}

func run() {}
