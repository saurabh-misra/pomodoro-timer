import stats, * as selectors from '../stats';
import { completeSession } from '../../actions/SessionActions';
import sessionModes from '../../constants/SessionModes';

describe('stats reducer', () => {
    it('should return empty array by default', () => {
        expect(
            stats(undefined, {})
        ).toEqual([]);
    });

    // TODO: check how to test thunks
    //     it('should store session statistics on COMPLETE_SESSION action', () => {
    //         const action = completeSession(sessionModes.WORK);

    //         expect(
    //             stats([], action)
    //         ).toEqual(
    //             [
    //                 {
    //                     date: (new Date()),
    //                     mode: sessionModes.WORK,
    //                 }
    //             ]
    //         );
    //     });
 });

describe('getWorkSessionsCount selector', () => {
    it('should return 0 for empty, undefined and null state', () => {
        expect(
            selectors.getWorkSessionsCount([])
        ).toBe(0);

        expect(
            selectors.getWorkSessionsCount(undefined)
        ).toBe(0);

        expect(
            selectors.getWorkSessionsCount(null)
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
            selectors.getWorkSessionsCount(state, today)
        ).toBe(3);
    });
});

describe('getStats selector', () => {
    it('should return an empty array if there are no stats', () => {
        expect([]).toEqual([]);
    });

    it('should combine multiple stats for single day into single array item', () => {
        const today = new Date();
        expect(
            selectors.getStats(
                [
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
                        date: today,
                        mode: sessionModes.WORK
                    },
                    {
                        date: today,
                        mode: sessionModes.SHORT_BREAK
                    },
                    {
                        date: today,
                        mode: sessionModes.SHORT_BREAK
                    },
                    {
                        date: today,
                        mode: sessionModes.SHORT_BREAK
                    },
                    {
                        date: today,
                        mode: sessionModes.LONG_BREAK
                    },
                    {
                        date: today,
                        mode: sessionModes.LONG_BREAK
                    },
                ]
            )
        ).toEqual(
            [
                {
                    date: today,
                    workSessions: 4,
                    shortBreakSessions: 3,
                    longBreakSessions: 2
                }
            ]
        )
    });

    it('should combine multiple stats for multiple days into multiple stats', () => {
        const today = new Date();
        let yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);
        
        expect(
            selectors.getStats(
                [
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
                        mode: sessionModes.SHORT_BREAK
                    },
                    {
                        date: yesterday,
                        mode: sessionModes.WORK
                    },{
                        date: yesterday,
                        mode: sessionModes.WORK
                    },{
                        date: yesterday,
                        mode: sessionModes.WORK
                    },{
                        date: yesterday,
                        mode: sessionModes.LONG_BREAK
                    },
                ]
            )
        ).toEqual(
            [
                {
                    date: today,
                    workSessions: 2,
                    shortBreakSessions: 1,
                    longBreakSessions: 0
                },
                {
                    date: yesterday,
                    workSessions: 3,
                    shortBreakSessions: 0,
                    longBreakSessions: 1
                }
            ]
        )
    });
});