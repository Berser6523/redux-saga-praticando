import React, { Component } from 'react';


// Redux
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// Actions
import * as People  from '../actions/people'


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

        console.log(people)

        return (
            <div className="container-people">
                {people.map((person, index) => <h1 key={index}>{person.name.first}</h1>)}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    people: state.people
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(People, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);