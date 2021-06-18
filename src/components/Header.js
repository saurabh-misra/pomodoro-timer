import React from 'react';
import {withRouter} from 'react-router-dom';
import './Header.css';
import NavigationMenu from './NavigationMenu';

let Header = ({location}) => (
    <div>
        <NavigationMenu location={location} />
    </div>
);

Header = withRouter(Header);

export default Header;