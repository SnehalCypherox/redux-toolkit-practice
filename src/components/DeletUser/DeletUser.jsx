import './DeleteUser.css'
import { deleteUsers } from '../../store/slices/UserSlice'
import { useDispatch } from 'react-redux';

const DeletUser = () => {
  const dispatch = useDispatch();

  const deleteAllUsers = (payload) => {
    console.log(payload);
    dispatch(deleteUsers(payload))
  }

  return (
    <div>
      <button className='delete-btn' onClick={() => {deleteAllUsers()}}>Delete All User</button>
    </div>
  )
}

export default DeletUser