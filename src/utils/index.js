export const decrementTimer = ({minutes, seconds}) => {
    if(seconds > 0){
        return {
            minutes,
            seconds: seconds-1
        };
    } else if (seconds === 0 && minutes > 0){
        return {
            minutes: minutes - 1,
            seconds: 59
        };
    } else if (seconds === 0 && minutes === 0){
        return {
            minutes,
            seconds
        };
    };

    return {
        minutes,
        seconds
    };
};

export const incrementTimer = ({minutes, seconds}, step, threshold) => {
    if( (minutes + step) > threshold ){
        return {
            minutes: threshold,
            seconds: 0
        };
    }
    
    return {
        minutes: minutes + step,
        seconds
    }
};