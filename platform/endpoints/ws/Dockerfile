# Stage 1: Build
FROM golang:1.21.6 as builder
WORKDIR /kakao

# Copy required files for api
COPY ./platform/endpoints/api/ ./platform/endpoints/api/
COPY ./platform/endpoints/ws/ ./platform/endpoints/ws/
COPY ./platform/internal/ ./platform/internal/

# Run Go mod commands for api
RUN echo "Running go mod commands for api:"
RUN go mod init kakao
RUN go mod tidy
RUN go mod download

# Build the Go application for ws
RUN echo "Building the Go application for ws:"
RUN CGO_ENABLED=0 GOOS=linux go build -o ws ./platform/endpoints/ws/
RUN echo "Contents of ./platform/endpoints/ws/:"
RUN ls -la ./platform/endpoints/ws/


# Stage 2: Final Image
FROM alpine:latest

# Create the application directories
RUN mkdir -p /app
WORKDIR /app

# RUN chmod +x ./app/ws

# Copy the built binaries from the builder stage
COPY --from=builder /kakao/ws .

# Print debug information
RUN echo "Contents of /app/ws/:"
RUN ls -la /app/ws


# Define the command to run the applications
CMD /app/ws
