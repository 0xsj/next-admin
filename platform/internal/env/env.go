package env

import (
	"fmt"
	"os"

	"github.com/0xsj/kakao/internal"
	"github.com/joho/godotenv"
)

// provider
type Provider interface {
	Get(key string) (string, error)
}

// configuration 
type Configuration struct {
	provider Provider
}

// load reads the env filename, and loadit into env for this process
func Load(filename string) error {
	if err := godotenv.Load(filename); err != nil {
    return internal.NewErrorf(internal.ErrorCodeUnknown, "loading env var file") 
  }
  return nil
}

// new configuration 
func New(provider Provider) *Configuration {
  return &Configuration{
    provider: provider,
  }
}

// get returns the value from   env var 
// provider is used to getting the value
func (c *Configuration) Get(key string) (string, error) {
  res := os.Getenv(key)
  valSecret := os.Getenv(fmt.Sprintf("%s_SECURE", key))

  if valSecret != "" {
    valSecretRes, err := c.provider.Get(valSecret)
    if err != nil {
      return "", internal.WrapErrorf(err, internal.ErrorCodeInvalidArgument, "provider.Get")
      

    }

    res = valSecretRes
  }
  return res, nil
}
