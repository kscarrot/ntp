import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-2xl mx-auto text-center px-4">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Welcome to Home
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          This is the home page of the React Router v7 demo.
        </p>
        <div className="space-x-4">
          <Link
            to="/about"
            className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
          >
            Go to About
          </Link>
        </div>
      </div>
    </div>
  )
}
