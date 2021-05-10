import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
            <div className="container">
                <h1>
                    <Link 
                        to={'/'}
                        className="text-light"
                    >
                        Trove
                    </Link>
                </h1>
            </div>
        </nav>
    )
}