import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';



function* fetchMyDiscs(action) {
    // HTTP GET discs
    const response = yield axios({
      method: 'GET',
      url: '/api/myDiscs'
    })
    // PUT things in redux: "SET_DISCS"
    yield put({
      type: 'SET_MY_DISCS',
      payload: response.data
    })
  }

  function* myDiscsSaga() {
    yield takeEvery('FETCH_MY_DISCS', fetchMyDiscs);
  }
  
  export default myDiscsSaga;