const orderList = ( state=[], action) => {
  if(action.type === 'ADD_MENU_ITEM'){
    console.log('in reducer, payload is: ', action.payload)
    return [ ...state, action.payload ]
  }
  return state;
}

export default orderList;
