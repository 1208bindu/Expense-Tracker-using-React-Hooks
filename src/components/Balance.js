import React from 'react'
import {useSelector } from 'react-redux'

const Balance = () => {

const transaction = useSelector(state => state.expenses)
let income = 0
let expense = 0
let total=0

transaction.map(trans => {return (parseInt(trans.value)>0 ? income +=  parseInt(trans.value) : expense += parseInt(trans.value) )})

total=income-Math.abs(expense)
    return (
    <div className="card center teal lighten-1 brown-text text-darken-2">
            
            <h4>Your Balance is <span> {total}.00 NOK</span></h4>
            
       
        </div>
            
    )
}

export default Balance