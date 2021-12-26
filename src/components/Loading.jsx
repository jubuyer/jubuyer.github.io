import React, { Component, useEffect } from 'react';
import styles from "../styles/Loading.css"
import J from "../assets/loading/J.gif"

const Loading = () => {
    return (
        <div className='background'>
            <img src={J} className='image' />
        </div>
    )
}

export default Loading;