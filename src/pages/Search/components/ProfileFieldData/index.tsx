import React from 'react';
import './styles.css';

type Props = {
    name: string,
    content: string
}

const ProfileFieldData = ({name, content}: Props) => (
    <div className="profile-field">
        <h6 className="profile-field-name">
            {name}:
            <p className="profile-field-content">
                &nbsp;{content}
            </p>
        </h6>
    </div>
);

export default ProfileFieldData;