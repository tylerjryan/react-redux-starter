// Reducers go here
const sampleReducer = (state = [], action) => {
  console.log('handling');
  switch (action.type) {
    case 'SAMPLE_ACTION': {
      console.log('sample action');
      return [...state, action.text];
    }
    default: {
      console.log('returning default');
      return state;
    }
  }
};

export default sampleReducer;
