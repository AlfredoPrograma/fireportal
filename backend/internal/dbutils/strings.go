package dbutils

import (
	"database/sql"
	"strings"
)

// NullString returns a sql.NullString based on the input string.
// If the input string is empty or contains only whitespace, it returns a NullString with Valid set to false.
// Otherwise, it returns a NullString with the trimmed string and Valid set to true.
func NullString(s string) sql.NullString {
	s = strings.TrimSpace(s)
	if s == "" {
		return sql.NullString{Valid: false}
	}
	return sql.NullString{String: s, Valid: true}
}

// PtrString returns a pointer to the given string.
// This is useful when you need to pass a string as a pointer,
// for example, when working with optional fields or nullable values.
func PtrString(s string) *string {
	return &s
}
