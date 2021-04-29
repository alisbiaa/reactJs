import * as React from 'react';


export const NavBar = (props) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="navbar-brand">
                Navbar
                <span className="badge badge-pill badge-secondary">
                    {props.totalCounters}
                </span>
            </div>
        </nav>
    );
};
