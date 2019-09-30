import React, { Component, Fragment } from 'react';


// Redux
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// Actions
import * as People  from '../actions/people'
import Card from '../components/card'
import CounterPeople from '../components/countpeople'


class Main extends Component {
    
    componentDidMount(){
        this.props.requestPeopeList()
    }

    render() {
        let people  = this.props.people
        const { filtro } = this.props

        if(filtro){
            people = people.filter((person) => JSON.stringify(person,['name','first','last','title' ,'email', 'phone']).includes(filtro))
        }

        return (
            <Fragment>
                <CounterPeople />

                <div className="container-card-people">
                    {people.map((person, i) => <Card key={i} person={person}/>)}
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    people: state.people.data,
    filtro: state.people.filtro
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(People, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);