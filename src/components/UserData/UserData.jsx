import React from 'react'
import DeletUser from '../DeletUser/DeletUser'
import './UserData.css'
import { fakeData } from '../../api'
import { useDispatch } from 'react-redux'
import { addUser } from '../../store/slices/UserSlice'
import DisplayUser from '../DisplayUser/DisplayUser'


const UserData = () => {
    const dispatch = useDispatch();

    const addNewUser = (payload) => {
        console.log(payload);
        dispatch(addUser(payload))
    }
    return (
        <div className='content'>
            <div className="admin-table">
                <h3 className='subTitle'>List of users :</h3>
                <button onClick={() => addNewUser(fakeData())}>Add User</button>
            </div>
            <ul className='user-Data'>
                <DisplayUser />
            </ul>
            <DeletUser />
        </div>
    )
}

export default UserData