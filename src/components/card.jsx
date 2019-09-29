import React, { Component } from 'react';

// import { Container } from './styles';

export default class Card extends Component {
  render() {
    
    const { 
        name:{title, first, last },
        email,
        cell,
        nat,

        location:{
            city,
            street
        },

        picture: {large}
        } = this.props.person

    return (
        <div className="container-card">
            <div className="container-img">
                <img src={large} alt=""/>
            </div>

            <div className="inf-user">
                <h3>{title} {first} {last}</h3>
                <span>{email}</span>
            </div>

            <div className="descricao-usuario">
                <span>Nacionalidade: {nat}</span>
                <span>Cidade: {city}</span>
                <span>End: {street.name}</span>
                <span>Nº {street.number}</span>
                <span>Tel: {cell}</span>
            </div>

            <div className="social">
                <a href="https://www.facebook.com/">
                    <img src="/img/card/card-01.png" alt=""/>
                </a>
                <a href="https://twitter.com/login?lang=pt">
                    <img src="/img/card/card-02.png" alt=""/>
                </a>
                <a href="https://www.facebook.com/">
                    <img src="/img/card/card-03.png" alt=""/>
                </a>
            </div>
        </div>
    )
  }
}
