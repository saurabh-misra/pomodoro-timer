export const checkPermissionStatus = (notificationApi) => notificationApi.permission;

export const askPermission = (notificationApi, permissionStatus) => {
    switch(permissionStatus){
        case 'default':
            return notificationApi.requestPermission();
        case 'granted':
        case 'denied':
        default:
            return;
    }
}

export const showNotification = (Notification, title, body) => {
    if(checkPermissionStatus(Notification) === 'granted'){
        playSound();
        return new Notification(
            title,
            {
                body, 
                requireInteraction: true // TODO: control from settings
            }
        );
    }

    return null;
};

export const playSound = () => {
    // TODO: control from settings
    // Also, check webpage where notification sound has been downloaded
    // TODO: probably requires attribution
    // https://notificationsounds.com/message-tones/to-the-point-568
    var audio = new Audio('to-the-point.mp3');
    audio.play();
}