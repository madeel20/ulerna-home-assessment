'use client';

const error = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 text-red-600">
        <div>
          <h1 className="text-2xl font-bold mb-4">Something went wrong.</h1>
          <p>Please try refreshing the page or contact support if the problem persists.</p>
        </div>
      </main>
  )
}

export default error