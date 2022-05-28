import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchOneDisc(action) {
    try {
      const discId = action.payload;
      const response = yield axios({
        method: 'GET',
        url: `/api/editDisc/${Number(discId)}`
      })
      console.log("got response", response);
      yield put ({
        type: 'SET_EDIT_DISC',
        payload: response.data
      })
    } catch (err) {
      console.log(err)
    }
  }

  function* putEditedDisc(action) {
    console.log(action.payload);
    try {
      const discId = action.payload.discId;
       yield axios({
        method: 'PUT',
        url: `/api/editDisc/${Number(discId)}`,
        data: action.payload
      })
    } catch (err) {
      console.log(err)
    }
  }

  function* editDiscsSaga() {
    yield takeEvery('FETCH_ONE_DISC', fetchOneDisc);
    yield takeEvery('EDITED_DISC', putEditedDisc);
  }
  
  export default editDiscsSaga;