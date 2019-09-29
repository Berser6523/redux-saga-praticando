import React, { Component, Fragment } from 'react';


// Redux
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// Actions
import * as People  from '../actions/people'
import Card from '../components/card'
import CounterPeople from '../components/countpeople'


class Main extends Component {
    state = {
        people:{

        }
    }

    componentDidMount(){
        this.props.listPeople()
    }

    render() {
        const { people } = this.props.people
        
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
    people: state.people
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(People, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);