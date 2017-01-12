import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionRecucer from './SelectionRecucer';

export default combineReducers({
    libraries: LibraryReducer,
    selectedLibraryId: SelectionRecucer
});