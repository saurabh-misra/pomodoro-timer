import session, { getCurrentSessionMode, getSessionStatus } from '../session';
import sessionModes from '../../constants/SessionModes';
import * as actions from '../../actions/SessionActions';

describe('session reducer', () => {
    it('should return empty state initially', () => {
        expect(
            session(undefined, {})
        ).toEqual({});
    });

    it('should handle INITIALIZE_WORK_SESSION action', () => {
        const stateBefore = {};
        const stateAfter = {
            mode: sessionModes.WORK,
            isPaused: false,
            isStarted: false
        };
        const action = actions.initializeWorkSession();

        expect(
            session(stateBefore, action)
        ).toEqual(stateAfter);
    });

    it('should handle INITIALIZE_SHORT_BREAK action', () => {
        const stateBefore = {};
        const stateAfter = {
            mode: sessionModes.SHORT_BREAK,
            isPaused: false,
            isStarted: false
        };
        const action = actions.initializeShortBreakSession();

        expect(
            session(stateBefore, action)
        ).toEqual(stateAfter);
    });

    it('should handle INITIALIZE_LONG_BREAK action', () => {
        const stateBefore = {};
        const stateAfter = {
            mode: sessionModes.LONG_BREAK,
            isPaused: false,
            isStarted: false
        };
        const action = actions.initializeLongBreakSession();

        expect(
            session(stateBefore, action)
        ).toEqual(stateAfter);
    });

    it('should handle START_SESSION action', () => {
        const stateBefore = {
            mode: sessionModes.WORK,
            isPaused: false,
            isStarted: false
        };
        const stateAfter = {
            mode: sessionModes.WORK,
            isPaused: false,
            isStarted: true
        };
        const action = actions.startSession();

        expect(
            session(stateBefore, action)
        ).toEqual(stateAfter);
    });

    it('should handle PAUSE_SESSION action', () => {
        const stateBefore = {
            mode: sessionModes.WORK,
            isPaused: false,
            isStarted: true
        };
        const stateAfter = {
            mode: sessionModes.WORK,
            isPaused: true,
            isStarted: false
        };
        const action = actions.pauseSession();

        expect(
            session(stateBefore, action)
        ).toEqual(stateAfter);
    });

    it('should handle START_SESSION action when session is paused', () => {
        const stateBefore = {
            mode: sessionModes.WORK,
            isPaused: true,
            isStarted: false
        };
        const stateAfter = {
            mode: sessionModes.WORK,
            isPaused: false,
            isStarted: true
        };
        const action = actions.startSession();

        expect(
            session(stateBefore, action)
        ).toEqual(stateAfter);
    });

    it('should handle STOP_SESSION action when work session is running', () => {
        const stateBefore = {
            mode: sessionModes.WORK,
            isPaused: false,
            isStarted: true
        };
        const stateAfter = {
            mode: sessionModes.WORK,
            isPaused: false,
            isStarted: false
        };
        const action = actions.stopSession();

        expect(
            session(stateBefore, action)
        ).toEqual(stateAfter);

    });

    it('should handle STOP_SESSION action when short break session is running', () => {
        const stateBefore = {
            mode: sessionModes.SHORT_BREAK,
            isPaused: false,
            isStarted: true
        };
        const stateAfter = {
            mode: sessionModes.WORK,
            isPaused: false,
            isStarted: false
        };
        const action = actions.stopSession();

        expect(
            session(stateBefore, action)
        ).toEqual(stateAfter);
    });

    it('should handle COMPLETE_SESSION action for work session', () => {
        const stateBefore = {
            mode: sessionModes.WORK,
            isPaused: false,
            isStarted: true
        };
        const stateAfter = {
            mode: sessionModes.WORK,
            isPaused: false,
            isStarted: false
        };
        const action = actions.completeSession();

        expect(
            session(stateBefore, action)
        ).toEqual(stateAfter);
    });

    it('should handle COMPLETE_SESSION action for long break session', () => {
        const stateBefore = {
            mode: sessionModes.LONG_BREAK,
            isPaused: false,
            isStarted: true
        };
        const stateAfter = {
            mode: sessionModes.LONG_BREAK,
            isPaused: false,
            isStarted: false
        };
        const action = actions.completeSession();

        expect(
            session(stateBefore, action)
        ).toEqual(stateAfter);
    });
});

describe('getCurrentSessionMode selector', () => {
    it('should return the current session mode', () => {
        expect(
            getCurrentSessionMode(
                {
                    mode: sessionModes.WORK,
                    isStarted: false,
                    isPaused: false
                }
            )
        ).toBe(
            sessionModes.WORK
        );
    });
});

describe('getSessionStatus selector', () => {
    it('should return an object with STARTED and PAUSED status of the session', () => {
        expect(
            getSessionStatus(
                {
                    mode: sessionModes.WORK,
                    isStarted: false,
                    isPaused: false
                }
            )
        ).toEqual(
            {
                isStarted: false,
                isPaused: false
            }
        );
    });
});