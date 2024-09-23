import React from 'react'
import { useParams } from '../../../node_modules/react-router-dom/dist/index'

const data = {
  james: {
    name: 'ijh',
    description: 'who likes JS'
  },
  jime: {
    name: 'yjm',
    description: 'like ijh',
  }
};

const Profile = () => {
  const params = useParams();
  const profile = data[params.username];
  return (
    <div>
      <h1>user profile</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
          </div>) : <p>this user's profile not exist</p>}
    </div>
  )
}

export default Profile