import React ,{ useState } from 'react'
import { TransactionProvider } from './Context/Khatacontext'
import Navbar from './Comopnets/Navbar'
import Form from './Comopnets/Form'
import Listgroup from './Comopnets/Listgroup'
import Balance from './Comopnets/Balance'




const App = () => {
  return (
    <TransactionProvider   >
    <Navbar/>
    <div className="container px-3 py-5">
      <Balance/>
      <Form/>
     < Listgroup/>
     
      </div>
      
    </TransactionProvider>
  )
}

export default App
