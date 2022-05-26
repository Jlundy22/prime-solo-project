import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchOneDisc(action) {
    try {
      const discId = action.payload;
      const response = yield axios({
        method: 'GET',
        url: `/api/editDisc/${discId}`
      })
      yield put ({
        type: 'SET_EDIT_DISC',
        payload: response.data
      })
    } catch (err) {
      console.log(err)
    }
  }

  function* editDiscsSaga() {
    yield takeEvery('FETCH_ONE_DISC', fetchOneDisc);
  }
  
  export default editDiscsSaga;