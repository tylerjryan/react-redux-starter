let nextIndex = 1;
export const addEntity = () => ({
  type: 'SAMPLE_ACTION',
  text: `Entity ${nextIndex++}`,
});
