import React from 'react'
import { useLocation } from "react-router-dom";
import VideoList from '../../components/VideoList/VideoList';
import Main from '../../components/Main/Main';
import VideoDetail from "../../VideoDetail/VideoDetail"
import './Detail.css'

export default function Detail(props) {
    console.log('DetailsPage:', props)
    return (
       
        <div>
            <h1>detail Page:</h1>
            {/* <Main {...props}/> */}
            <VideoDetail {...props} />
        </div>
    )
}
