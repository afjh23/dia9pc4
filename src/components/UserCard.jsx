import React from 'react'

export const UserCard = ({ user: { id, name, username, email } }) => {
    return (
        <li className='user-item'>
            <figure className='item-img-container'>
                <img src={`https://picsum.photos/seed/${id}/300/300`} />
            </figure>
            <div className='user-info'>
                <h2>{name}</h2>
                <span>@{username}</span>
                <span>{email}</span>

            </div>

        </li>
    )
}
