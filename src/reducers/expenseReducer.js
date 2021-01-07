import {ADD_DETAILS,DELETE_DETAILS} from '../actions/expenseActions'
// Define an initial state value for the app
const initialState = {
    expenses: []
  }
// Create a "reducer" function that determines what the new state
// should be when something happens in the app
function expenseReducer(state = initialState, action) {
  // Reducers usually look at the type of action that happened
  // to decide how to update the state
  switch (action.type) {
    case ADD_DETAILS:
      {const id = state.expenses.length+1;
       const expenseItem = {details:action.payload.details,value: action.payload.value, id, };

      return { ...state, expenses: [...state.expenses, expenseItem] };
    }
      
    case DELETE_DETAILS:
      {
        const expense = state.expenses.filter((expense) => expense.id !== action.payload.id);
        return { ...state, expenses:[...expense] }
      }  
    default:
      // If the reducer doesn't care about this action type,
      // return the existing state unchanged
      return state
  }
}
  export default expenseReducer;