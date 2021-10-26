import React from 'react'
import AsideNav from '../../components/AsideNav/AsideNav';
import VideoList from '../../components/VideoList/VideoList';
import './HomePage.css'

export default function HomePage(props) {
 
    return (
        <main>
            <AsideNav />
            <VideoList {...props} type="grid" />
        </main>
    )
}
