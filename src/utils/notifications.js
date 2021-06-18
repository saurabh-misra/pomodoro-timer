const areNotificationsSupported = () => 'Notification' in window;

const checkPermissionStatus = () => {
    if( areNotificationsSupported() ) {
        return Notification.permission;
    }

    return null;
};

export const askPermission = () => {
    const permissionStatus = checkPermissionStatus();

    switch(permissionStatus){
        case 'default':
            return Notification.requestPermission();
        case 'granted':
        case 'denied':
        default:
            return null;
    }
}

export const showNotification = (title, body) => {
    if( areNotificationsSupported() && checkPermissionStatus(Notification) === 'granted' ){
        return new Notification(
            title,
            {
                body, 
                icon: 'images/clock.png',
                requireInteraction: true 
            }
        );
    }
    playSound();

    return null;
};

export const playSound = () => {
    var audio = new Audio('sounds/to-the-point.mp3');
    audio.play();
}