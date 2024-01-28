package utils

// generic function to apply function fto each element of the input slice
// @returns new slice containinng results of applying fn to each element
func Map[T any, R any](in []*T, f func(*T) *R) (out []*R) {
	for _, i := range in {
		out = append(out, f(i))
	}
	return
}

// fiters elements of a dlice based on a predicate
// returns a new slice containng only the elements that satisfy predicate
func Filter[T any](pred func(*T) bool, in []*T) []*T {
	var result []*T
	for _, i := range in {
		if pred(i) {
			result = append(result, i)
		}
	}
	return result
}

// returns accumulated result
func Reduce[T any, R any](op func(R, *T) R, initial R, in []*T) R {
	result := initial
	for _, i := range in {
		result = op(result, i)
	}
	return result
}

// applies a given function to each element
func ForEach[T any](f func(*T), in []*T) {
	for _, i := range in {
		f(i)
	}
}
