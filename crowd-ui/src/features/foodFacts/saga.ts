import {GetDataInformation} from './FoodFactsAPI'
import {call, put, takeEvery,SagaReturnType} from 'redux-saga/effects'
import GET_INFO_SUCCESS from './FoodFactsSlice'
import {getInfoSuccess} from './FoodFactsSlice'
type FetchUserResponseType = SagaReturnType<typeof GetDataInformation>;

export function* GetInformation(){
  
    const informationFromSaga:FetchUserResponseType=yield call(GetDataInformation as any)
    yield put (getInfoSuccess(informationFromSaga))
    
}

function* FoodFactsSaga(){
    
    yield takeEvery("GET_INFO",GetInformation);
}
export default FoodFactsSaga;







