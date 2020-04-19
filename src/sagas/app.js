// outsource dependencies
import {takeEvery, put, call} from 'redux-saga/effects';

// local dependencies
import { get } from 'axios';
import { TYPES } from '../constans/types';

function* setData() {
  try {
    yield put({type: TYPES.START_LOADING});

    const response = yield call(getData);
    yield put({type: TYPES.CALL_SUCCESS, data: response.data});

    yield put({type: TYPES.FINISH_LOADING});

  } catch (e) {
    yield put({type: TYPES.SHOW_ERROR});
    yield put({type: TYPES.FINISH_LOADING});
  }
}

async function getData() {
  return await get('https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0');
}

export default function* () {
  yield takeEvery(TYPES.SET_DATA, setData);
}
