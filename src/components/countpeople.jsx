import React, { Component } from 'react';
import { connect } from 'react-redux'


// import { Container } from './styles';

class CounterPeople extends Component {
  render() {
        const { people } = this.props

        return (
            <div className="counter-people">
                <h1>Pessoas Cadastradas {people.length}</h1>
            </div>
        );
  }
}

const mapStateToProps = state => ({
  people: state.people.people
});

export default connect(mapStateToProps,null)(CounterPeople)