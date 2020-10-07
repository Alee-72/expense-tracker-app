
 import React, { useContext } from 'react'
 import { Globalcontext } from '../Context/Globalstate'

 export const Balance = () => {
  const {transactions} = useContext(Globalcontext);
    const amount = transactions.map(el => el.amount);
    const total = amount.reduce((el,up) => (el += up),0).toFixed(1);

    return (
        <div className='inc-exp'>
        <div>
            <h2>Your Balance</h2>
            <hr></hr>
            </div>
            <div>
            <h2>${total}</h2>
            <hr></hr>
            </div>
        </div>
          
    )
}
