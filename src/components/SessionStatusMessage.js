import React from 'react';
import sessionModes from '../constants/SessionModes';

const StatusMessage = (props) => (
    <div>
        {/* Desktop */}
        <div className={`d-none d-xl-block text-white p-3 rounded-bottom ${props.className}`}>
            <h5>{props.children}</h5>
        </div>

        {/* Mobile, iPad and iPad Pro */}
        <div className={`d-block d-xl-none text-white p-3 rounded ${props.className}`}>
            <h5>{props.children}</h5>
        </div>
    </div>
);

const SessionStatusMessage = ({
    mode,
    isSessionStarted,
    isSessionPaused
}) => {
    let message = '';
    if(isSessionStarted) {
        if(mode === sessionModes.WORK)
            message = (
                <StatusMessage className="bg-danger">
                    Working...
                </StatusMessage>
            );
        else 
            message = (
                <StatusMessage className="bg-success">
                    Chilling...
                </StatusMessage>
            );
    } else if (isSessionPaused) {
        message = (
            <StatusMessage className="bg-warning">
                Paused...
            </StatusMessage>
        );
    } else {
        switch(mode) {
            case sessionModes.WORK:
                message = (
                    <StatusMessage className="bg-info">
                        Lets get some work done...
                    </StatusMessage>
                );
                break;
            case sessionModes.SHORT_BREAK:
                message = (
                    <StatusMessage className="bg-success">
                        Lets take a short break...
                    </StatusMessage>
                );
                break;
            case sessionModes.LONG_BREAK:
                message = (
                    <StatusMessage className="bg-success">
                        Lets take a long break...
                    </StatusMessage>
                );
                break;
            default:
                return null;
        }
    }

    return (
        <div>
            {/* Desktop */}
            <div className="d-none d-xl-block fixed-top w-25 mx-auto">
                { message }
            </div>

            {/* Mobile, iPad and iPad Pro */}
            <div className="d-block d-xl-none mx-auto">
                { message }
            </div>
        </div>
    );
};

export default SessionStatusMessage;