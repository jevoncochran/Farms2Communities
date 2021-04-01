import { combineReducers } from "redux";

import { customer } from "./customer-reducer";
import { admin } from "./admin-reducer";

export default combineReducers({ customer, admin });
