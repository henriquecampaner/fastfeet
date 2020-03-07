import { combineReducers } from 'redux';

import auth from './auth/reducer';
import order from './order/reducer';
import user from './user/reducer';

export default combineReducers({ auth, user, order });
