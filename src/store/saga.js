import { all, takeLatest, put, call, select } from 'redux-saga/effects';
import api from '../services/api'


async function apiGet(){
    const response = await api.get('/?results=10')
    return response.data.results
}

function* assynListPeople(){
    const response = yield call(apiGet)
        
    yield put({
        type: 'GET_PEOPLE',
        people: response
    })
}

export default function* rootSaga() {
  yield all([
      takeLatest("ASYNC_REQUEST_PEOPLE", assynListPeople)
  ]);
}
