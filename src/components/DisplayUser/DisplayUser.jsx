import React from 'react'
import '../UserData/UserData.css'
import { useSelector } from 'react-redux'
import { removeUser } from '../../store/slices/UserSlice'
import { useDispatch } from 'react-redux'

const DisplayUser = () => {
    const dispatch = useDispatch();

    const data = useSelector((state) => {
        return state.users
    })
    console.log(data);

    const deleteUser = (id) => {
        dispatch(removeUser(id));
    }

    return (
        <>
            {data.map((user, id) => {
                return <li key={id} className='user-list'>
                    <span>{user}</span>
                    <button className='btn btn-delete' onClick={() => { deleteUser(id) }}> delete </button>
                </li>


            })}
        </>
    )
}

export default DisplayUser