const initialState = {
  currentTab: 2,
};

const top = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_TAB': {
      const tabKey = action.key;
      const newState = { currentTab: tabKey };
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default top;
