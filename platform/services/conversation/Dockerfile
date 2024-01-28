# Stage 1: Build
FROM golang:1.21.6 as builder
WORKDIR /kakao

# Copy required files
COPY ./platform/services/conversation/ ./platform/services/conversation/
COPY ./platform/internal/ ./platform/internal/

# Print debug information
RUN ls -la ./platform/services/conversation/
RUN ls -la ./platform/internal/

# Run Go mod commands
RUN go mod init kakao
RUN go mod tidy
RUN go mod download

# Build the Go application
RUN CGO_ENABLED=0 GOOS=linux go build -o conversation ./platform/services/conversation/

# Stage 2: Final Image
FROM alpine:latest

# Create the application directory
RUN mkdir -p /app
WORKDIR /app

# Copy the built binary from the builder stage
COPY --from=builder /kakao/conversation .

# Print debug information
RUN ls -la /app

# Define the command to run the application
CMD /app/conversation
