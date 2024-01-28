FROM golang:1.21.6 as builder
WORKDIR /kakao

COPY ./platform/endpoints/api/ ./platform/endpoints/api/
COPY ./platform/internal/ ./platform/internal/

RUN go mod init kakao
RUN go mod tidy
RUN go mod download

RUN CGO_ENABLED=0 GOOS=linux go build -o ws ./platform/endpoints/api/

FROM alpine:latest

RUN mkdir -p /app
WORKDIR /app

COPY --from=builder /kakao/api .

CMD /app/api