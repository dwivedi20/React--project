import { createContext, useState } from "react";

 const TransactionContext=createContext();

 export  const TransactionProvider = ({children}) =>{
   const [transactions, setTransactions] = useState([]);
    const [edit, setEdit] = useState({
      transaction: {},
     isEdit: false,
    });

   //  saveTransaction

   const addTransaction=(text,amount)=>{
      setTransactions([
        { id: crypto.randomUUID(),text,amount :parseInt(amount)},...transactions
      ])
   }
   const deleteTransaction=(id)=>{
      setTransactions(transactions.filter((item)=>item.id==!id))
   }

   const editTransaction=(oldTransaction)=>{
      setEdit({
         transaction:oldTransaction,
          isEdit:true,
      }
     
      )

   }
    const updateTransaction=(updateTransaction)=>{
      setTransactions(transactions.map((item)=>item.id===updateTransaction.id? updateTransaction:item))
      setEdit({ transaction: {}, isEdit: false });
    }
      return(
         <TransactionContext.Provider value={{
            transactions,edit,addTransaction,deleteTransaction,editTransaction,updateTransaction
         }

         }    
         
         >
            {children}
         </TransactionContext.Provider>
      )

 }
 export default TransactionContext;