import expect from 'expect';
import top from '../reducers/top';

describe('top', () => {
  it('can select tab', () => {
    const initialState = { currentTab: 1 };
    const action = {
      type: 'SELECT_TAB',
      key: 2,
    };
    const finalState = { currentTab: 2 };
    expect(top(initialState, action)).toEqual(finalState);
  });
});
