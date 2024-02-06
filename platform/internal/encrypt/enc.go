package enc

import (
	"crypto/sha1"
	"crypto/sha256"
	"fmt"
	"math/rand"
)

func GenerateSalt(length int)string {
  
  // generate the random seed 
  

  // create the byte array 

  // populate 

  // return string
 return "" 
}

func SHA1EncryptionWithSalt(input string, salt string)string  {
  // hash := sha1.New()

  // conct input and salt

  // hash the string 

  // return the string

  return ""
}

func SHA256EncryptWithSalt(input string, salt string) string {
	hash := sha256.New()
  encodableString := fmt.Sprintf("%s%s", input, salt)
  hash.Write([]byte(encodableString))

  bs := hash.Sum(nil)

  return fmt.Sprintf("%s", bs)


}
