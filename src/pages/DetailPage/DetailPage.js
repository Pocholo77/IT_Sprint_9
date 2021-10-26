import React from 'react'
import { useLocation } from "react-router-dom";
import VideoList from '../../components/VideoList/VideoList';
import Main from '../../components/Main/Main';
import VideoDetail from "../../components/VideoDetail/VideoDetail"
import './DetailPage.css'
import AsideNav from '../../components/AsideNav/AsideNav';

export default function Detail(props){
    /* console.log('DetailsPage:', props) */
    return (
       
        <div className="">
            <AsideNav />
            <VideoDetail {...props} />
            {/*   aside */}
        </div>
    )
}
