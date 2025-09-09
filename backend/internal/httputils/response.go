package httputils

type APIResponse[T any] struct {
	Data T `json:"data"`
}
