import {createStore} from 'redux';
import reducer from './reducers';

export default function confirgureStore(initialState){
    const store = createStore(reducer, initialState)
    return store;
}