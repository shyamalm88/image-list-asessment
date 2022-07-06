const initialState = 0;

const changeTheNumber = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE":
      return action.payload;
    default:
      return state;
  }
};

export default changeTheNumber;
