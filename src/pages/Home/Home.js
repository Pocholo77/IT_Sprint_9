import React from 'react'
import VideoList from '../../components/VideoList/VideoList';

export default function Home(props) {
 
    return (
        <div>
            <VideoList {...props} type="grid" />
        </div>
    )
}
