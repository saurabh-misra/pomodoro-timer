import * as actions from '../SessionActions';
import sessionModes from '../../constants/SessionModes';
import types from '../../constants/ActionTypes';
import durationDefaults from '../../constants/DurationDefaults';

describe('SessionActions', () => {
    it('should create a INITIALIZE_WORK_SESSION action', () => {
        expect(
            actions.initializeWorkSession(durationDefaults.WORK)
        ).toEqual({
            type: types.INITIALIZE_WORK_SESSION,
            mode: sessionModes.WORK,
            minutes: durationDefaults.WORK
        });
    });

    it('should create a INITIALIZE_SHORT_BREAK action', () => {
        expect(
            actions.initializeShortBreakSession(durationDefaults.SHORT_BREAK)
        ).toEqual({
            type: types.INITIALIZE_SHORT_BREAK,
            mode: sessionModes.SHORT_BREAK,
            minutes: durationDefaults.SHORT_BREAK
        });
    });

    it('should create a INITIALIZE_LONG_BREAK action', () => {
        expect(
            actions.initializeLongBreakSession(durationDefaults.LONG_BREAK)
        ).toEqual({
            type: types.INITIALIZE_LONG_BREAK,
            mode: sessionModes.LONG_BREAK,
            minutes: durationDefaults.LONG_BREAK
        });
    });

    it('should create a START_SESSION action', () => {
        expect(
            actions.startSession()
        ).toEqual({
            type: types.START_SESSION
        });
    });

    it('should create a PAUSE_SESSION action', () => {
        expect(
            actions.pauseSession()
        ).toEqual({
            type: types.PAUSE_SESSION
        });
    });

    it('should create a STOP_SESSION action', () => {
        expect(
            actions.stopSession()
        ).toEqual({
            type: types.STOP_SESSION,
            mode: sessionModes.WORK
        });
    });
    
});