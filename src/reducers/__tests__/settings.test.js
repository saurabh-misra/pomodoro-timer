import settings, {defaultState} from '../settings';
import * as actions from '../../actions/SettingsActions';

describe('settings reducer', () => {
    it('should return default state when input state is undefined', () => {
        expect(
            settings(undefined, {})
        ).toEqual(
            defaultState
        );
    });

    it('should handle the SET_WORK_SESSION_DURATION action', () => {
        const action = actions.setWorkSessionDuration(40);

        expect(
            settings(defaultState, action).workSessionDuration
        ).toBe(40);
    });

    it('should handle the SET_SHORT_BREAK_SESSION_DURATION action', () => {
        const action = actions.setShortBreakSessionDuration(10);

        expect(
            settings(defaultState, action).shortBreakSessionDuration
        ).toBe(10);
    });
    
    it('should handle the SET_LONG_BREAK_SESSION_DURATION action', () => {
        const action = actions.setLongBreakSessionDuration(20);

        expect(
            settings(defaultState, action).longBreakSessionDuration
        ).toBe(20);
    });
    
    it('should handle the SET_LONG_BREAK_THRESHOLD action', () => {
        const action = actions.setLongBreakThreshold(6);

        expect(
            settings(defaultState, action).longBreakThreshold
        ).toBe(6);
    });
});