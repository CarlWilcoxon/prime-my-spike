// I'm going to repurpose this to be the backpack
// to hold the player's inventory.

const customerInfo = ( state = {}, action ) => {
  if (action.type === 'ADD_NEW_CUSTOMER') {
    //update state to add the name to the list
    console.log('in CustomerInfo reducer, payload is: ', action.payload)

    return  {...state, customer: action.payload}
  }
  return state;
}
// customerInfo will be on the redux state at:
// state.customerInfo
  export default customerInfo;
