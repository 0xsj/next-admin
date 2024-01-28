# Stage 1: Build
FROM golang:1.21.6 as builder
WORKDIR /kakao

# Copy required files for api
COPY ./platform/endpoints/api/ ./platform/endpoints/api/
COPY ./platform/internal/ ./platform/internal/

# Run Go mod commands for api
RUN go mod init kakao
RUN go mod tidy
RUN go mod download

# Build the Go application for api
RUN CGO_ENABLED=0 GOOS=linux go build -o api ./platform/endpoints/api/

# Stage 2: Final Image
FROM alpine:latest

# Create the application directory
RUN mkdir -p /app
WORKDIR /app

# Copy the built binary from the builder stage and set executable permissions
COPY --from=builder /kakao/api .
RUN chmod +x ./api

# Define the command to run the application
CMD ["/app/api"]
