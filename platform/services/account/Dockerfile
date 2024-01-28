# Stage 1: Build
FROM golang:1.21.6 as builder
WORKDIR /kakao

# Copy required files
COPY ./platform/services/account/ ./platform/services/account/
COPY ./platform/internal/ ./platform/internal/

# Print debug information
RUN ls -la ./platform/services/account
RUN ls -la ./platform/internal

# Run Go mod commands (if needed)
RUN go mod init kakao
RUN go mod tidy
RUN go mod download

# Build the Go application
RUN CGO_ENABLED=0 GOOS=linux go build -o account ./platform/services/account/

# Stage 2: Final Image
FROM alpine:latest

# Create the application directory
RUN mkdir -p /app
WORKDIR /app

# Copy the built binary from the builder stage
COPY --from=builder /kakao/account .

# Print debug information
RUN ls -la /app

# Define the command to run the application
CMD /app/account
