import React from 'react'
import Link from 'next/link'

const DashboardPage = () => {
  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <Link href="/dashboard/reports">Reports</Link>
    </div>
  )
}

export default DashboardPage