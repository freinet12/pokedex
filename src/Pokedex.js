import React , { Component } from 'react';
import './Pokedex.css';
import Pokecard from './Pokecard';

class Pokedex extends Component {
    render() {

        let { pokemon } = this.props;
        let result;
        if (this.props.isWinner) {
            result = <p className="Pokedex-winner">Winner!</p>
        } else {
            result = <p className="Pokedex-loser">Loser!</p>
        }

        return (
            <div className="Pokedex">
                <header>
                    <h2>Total Experience: {this.props.experience} </h2> 
                    {result}
                </header>
                <section>
                   {
                    pokemon.map( card => 
                        <Pokecard
                            key={card.id}
                            id={card.id}
                            name={card.name}
                            type={card.type}
                            base_experience={card.base_experience}
                        />
                    )
                   }
                </section>
            </div>
        );
    }
}

export default Pokedex;