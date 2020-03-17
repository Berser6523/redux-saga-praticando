import React, { useEffect } from "react";

// Redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Actions
import { Creators as PeopleCreators } from "../store/ducks/people";

const Main = ({ requestPeopeList, people }) => {
	useEffect(() => {
		requestPeopeList();
	}, [requestPeopeList]);

	return (
		<>
			{people.map((repos, i) => (
				<h1 key={i}> {repos.name} </h1>
			))}
		</>
	);
};

const mapStateToProps = state => ({
	people: state.people.people.data
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(PeopleCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
