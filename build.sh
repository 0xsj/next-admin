#!/bin/bash

tsServices=("authentication")  # Add your TS service names here
gatewayServices=("authentication")

function cleanup() {
  folderPath="$1/generated"
  echo "$folderPath"
  if [ -d "$folderPath" ]; then
    rm -r "$folderPath"
  fi
  mkdir -p "$folderPath"
}

function generateTS() {
  if [ -d "$1" ]; then
    cd "$1" || return
    npm run protoc  # Add the appropriate protoc command for generating TS code
    cd ..
  fi
}

function generateGateway() {
  if [ -d "gateway" ]; then
    cd "gateway" || return

    # Loop through the specified gateway services
    for service in "${gatewayServices[@]}"; do
      # Generate protobuf code for the current service
      npx protoc \
        --plugin=protoc-gen-ts_proto=.\\node_modules\\.bin\\protoc-gen-ts_proto.cmd \
        --ts_proto_opt=outputServices=grpc-js,env=node,useOptionals=messages,exportCommonSymbols=false,esModuleInterop=true \
        --ts_proto_out=./generated \
        -I=../proto \
        "${service}.proto"

      echo "Generated proto for gateway service: ${service}"
    done

    cd ..
  fi
}

# Generate code for TS services
for service in "${tsServices[@]}"; do
  generateTS "services/$service"
  echo "Generated proto for TS service: $service"
done

# Generate code for gateway services
generateGateway

sleep 0.5
