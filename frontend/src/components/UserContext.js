import { createContext, useEffect, useReducer, useState } from "react";
import {capitalizeFirstLetter} from "./helpers"

export const UsersContext = createContext();

const initialState = {
    id: null,
    name: null,
    friends: [],
    avatarUrl: null,
}

const reducer = (state, action) => {
    switch (action.type) {
        case "user-logged-in": {
            return {
                ...state, 
                id: action.id,
                name: capitalizeFirstLetter(action.name),
                friends: [action.friends],
                avatarUrl: action.avatarUrl,
            }
        }
        case "user-logged-out": {
            return {
                id: null,
                name: null,
                friends: [],
                avatarUrl: null,
            }
        }
        default: throw new Error(`Unrecognized action: ${action.type}`)
    }
}

export const UsersProvider = ({children}) => {
    const [users, setUsers] = useState();
    const [dataLength, setDataLength] = useState();

    const [state, dispatch] = useReducer(reducer, initialState);

    const recieveInfoFromSessionStorage = (data) => {
        dispatch({
            type: "user-logged-in", 
            ...data,
        })
    }

    useEffect(() => {
        fetch("api/users")
        .then((data) => {
            return data.json();
        })
        .then((users) => {
            setUsers(users.data)
            setDataLength(users.data.length)
        })
        .catch((error) => {
            return error
        })

    }, [])

    return (
        <UsersContext.Provider value={{users, dataLength, state, action: {recieveInfoFromSessionStorage}}}>
            {children}
        </UsersContext.Provider>
    );
}

