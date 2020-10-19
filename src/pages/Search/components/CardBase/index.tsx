import React from 'react';
import './styles.css';

type Props = {
    className?: string;
    children: React.ReactNode;
}

const CardBase = ({children, className}: Props) => (
    <div className={className}>
        {children}
    </div>
);

export default CardBase;