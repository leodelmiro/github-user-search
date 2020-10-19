import React from 'react';
import './styles.css';

type Props = {
    children: React.ReactNode;
}

const CardBase = ({children}: Props) => (
    <div className="cardbase">
        {children}
    </div>
);

export default CardBase;