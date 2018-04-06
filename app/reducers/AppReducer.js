import { combineReducers } from 'redux';
import NavReducer from './NavReducer';
import ColorReducer from './ColorReducer';
import FetchPage from './FetchReducer';

const AppReducer = combineReducers({
  nav: NavReducer,
  color: ColorReducer,
  fetch: FetchPage,
});

export default AppReducer;
