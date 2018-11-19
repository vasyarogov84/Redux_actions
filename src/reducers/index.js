import { combineReducers } from 'redux';
import BookList from '../reducers/reducer_books';
import activeBook from '../reducers/reducer_active_book';
import showSite from '../reducers/reducer_button';

const rootReducer = combineReducers({
     books: BookList,
     activeBook: activeBook,
     button: showSite
});

export default rootReducer;
