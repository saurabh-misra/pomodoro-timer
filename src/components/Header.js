import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import './Header.css';

let Header = ({location}) => (
    <div>
        <nav className="navbar navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">Pomodoro Timer</Link>
            <div className="expand navbar-expand">
                <ul className="navbar-nav">
                    <li className={`nav-item ${ location.pathname === '/' ? 'active':'' } mr-3`}>
                        <Link className="nav-link" to="/">
                        <i className="material-icons">timer</i>
                        </Link>
                    </li>
                    <li className={`nav-item ${ location.pathname === '/statistics' ? 'active':'' } mr-3`}>
                        <Link className="nav-link" to="/statistics">
                            <i className="material-icons">info</i>
                        </Link>
                    </li>
                    <li className={`nav-item ${ location.pathname === '/settings' ? 'active':'' } mr-3`}>
                        <Link className="nav-link" to="/settings">
                            <i className="material-icons">settings</i>
                        </Link>
                    </li>
                    <li className='nav-item mr-3'>
                        <a 
                            className="nav-link" 
                            href="https://github.com/saurabh-misra/pomodoro-timer" 
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="material-icons">code</i>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
);

Header = withRouter(Header);

export default Header;