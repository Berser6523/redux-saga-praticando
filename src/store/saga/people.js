import { put, call } from "redux-saga/effects";
import { Types as PeopleTypes } from "../ducks/people";
import api from "../../services/api";

export function* getPeople() {
	try {
		const response = yield call(api.get);

		console.log(response);

		yield put({
			type: PeopleTypes.SUCCESS_PEOPLE_LIST,
			data: response.data,
			filtro: ""
		});
	} catch (err) {
		console.log(err);
		yield put({ type: PeopleTypes.FAILUIRE_PEOPLE_LIST, filtro: "" });
	}
}
