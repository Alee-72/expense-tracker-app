import React, {useState,useContext } from 'react'
import { Globalcontext } from '../Context/Globalstate'



export const AddTransaction = () => {
    let [text,settext] = useState('');
    let [amount,setamount] = useState(0);
    const {newtransaction} = useContext(Globalcontext)
    

     const submission = (e) => {
            e.preventDefault();
        const inputtransaction = {
              id: Math.floor(Math.random()* 100000),
              text,
              amount: +amount
        }
        newtransaction (inputtransaction);
     }

    return (
        <div>
            <hr></hr>
            <h3>Add Transaction</h3>
            <form onSubmit={submission}>
            <input type='text' value={text} onChange={(e) => settext(e.target.value)}
             placeholder='Item name'></input>

            <input type='number' value={amount} onChange={(e) => setamount(e.target.value)}
             placeholder=' Amount ...'></input>
             <br></br>

            <button className='btn'>ADD</button>
            </form>
        </div>
    )
}