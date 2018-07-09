import stats, { getWorkSessionsCount } from '../stats';
import {completeSession} from '../../actions/SessionActions';
import sessionModes from '../../constants/SessionModes';

describe('stats reducer', () => {
    it('should return empty array by default', () => {
        expect(
            stats(undefined, {})
        ).toEqual([]);
    });

    it('should store session statistics on COMPLETE_SESSION action', () => {
        const action = completeSession(sessionModes.WORK);

        expect(
            stats([], action)
        ).toEqual(
            [
                {
                    date: (new Date()),
                    mode: sessionModes.WORK,
                }
            ]
        );
    });
});

describe('getWorkSessionsCount selector', () => {
    it('should return 0 for empty, undefined and null state', () => {
        expect(
            getWorkSessionsCount([])
        ).toBe(0);

        expect(
            getWorkSessionsCount(undefined)
        ).toBe(0);

        expect(
            getWorkSessionsCount(null)
        ).toBe(0);
    });

    it('should return work sessions count for provided date', () => {
        const today = new Date();
        let yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1); 
        
        const state = [
            {
                date: today,
                mode: sessionModes.WORK
            },
            {
                date: today,
                mode: sessionModes.WORK
            },
            {
                date: today,
                mode: sessionModes.WORK
            },
            {
                date: yesterday,
                mode: sessionModes.WORK
            },
        ];

        expect(
            getWorkSessionsCount(state, today)
        ).toBe(3);
    });
});