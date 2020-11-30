import { v1 as uuid } from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types';

const initialState = {
    items: [
        { id: uuid(), name: 'Sword' },
        { id: uuid(), name: 'Shield' },
        { id: uuid(), name: 'Staff' },
        { id: uuid(), name: 'Armor' }
    ]
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state
            }
        default:
            return state;
    }
}