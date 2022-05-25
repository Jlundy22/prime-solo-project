import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* deleteDiscItem(action) {
  console.log('**** in deleteDiscItem saga')
try {
  const item = yield axios.delete(`/api/myDiscs/${action.payload}`);
  yield put({
    type: 'FETCH_MY_DISCS',
  });
} catch {
  console.log('DELETE disc error');
}
}


function* deleteDiscSaga() {
   yield takeLatest('DELETE_DISC', deleteDiscItem);
}

export default deleteDiscSaga;