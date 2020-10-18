import React from 'react';
import './styles.css';

type Props = {
    title: string;
}

const Button = ({title}: Props) => (
    <button 
        className="button"
    >
        {title}
    </button>
);

export default Button;