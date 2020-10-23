import { combineReducers } from 'redux';
import loading from './loading';
import notifications from './notifications';
import saving from './saving';
import resources from './resources'

const root:any = combineReducers({
    loading,
    notifications,
    resources,
    saving,
});
export default root;