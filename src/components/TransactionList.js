import React from 'react'
import {useSelector} from 'react-redux'
import TransactionDetails from './TransactionDetails'


 const TransactionList = () => {
    const transaction=useSelector(state => state.expenses)
    return (
        <div>
            <h5>History</h5>
            <ul className="list">
                {transaction.map(trans => (<TransactionDetails key={trans._id} trans={trans} /> ))}
               
            </ul>            
        </div>
    )
}
export default TransactionList