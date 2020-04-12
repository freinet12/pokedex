import React, { Component } from 'react';
import './Pokecard.css';
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail';

let padToThree = (num) => (num <= 999 ? `00${num}`.slice(-3) : num);

class Pokecard extends Component {

    static defaultProps = {
        id: 25, 
        name: 'Pikachu', 
        type: 'electric', 
        base_experience: 112
    }
    
    render(){

        const { id, name, type, base_experience } = this.props;
        let imgSrc = `${POKE_API}/${padToThree(id)}.png`;

        return (
            <div className="Pokecard">
                <div className="Pokecard-title">
                    <h1>{name}</h1>
                </div>
                <div className="Pokecard-image">
                    <img src={imgSrc} alt={name}/>
                </div>
                <div className="Pokecard-info">
                    <p><strong>Type:</strong> {type} </p>
                    <p><strong>Experience:</strong>  {base_experience} </p>
                </div>
            </div>
        );
    }
}

export default Pokecard;