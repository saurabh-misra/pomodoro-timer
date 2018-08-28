export const saveState = (state) => {
    const strState = JSON.stringify(state);
    try {
        localStorage.setItem('state', strState);    
    } catch(err) {
        // TODO: Need to decide whether to show this error to user
        console.log('Error: ' + err);
    }
};

export const loadState = () => {
    try {
        const strState = localStorage.getItem('state');
        return JSON.parse(strState, (key, value) => {
            if(typeof value === 'string' && !isNaN(Date.parse(value)))
                return new Date(value)
            
            return value;
        }) || undefined;
    } catch(err) {
        return undefined;
    }
};

