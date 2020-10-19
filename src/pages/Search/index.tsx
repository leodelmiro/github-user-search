import React from 'react';
import Button from '../../core/components/Button';
import CardBase from './components/CardBase';
import ProfileFieldData from './components/ProfileFieldData';
import UpperProfileData from './components/UpperProfileData';
import './styles.css'

const Search = () => (
    <>
        <div>
            <CardBase className="card-base">
                <div className="card-base-search-profile">
                    <h1 className="find-profile-title">Encontre um perfil Github</h1>
                    <input 
                        type="text" 
                        name="name"
                        placeholder="Usuário Github"
                        className="input-profile-search" 
                    />
                    <Button 
                        title="Encontrar"    
                    />
                </div>
            </CardBase>
        </div>

        <div className="card-base-profile-info-container">
            <CardBase className="card-base info-content">
                <div className="profile-data">
                    <div>
                        <img 
                            src="https://avatars2.githubusercontent.com/u/43610369?s=460&v=4" 
                            alt="profile-img"
                            className="profile-img"/>
                    </div>
                    <div className="card-base-profile-info">
                        <div className="upper-data">
                            <UpperProfileData
                                name="Repositórios públicos"
                                value={62}
                            />
                            <UpperProfileData
                                name="Seguidores"
                                value={127}
                            />
                            <UpperProfileData
                                name="Seguindo"
                                value={416}
                            />
                        </div>
                        <div className="profile-field-container">
                            <h3 className="profile-field-title">Informações</h3>
                            <ProfileFieldData 
                                name="Empresa"
                                content=""
                            />
                             <ProfileFieldData 
                                name="Website/Blog"
                                content=""
                            />
                             <ProfileFieldData 
                                name="Localidade"
                                content=""
                            />
                             <ProfileFieldData 
                                name="Membro desde"
                                content=""
                            />
                        </div>
                    </div>
                </div>
                <Button 
                        title="Ver perfil"    
                />
            </CardBase>
        </div>
    </>
);

export default Search;