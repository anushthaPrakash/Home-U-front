import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Main from '../Main'

function FrontPage() {
  return (
    <div className=' scrollbar-track-gray-400/20 scrollbar-thumb-[#3C6255] scrollbar-thin'>
    <div className='h-screen'>
   <Header/>
   <Main/>
   <Footer/>
   </div> </div>
  )
}

export default FrontPage