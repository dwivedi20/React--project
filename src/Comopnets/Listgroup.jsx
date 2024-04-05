import ListItem from"./ListItem";
import TransactionContext from"../Context/Khatacontext";
import React,{useContext} from "react";

const Listgroup = () => {
    const {transactions} =useContext (TransactionContext)
  return (
    <div className='my-3'>
     <h4 className='text-primary'> All Total Transaction </h4>
     <ul className='list-group my-3'>
      {transactions.map((transaction)=>(
        <ListItem key={transaction.id } transaction={transaction}/>
      )

      )}


     </ul>
    </div>
  )
}

export default Listgroup
