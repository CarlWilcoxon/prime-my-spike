const pizzaList = (state = [], action) => {
	if (action.type === 'PIZZA_LIST') {
		return action.payload;
	}
	return state;
};
// pizzaList will be on the redux state at:
// state.pizzaList
export default pizzaList;
