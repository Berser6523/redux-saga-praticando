import React, { useEffect } from "react";

// Redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Title } from "../components/home/styled";
// Actions
import { Creators as PeopleCreators } from "../store/ducks/people";

const Main = ({ requestPeopeList, people }) => {
	useEffect(() => {
		requestPeopeList();
	}, [requestPeopeList]);

	return (
		<>
			<Title> Segurança</Title>
			{people.map((repos, i) => (
				<Title key={i}> {repos.name} </Title>
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
