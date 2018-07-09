import { askPermission } from '../notifications';

describe('askPermission', () => {
    it('should request for permission if permission status is default', () => {
        const notificationApi = {
            requestPermission: jest.fn()
        };

        askPermission(notificationApi, 'default');

        expect(
            notificationApi.requestPermission.mock.calls.length
        ).toEqual(
            1
        );
    });

    it('should not request for permission if permission status is granted or denied', () => {
        const notificationApi = {
            requestPermission: jest.fn()
        };

        askPermission(notificationApi, 'granted');

        expect(
            notificationApi.requestPermission.mock.calls.length
        ).toEqual(
            0
        );

        askPermission(notificationApi, 'denied');

        expect(
            notificationApi.requestPermission.mock.calls.length
        ).toEqual(
            0
        );
    });
});