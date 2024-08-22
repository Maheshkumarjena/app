import React from 'react'
import "@styles/globals.css";
import Navbar from '@components/Navbar';
export const metadata = {
    title: "AlumNexus",
    description: "Discover & connect Alumn",
  };
  

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
    <body>
      

        <main className='app'>
          <Navbar />
          {children}
        </main>

    </body>

  </html>  )
}

export default RootLayout