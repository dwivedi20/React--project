import React, { useContext, useEffect, useState } from "react";
import TransactionContext from"../Context/Khatacontext"


const Form = () => {
    const { addTransaction, edit, updateTransaction } = useContext(TransactionContext);
    const[text,setText]=useState("")
    const[ amount,setAmount]=useState("")
    const handlesubmit= (e) => {
        e.preventDefault();
        if (!edit.isEdit) {
            addTransaction(text, amount);
          } else {
            updateTransaction({
              id: edit.transaction.id,
              text: text,
              amount: parseInt(amount),
            });
          }
      
          setText("");
          setAmount("");
          

    }
    useEffect(()=>{
        setText(edit.transaction.text);
        setAmount(edit.transaction.amount);

    }, [edit])
                                                       
  return (
   <div className='card rounded-0 p-3'>
     <h1 className='text-center text-secondary'> Enter Your Transaction</h1>
     <form onSubmit={handlesubmit}>
     <input type="text "
     className='form-control rounded-0 my-2' 
      placeholder='Enter your Transaction' 
      onChange={(e)=>setText(e.target.value)}
      value={text}
       required/>

     <input type="text" 
     className='form-control rounded-0 my-2' 
      placeholder='Enter Amount : eg.(For Expense : -2000 , For Income : 2000)' 
      onChange={(e)=>setAmount(e.target.value)}
      value={amount}
       required/>
       <button className="btn btn-success rounded-0 w-100">
          Save Transaction
        </button> 
     </form>
   </div>
  )
}

export default Form
