import { all, takeLatest } from "redux-saga/effects";
import { Types as PeopleTypes } from "../ducks/people";
import { getPeople } from "./people";

export default function* rootSaga() {
	yield all([takeLatest(PeopleTypes.REQUEST_PEOPLE_LIST, getPeople)]);
}
