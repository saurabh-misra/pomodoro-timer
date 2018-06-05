import rootReducer from 'reducers/';

const mockState = {};

it('should return empty state initially', () => {
    const action = {};

    expect(rootReducer(mockState, action)).toEqual({});
});

