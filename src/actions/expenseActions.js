export const ADD_DETAILS = 'ADD_DETAILS'
export const DELETE_DETAILS = 'DELETE_DETAILS'

export  function addDetails(itemDetails,itemValue)
{
  return{
    type:ADD_DETAILS,
    payload: { details:itemDetails,value: itemValue },
  }
}
export  function deleteDetails(selectedItemId)
{
  console.log(selectedItemId)
  return{
    type:DELETE_DETAILS,
    payload: { id: selectedItemId },
  }
}

