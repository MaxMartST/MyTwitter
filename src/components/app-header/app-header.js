import React from 'react';
import './app-header.css'

const AppHeader = ({liked, allPosts}) => {
    return (
        <div className="app-header d-flex">
            <h1>Max Mart</h1>
            <h2>{allPosts} записей, из инх понравилось {liked}</h2>
        </div>
    )
}

export default AppHeader;