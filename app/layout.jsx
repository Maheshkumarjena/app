import React from 'react'
import "@styles/globals.css";
import Navbar from '@components/Navbar';
import { store } from '@Lib/store/store';
import StoreProvider from './storeProvider';


// export const metadata = {
//     title: "AlumNexus",
//     description: "Discover & connect Alumni",
//   };
  

const RootLayout = ({children}) => {
  return (

    
    <html className='hide-scrollbar' lang='en'>
    <body className=' overflow-x-hidden '>
      

        <main className='app '>
    <StoreProvider store={store}>
          <Navbar />
          {children}
  </StoreProvider>
        </main>

    </body>

  </html>  

)
}

export default RootLayout