import React from 'react'
import {deleteDetails } from '../actions/expenseActions'
import {useDispatch} from 'react-redux'

const TransactionDetails = ({trans}) => {

    const dispatch = useDispatch()
    const classn= parseInt(trans.value)>0 ?"card z-depth-1 li-list-plus" :"card z-depth-1 li-list-minus"
    return (
         
            <li className={classn}><b>{trans.details}<span className="right">{trans.value} NOK</span></b>
            <button className="delete-btn" onClick={()=>dispatch(deleteDetails(trans.id))}>X</button>
            </li>
        
    )
}

export default TransactionDetails