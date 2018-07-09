import rootReducer from '../';
import { defaultState } from '../settings';

const mockState = {};

it('should return empty state initially', () => {
    const action = {};

    expect(rootReducer(mockState, action)).toEqual({
        timer: {},
        session: {},
        stats: [],
        settings: defaultState
    });
});

