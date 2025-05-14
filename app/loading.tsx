export default function Loading() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div role="status" aria-live="polite" className="text-lg animate-pulse">
        Loading...
      </div>
    </main>
  );
}