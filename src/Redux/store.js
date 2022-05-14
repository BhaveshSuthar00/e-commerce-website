import { legacy_createStore, combineReducers, applyMiddleware } from 'redux';
import { loginReducer } from './Login/Reducer';
import reduxThunk from 'redux-thunk';
import { dataReducer } from './Data/Reducer';
const rootReducer = combineReducers({
  login: loginReducer,
  Data : dataReducer
})
export const store = legacy_createStore(
  rootReducer,
  applyMiddleware(reduxThunk)
);
