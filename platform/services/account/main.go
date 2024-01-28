package main

import (
	"fmt"
	"kakao/platform/internal/enc"
)

func main() {
	salt := enc.GenerateSalt(10)
	fmt.Println(salt)

	sha1 := enc.SHA1EncryptWithSalt("example", salt)
	fmt.Println(sha1)

}
