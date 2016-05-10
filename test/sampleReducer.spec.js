import expect from 'expect';
import sampleReducer from '../reducers/sampleReducer';

describe('sampleReducer', () => {
  it('can execute a sample action', () => {
    expect(
      sampleReducer([], {
        type: 'SAMPLE_ACTION',
        param: 'sample param',
      })
    ).toEqual(['sample param']);
  });
});
