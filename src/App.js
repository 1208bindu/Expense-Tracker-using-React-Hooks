import React from 'react';
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionList  from './components/TransactionList'
import NewTransaction from './components/NewTransaction'
import './App.css';
import{createStore} from 'redux'
import { Provider } from 'react-redux'
import expenseReducer from './reducers/expenseReducer'

const store = createStore(expenseReducer)

function App() {
  return (
    <Provider store={store}>
    <div className="container main-div">
      <div className="col s12 m6">
      <Header />
      <Balance />
    
    <IncomeExpenses />
    <TransactionList />
    <NewTransaction />
    </div>
    </div>
    </Provider>
  );
}

export default App;


    



