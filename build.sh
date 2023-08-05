#!/bin/bash

tsServices=("authentication" "account" "profile" "token")  # Add your TS service names here
gatewayServices=("authentication" "account" "profile" "token")

function cleanup() {
  folderPath="$1/generated"
  echo "$folderPath"
  if [ -d "$folderPath" ]; then
    rm -r "$folderPath"
  fi
  mkdir -p "$folderPath"
}

function cleanGeneratedFolders() {
  for service in "${tsServices[@]}"; do
    cleanup "services/$service"
  done

  for service in "${gatewayServices[@]}"; do
    cleanup "gateway/$service"
  done
}


function generateTS() {
  npm run build:proto --prefix "$1"  # Execute npm command in the specified directory
}

# generate code for TS services
for service in "${tsServices[@]}"; do
  generateTS "services/$service"
  echo "Generated proto for TS service: $service"
done

# generate code for gateway services
for service in "${gatewayServices[@]}"; do
  generateTS "gateway/$service"  # Assuming you have a separate directory for each gateway service
  echo "Generated proto for gateway service: $service"
done

sleep 0.5
