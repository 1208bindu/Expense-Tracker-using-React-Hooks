import React from 'react'
import {useSelector } from 'react-redux'

const IncomeExpenses = () => {

const transaction = useSelector(state => state.expenses)
let income = 0
let expense = 0

transaction.map(trans => {return (parseInt(trans.value)>0 ? income +=  parseInt(trans.value) : expense += parseInt(trans.value) )})


    return (
        <div className="row ie-row">
            <div className="col s6 card center">
                <h5>Income</h5>
                <p className="green-text"><b>(+) {income}.00 NOK </b></p>
            </div>
            <div className="col s6 card center ">
                <h5>Expense</h5>
                <p className="red-text"><b>(-) {Math.abs(expense)}.00 NOK</b></p>
            </div>
            
        </div>
    )
}
export default IncomeExpenses