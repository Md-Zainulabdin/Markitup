import React from 'react'
import AdminNav from './dashboard/_components/AdminNav'

const AdminRouteLayout = async ({children}: {children: React.ReactNode}) => {
  return (
    <>
        <div className='w-full flex flex-row'>
            <nav className='w-[25%] h-screen hidden md:block border bg-white'>
                <AdminNav/>
            </nav>
            <main className='w-full md:w-[75%] p-8 border'>{children}</main>
        </div>
    </>
  )
}

export default AdminRouteLayout