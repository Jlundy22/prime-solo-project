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
  };

  function* fetchOneDisc(action) {
    const discId = action.payload
    const response = yield axios({
      method: 'GET',
      url: `/api/myDiscs/${discId}`
    })
    // PUT things in redux: "SET_DISCS"
    yield put({
      type: 'SET_DISC_TO_EDIT',
      payload: response.data
    })
  };

  function* myDiscsSaga() {
    yield takeEvery('FETCH_MY_DISCS', fetchMyDiscs);
    yield takeEvery('FETCH_ONE_DISC', fetchOneDisc);
  }
  
  export default myDiscsSaga;