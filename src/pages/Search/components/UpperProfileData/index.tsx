import React from 'react';
import './styles.css'

type Props = {
    name: string,
    value: number
}

const UpperProfileData = ({name, value}: Props) => (
    <div className="upper-profile-data-container">
        <h5>{name}: {value}</h5>
    </div>
);

export default UpperProfileData;