FROM golang:1.21.6 as builder

# copy required files
COPY ./platform/services/conversation/ ./platform/services/conversation/
COPY ./platform/internal/ ./platform/internal

RUN go mod init kakao
RUN go mod tidy 
RUN go mod download

# build 
RUN CGO_ENABLED=0 GOOS=linux go build -o conversation ./paltform/services/conversation/

# create image
FROM alpine:latest

# app dir
RUN mkdir -p /app
WORKDIR /app

COPY --from=builder /kakao/conversation .

# run
CMD /app/conversation