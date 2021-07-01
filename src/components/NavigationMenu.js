import React from 'react';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class NavigationMenu extends React.Component {
  constructor( props ) {
    super( props );

    this.state = {
      isMobileNavDropdownMenuVisisble: false
    };

    this.toggleMobileNavDropdownMenu = this.toggleMobileNavDropdownMenu.bind(this);
    this.hideMobileNavDropdownMenu = this.hideMobileNavDropdownMenu.bind(this);
  }

  hideMobileNavDropdownMenu = () => this.setState({ isMobileNavDropdownMenuVisisble: false });
  toggleMobileNavDropdownMenu = () => this.setState({ isMobileNavDropdownMenuVisisble: !this.state.isMobileNavDropdownMenuVisisble });

  render(){
    const { location } = this.props;
    return (
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
				{/* Logo */}
        <Link className="navbar-brand" to="/">Pomodoro Timer</Link>

				{/* left nav menu */}
        <Nav className="mr-auto"></Nav>

				{/* right nav menu */}
        <Nav>
					{/* Desktop nav menu */}
					{/* Timer */}
          <Nav.Link href="/" className={`nav-item ${ location.pathname === '/' ? 'active':'' } d-none d-sm-block`}>
            <Link className="nav-link" to="/">
              <i className="material-icons">timer</i><span className="d-inline-block d-sm-none">&nbsp;Timer</span>
            </Link>
          </Nav.Link>
					{/* Report */}
          <Nav.Link href="/statistics" className={`nav-item ${ location.pathname === '/statistics' ? 'active':'' } d-none d-sm-block`}>
            <Link className="nav-link" to="/statistics">
              <i className="material-icons">assessment</i><span className="d-inline-block d-sm-none">&nbsp;Report</span>
            </Link>
          </Nav.Link>
					{/* Settings */}
          <Nav.Link href="/settings" className={`nav-item ${ location.pathname === '/settings' ? 'active':'' } d-none d-sm-block`}>
            <Link className="nav-link" to="/settings">
              <i className="material-icons">settings</i><span className="d-inline-block d-sm-none">&nbsp;Settings</span>
            </Link>
          </Nav.Link>
					{/* About */}
          <Nav.Link href="/about" className={`nav-item ${ location.pathname === '/about' ? 'active':'' } d-none d-sm-block`}>
            <Link className="nav-link" to="/about">
              <i className="material-icons">info</i><span className="d-inline-block d-sm-none">&nbsp;About</span>
            </Link>
          </Nav.Link>
					{/* Github */}
          <Nav.Link href="https://github.com/saurabh-misra/pomodoro-timer" 
            target="_blank"
            rel="noopener noreferrer"
            className="d-none d-sm-block"
            >
            <a 
              className="nav-link" 
              href="https://github.com/saurabh-misra/pomodoro-timer" 
              target="_blank"
              rel="noopener noreferrer"
							>
							<i className="material-icons">code</i><span className="d-inline-block d-sm-none">&nbsp;Github</span>
						</a>
					</Nav.Link>

					{/* Mobile nav menu */}
					<NavDropdown title={<i className="material-icons" onClick={this.toggleMobileNavDropdownMenu}>menu</i>} id="mobile-nav-toggle" className="nav-link d-block d-sm-none bg-dark border-light" show={this.state.isMobileNavDropdownMenuVisisble}>
						{/* Timer */}
						<Link className="dropdown-item text-light p-2 pl-3 bg-dark" to="/" onClick={this.hideMobileNavDropdownMenu}>
							<i className="material-icons float-left mr-2">timer</i>&nbsp;Timer
						</Link>
						{/* Report */}
						<Link className="dropdown-item text-light p-2 pl-3 bg-dark" to="/statistics" onClick={this.hideMobileNavDropdownMenu}>
							<i className="material-icons float-left mr-2">assessment</i>&nbsp;Report
						</Link>
						{/* Settings */}
						<Link className="dropdown-item text-light p-2 pl-3 bg-dark" to="/settings" onClick={this.hideMobileNavDropdownMenu}>
							<i className="material-icons float-left mr-2">settings</i>&nbsp;Settings
						</Link>
						{/* About */}
						<Link className="dropdown-item text-light p-2 pl-3 bg-dark" to="/about" onClick={this.hideMobileNavDropdownMenu}>
							<i className="material-icons float-left mr-2">info</i>&nbsp;About
						</Link>
						{/* Github */}
						<a 
							className="dropdown-item text-light p-2 pl-3 bg-dark" 
							href="https://github.com/saurabh-misra/pomodoro-timer" 
							target="_blank"
							rel="noopener noreferrer"
							onClick={this.hideMobileNavDropdownMenu}
							>
							<i className="material-icons float-left mr-2">code</i>&nbsp;Github
						</a>
					</NavDropdown>
				</Nav>
      </Navbar>
    );
  }
}

export default NavigationMenu;