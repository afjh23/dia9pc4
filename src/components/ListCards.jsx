import React from 'react'
import { UserCard } from './UserCard'

export const ListCards = ({users}) => {
  return (
    <ul className='user-list'>
        {
            users&& users.map((user) => <UserCard key={user.id} user={user}/>)
        }
    </ul>
  )
}
