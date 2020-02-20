import React, { useEffect, useState } from "react";
import axios from "axios";
import Photos from "./photos"



const TheContainer = ()=>{
    const [picture, setPicture] = useState([]);
    const date = new Date().toISOString().split('T')[0];
    
    useEffect(() =>
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
            .then(res => {
                const picInfo = res.data;
                console.log(picInfo);
                setPicture(picInfo);
            }), [date]);


    return (
        <Photos pic={picture} />
    );
}
export default TheContainer;