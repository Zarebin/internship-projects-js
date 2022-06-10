import counterReducer, {
  CounterState,
  increment,
  decrement,
  incrementByAmount,
} from './counterSlice';

// eslint-disable-next-line no-undef
describe('counter reducer', () => {
  const initialState: CounterState = {
    value: 3,
    status: 'idle',
  };
  // eslint-disable-next-line no-undef
  it('should handle initial state', () => {
    // eslint-disable-next-line no-undef
    expect(counterReducer(undefined, { type: 'unknown' })).toEqual({
      value: 0,
      status: 'idle',
    });
  });

  // eslint-disable-next-line no-undef
  it('should handle increment', () => {
    const actual = counterReducer(initialState, increment());
    // eslint-disable-next-line no-undef
    expect(actual.value).toEqual(4);
  });

  // eslint-disable-next-line no-undef
  it('should handle decrement', () => {
    const actual = counterReducer(initialState, decrement());
    // eslint-disable-next-line no-undef
    expect(actual.value).toEqual(2);
  });

  // eslint-disable-next-line no-undef
  it('should handle incrementByAmount', () => {
    const actual = counterReducer(initialState, incrementByAmount(2));
    // eslint-disable-next-line no-undef
    expect(actual.value).toEqual(5);
  });
});
