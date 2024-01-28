FROM golang:1.21.6 as builder

# copy required files
COPY ./platform/services/account/ ./platform/services/account/
COPY ./platform/internal/ ./platform/internal

RUN go mod init kakao
RUN go mod tidy 
RUN go mod download

# build 
RUN CGO_ENABLED=0 GOOS=linux go build -o account ./paltform/services/account/

# create image
FROM alpine:latest

# app dir
RUN mkdir -p /app
WORKDIR /app

COPY --from=builder /kakao/account .

# run
CMD /app/account