package enc

import (
	"crypto/sha1"
	"crypto/sha256"
	"encoding/hex"
	"fmt"
	"math/rand"
	"time"
)

const randCharset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890!@$%^&*()-_{}[]:;,.?~"

func GenerateSalt(length int) string {
	r := rand.New(rand.NewSource(time.Now().UnixNano()))
	b := make([]byte, length)

	for i := range b {
		b[i] = randCharset[r.Intn(len(randCharset))]
	}

	return string(b)
}

func SHA1EncryptWithSalt(input string, salt string) string {
	hash := sha1.New()
	encodable_string := fmt.Sprintf("%s%s", input, salt)
	hash.Write([]byte(encodable_string))
	hib := hash.Sum(nil)
	hs := hex.EncodeToString(hib)

	return hs

}

func SHA256EncryptWithSalt(input string, salt string) string {
	hash := sha256.New()
	encodable_string := fmt.Sprintf("%s%s", input, salt)
	hash.Write([]byte(encodable_string))
	hib := hash.Sum(nil)
	hs := hex.EncodeToString(hib)

	return hs
}
