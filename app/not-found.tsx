import Link from 'next/link'
import React from 'react'

const NotFoundPage = () => {
  return (<div className="grid h-screen place-content-center  px-4">
  <div className="text-center">
    <h1 className="text-9xl font-black text-gray-200 dark:text-gray-700">404</h1>

    <p className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">Uh-oh!</p>

    <p className="mt-4 dark:text-gray-400 text-gray-500">We can&apos;t find that page.</p>

    <Link
      href="/"
      className="mt-6 inline-block rounded bg-bg-emerald-600 dark:bg-emerald-500 px-5 py-3 text-sm font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring"
    >
      Go Back Home
    </Link>
  </div>
</div>
  )
}

export default  NotFoundPage 