import React from 'react'
import "@styles/globals.css";
import Navbar from '@components/Navbar';
export const metadata = {
    title: "AlumNexus",
    description: "Discover & connect Alumn",
  };
  

const RootLayout = ({children}) => {
  return (
    <html className='hide-scrollbar' lang='en'>
    <body className=' overflow-x-hidden '>
      

        <main className='app '>
          <Navbar />
          {children}
        </main>

    </body>

  </html>  )
}

export default RootLayout