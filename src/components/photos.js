import React from "react";



const Photos = (props) => {
    // if (!props.picture) return <h3>Loading...</h3>;


    return (    
   <div>
        <img src={props.pic.hdurl} alt ="hello"/>
        <h2>{props.pic.title}</h2>
        <p>{props.pic.explanation}</p>
    </div>
);
};


export default Photos;