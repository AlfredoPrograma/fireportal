export function ErrorAlert({ message }: { message: string }) {
  return (
    <div
      className='w-full p-4 mb-4 text-primary bg-red-100 border border-red-300 rounded-lg'
      role='alert'
    >
      {message}
    </div>
  )
}
