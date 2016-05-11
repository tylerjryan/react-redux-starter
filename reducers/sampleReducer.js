// Reducers go here
const sampleReducer = (state = [], action) => {
  switch (action.type) {
    case 'SAMPLE_ACTION': {
      return [...state, action.text];
    }
    default: {
      return state;
    }
  }
};

export default sampleReducer;
