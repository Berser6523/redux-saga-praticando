import { all, takeLatest, put, call } from 'redux-saga/effects';
import api from '../services/api'


async function apiGet(){
    const response = await api.get('/?nat=br&results=100')
    
    try{
        return response.data.results
    }catch(err){
        console.log(err)
        return err
    }
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
