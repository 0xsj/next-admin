package pointer

func Bool(value bool) *bool {
	res := new(bool)
	*res = value
	return res
}

func String(value string) *string {
	res := new(string)
	*res = value
	return res
}

func Int(value int) *int {
	res := new(int)
	*res = value
	return res
}
