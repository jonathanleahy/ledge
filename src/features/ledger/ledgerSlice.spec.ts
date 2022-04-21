import ledgerReducer, {
  LedgerState,
  incrementByAmount,
  decrementByAmount,
} from './ledgerSlice';

describe('ledger reducer', () => {

  const initialState: LedgerState = {
    startingBalance: 3,
    overdraftLimit: 0,
    happyLimit: 100,
    transactions: [],
  };

  it('should handle initial state', () => {
    expect(ledgerReducer(undefined, { type: 'unknown' })).toEqual({
      value: 0,
    });
  });

  it('should handle incrementByAmount', () => {
    const actual = ledgerReducer(initialState, incrementByAmount({value: 4, date: new Date()}));
    expect(actual.startingBalance).toEqual(7);
  });

  it('should handle decrementByAmount', () => {
    const actual = ledgerReducer(initialState, decrementByAmount({value: 2, date: new Date()}));
    expect(actual.startingBalance).toEqual(1);
  });

  // https://egghead.io/lessons/jest-unit-testing-a-memoized-selector-that-derives-data-from-multiple-reducers

});
