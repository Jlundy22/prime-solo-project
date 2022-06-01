import { put, takeEvery, } from 'redux-saga/effects';
import axios from 'axios';


function* fetchDiscs(action) {
  // HTTP GET discs
  const response = yield axios({
    method: 'GET',
    url: '/api/browse'
  })
  // PUT things in redux: "SET_DISCS"
  yield put({
    type: 'SET_DISCS',
    payload: response.data
  })
}

function* createDiscItem(action) {
  console.log(action.payload);
  // POST newDiscITem to our server and put it in db:
  const response = yield axios({
    method: 'POST',
    url: '/api/browse',
    data: action.payload
  })
  // Call the fetchDiscs saga function to update the
    // state of our things reducer:
  yield put({
    type: 'FETCH_DISCS'
  })
}




function* browseSaga() {
  yield takeEvery('FETCH_DISCS', fetchDiscs);
   yield takeEvery('CREATE_DISC_ITEM', createDiscItem);
}

export default browseSaga;