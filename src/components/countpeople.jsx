import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as People  from '../actions/people'


// import { Container } from './styles';

class CounterPeople extends Component {
    

    filter = (e) =>{
        const value = e.target.value
        this.props.filterPeople(value)
    }

    render() {
        const { people } = this.props
        const { loading } = this.props
        
        return (
            <div className="counter-people">
                <h1>Pessoas Cadastradas {loading ? "Carregando" : ""}  {people.length}</h1>
                <input type="text" onChange={this.filter}/>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(People, dispatch);

const mapStateToProps = state => ({
  people: state.people.data,
  filtro: state.people.filtro,
  loading: state.people.loading
});

export default connect(mapStateToProps,mapDispatchToProps)(CounterPeople)