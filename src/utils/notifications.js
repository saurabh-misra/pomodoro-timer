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
                icon: 'clock.png',
                requireInteraction: true 
            }
        );
    }

    return null;
};

export const playSound = () => {
    var audio = new Audio('to-the-point.mp3');
    audio.play();
}