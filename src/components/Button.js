import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const Button = ({ children, type, onClick, buttonStyle, buttonSize, disabled, link }) => {

    return (
        <Link to={link} className="btn-mobile">
            {disabled ?
                <button
                    className={`btn ${buttonStyle} ${buttonSize} btn--disabled`}
                    type={type}
                    onClick={onClick}
                    disabled
                >
                    {children}
                </button>
                :
                <button
                    className={`btn ${buttonStyle} ${buttonSize}`}
                    type={type}
                    onClick={onClick}
                >
                    {children}
                </button>
            }
        </Link>
    )
}

export default Button;
