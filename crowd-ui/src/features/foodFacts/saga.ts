import {call, put, takeEvery,SagaReturnType} from 'redux-saga/effects'
import {GetDataInformation,PostDataInformation} from './FoodFactsAPI'
import { setInformation,setLoading,clearInformation } from './FoodFactsSlice';
import { GET_DATA_FETCH, POST_DATA } from "./actions";
type GetDataInformationType = SagaReturnType<typeof GetDataInformation>;
type PostDataInformationType = SagaReturnType<typeof PostDataInformation>;


function* GetInformation() {
    const response:GetDataInformationType = yield call(GetDataInformation);
    yield put( setInformation(response.random));
    yield put(setLoading(false));
}

  function* postInformation(action:any) {
    const userId = 0;
    const data = action.payload;
    yield put(setLoading(true));
    const response:PostDataInformationType = yield call(PostDataInformation, data, userId);
  
    if (response.status === 200) {
      yield put(clearInformation());
      yield put(setLoading(false));
    } else {
      yield put(setLoading(true));
    }
  }

function* FoodFactsSaga(){
  yield takeEvery(POST_DATA, postInformation);
  yield takeEvery(GET_DATA_FETCH, GetInformation);;
}
export default FoodFactsSaga;







