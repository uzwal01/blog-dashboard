import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header className='bg-blue-600 text-white p-4'>
        <Link to="/">
            <h1 className='text-xl font-bold'>Blog Dashboard</h1>
        </Link>
        
      </header>
    </>
  )
}

export default Header
