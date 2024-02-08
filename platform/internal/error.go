package internal

import "fmt"

// represents an error that could be wrapping another
type Error struct {
  og error 
  msg string 
  code ErrorCode
}

// defines supported error code
type ErrorCode uint 

const (
  ErrorCodeUnknown ErrorCode = iota 
  ErrorCodeNotFound 
  ErrorCodeInvalidArgument
)

// returns a wrapped error 
func WrapErrorf(og error, code ErrorCode, format string, a...interface{}) error {
  return &Error{
    code: code,
    og: og,
    msg: fmt.Sprintf(format, a...),
  }
}

// instantiates a new error
func NewErrorf(code ErrorCode, format string, a ...interface{})error {
  return WrapErrorf(nil, code, format, a...)
}

// returns the message, when wrapping errors the error message is returned 
func (e *Error) Error() string {
  if e.og != nil {
    return fmt.Sprintf("%s: %v", e.msg, e.og)
  }
  return e.msg
}

// unwrap the wrapped error, if there is any
func (e *Error) UnWrap()error{
  return e.og
}

// returns the code representing this erorr
func (e *Error) Code() ErrorCode {
  return e.code
}
