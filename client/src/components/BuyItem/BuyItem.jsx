import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import BuyMain from './BuyMain'
// after opening a specific dish this page opens

function BuyItem() {
  return (
    <div className=' scrollbar-track-transparent scrollbar-thin'>
     <div className='h-screen'>
    <Header/>
    <BuyMain/>
    <Footer/>
    </div> </div>
  )
}

export default BuyItem