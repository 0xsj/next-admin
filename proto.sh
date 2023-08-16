#!/bin/bash

tsServices=("authentication" "account" "profile" "token")
gatewayServices=("authentication" "account" "profile" "token")

function generateTS() {
  local services_dir="$1"
  
  # Loop through each service directory
  for service in "${tsServices[@]}"; do
    local service_dir="$services_dir/$service"
    
    # Check if the service directory exists and has a build script
    if [ -d "$service_dir" ] && [ -f "$service_dir/build.sh" ]; then
      echo "Building $service in directory: $service_dir..."
      (cd "$service_dir" && npm run build:proto)
    else
      echo "Build script not found for $service in directory: $service_dir. Skipping..."
    fi
  done
}

function cleanTS() {
  local services_dir="$1"
  
  # Loop through each service directory
  for service in "${tsServices[@]}"; do
    local service_dir="$services_dir/$service"
    
    # Check if the service directory exists
    if [ -d "$service_dir" ]; then
      echo "Cleaning $service in directory: $service_dir..."
      
      # Attempt to delete the directory and its contents
      rm -rf "$service_dir"
      
      if [ $? -eq 0 ]; then
        echo "Successfully cleaned $service in directory: $service_dir."
      else
        echo "Failed to clean $service in directory: $service_dir. Please check permissions."
      fi
    else
      echo "$service directory not found in directory: $service_dir. Skipping..."
    fi
  done
}

# Update the paths to your actual directories
generateTS "services/account"
# generateTS "services/authentication"
# generateTS "services/profile"
# generateTS "services/token"
# generateTS "services/gateway"

sleep 0.5
