import React, { useState } from 'react';
import Button from '../../core/components/Button';
import { User } from '../../core/types/User';
import CardBase from './components/CardBase';
import ImageLoader from './components/Loaders/ImageLoader';
import InfoLoader from './components/Loaders/InfoLoader';
import ProfileFieldData from './components/ProfileFieldData';
import UpperProfileData from './components/UpperProfileData';
import axios from 'axios';
import './styles.css'
import dayjs from 'dayjs';

type FormState = {
    name: string,     
}

const BASE_URL = 'https://api.github.com/users/'


const Search = () => {
    const [username, setUsername] = useState<FormState>({
        name: ''
    });
    const [user, setUser] = useState<User>();
    const [isLoading, setIsLoading] = useState(false);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;

        setUsername(data => ({[name]: value}))
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setIsLoading(true);
        axios.get(`${BASE_URL}${username.name}`)
            .then(response => setUser(response.data))
            .finally(() => setIsLoading(false));
    }
   
    return (
        <>
        <div>
            <CardBase className="card-base">
                <div className="card-base-search-profile">
                    <h1 className="find-profile-title">Encontre um perfil Github</h1>
                    <form
                        onSubmit={handleSubmit} 
                    >
                    <input
                        value={username.name} 
                        type="text" 
                        name="name"
                        placeholder="Usuário Github"
                        className="input-profile-search" 
                        onChange={handleOnChange}
                    />
                    <Button 
                        title="Encontrar"
                    />
                    </form>
                </div>
            </CardBase>
        </div>

        {user && 
        <div className="card-base-profile-info-container">
            <CardBase className="card-base info-content">
                        <div className="profile-data">
                            <div>
                                {isLoading ? <ImageLoader /> : (
                                <img
                                    src={user.avatar_url}
                                    alt={user.login}
                                    className="profile-img" />)}
                            </div>
                            <div className="card-base-profile-info">
                                {isLoading ? <InfoLoader/> : (
                                <>
                                    <div className="upper-data">
                                        <UpperProfileData
                                            name="Repositórios públicos"
                                            value={user.public_repos} />
                                        <UpperProfileData
                                            name="Seguidores"
                                            value={user.followers} />
                                        <UpperProfileData
                                            name="Seguindo"
                                            value={user.following} />
                                    </div>
                                    <div className="profile-field-container">
                                        <h3 className="profile-field-title">Informações</h3>
                                        <ProfileFieldData
                                            name="Empresa"
                                            content={user.company} />
                                        <ProfileFieldData
                                            name="Website/Blog"
                                            content={user.blog} />
                                        <ProfileFieldData
                                            name="Localidade"
                                            content={user.location} />
                                        <ProfileFieldData
                                            name="Membro desde"
                                            content={dayjs(user.created_at).format('DD/MM/YYYY')} />
                                    </div>

                                   
                                </>
                                )}
                            </div>
                        </div>
                        {!isLoading && 
                        <a href={user.html_url}>
                             <Button
                            title="Ver perfil" 
                            />
                        </a>
                        }
            </CardBase>
        </div>
    }
    </>
    );
}

export default Search;