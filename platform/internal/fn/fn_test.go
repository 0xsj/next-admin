package utils

import (
	"testing"
)

func TestMap(t *testing.T) {
	// t.Run("Test Map with strings", func(t *testing.T) {
	// 	input := []*string{toStrPtr("one"), toStrPtr("two"), toStrPtr("three")}
	// 	expected := []*int{toIntPtr(1), toIntPtr(2), toIntPtr(3)}

	// 	result := Map(input, func(s *string) *int {
	// 		i, err := strconv.Atoi(*s)
	// 		if err != nil {
	// 			// Handle the error, e.g., by skipping this element or setting a default value.
	// 			t.Logf("Warning: Skipping element %v. Error converting string to int: %v", *s, err)
	// 			return nil
	// 		}
	// 		return &i
	// 	})

	// 	// Filter out nil values from the result (elements that couldn't be converted).
	// 	filteredResult := make([]*int, 0, len(result))
	// 	for _, r := range result {
	// 		if r != nil {
	// 			filteredResult = append(filteredResult, r)
	// 		}
	// 	}

	// 	if !reflect.DeepEqual(filteredResult, expected) {
	// 		t.Errorf("Expected %v, got %v", expected, filteredResult)
	// 	}
	// })

}

func toIntPtr(i int) *int {
	return &i
}

func toStrPtr(s string) *string {
	return &s
}

func TestFilter(t *testing.T) {

}

func TestReduce(t *testing.T) {}

func TestForEach(t *testing.T) {}
