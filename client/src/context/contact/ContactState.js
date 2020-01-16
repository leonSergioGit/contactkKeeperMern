import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types';

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: 'Sergio Leon',
                email: 'segio@gmail.com',
                phone: '34234-34243',
                type: 'personal'
            },
            {
                id: 2,
                name: 'Sergio2 Leon',
                email: 'seg2io@gmail.com',
                phone: '34234-34243',
                type: 'personal'
            },
            {
                id: 3,
                name: 'Sergio3 Leon',
                email: 'segi3o@gmail.com',
                phone: '34234-34243',
                type: 'personal'
            }
        ]
    }

    const [state, dispatch] = useReducer(contactReducer, initialState);

    //Add contact

    //Delete contact

    //Set current contact

    //Clear current contact

    //Update contact

    //Filter contacts

    //clear filter


    return (
        <ContactContext.Provider
          value={{
              contacts: state.contacts
          }}
        >
            { props.children }
        </ContactContext.Provider>
    )
};

export default ContactState;