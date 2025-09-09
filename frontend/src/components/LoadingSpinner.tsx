export function LoadingSpinner() {
  return (
    <div className='flex items-center justify-center'>
      <div
        role='status'
        aria-label='Loading...'
        className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary'
      />
    </div>
  )
}
