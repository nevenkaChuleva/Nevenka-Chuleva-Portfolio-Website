import React from 'react';

export default function Card(props){
    return( 
        <div className="card--container">
            <div className="card--body">
                <a href={props.link} target="_blank"> <img src={props.img} className="card--image"/></a>
                <a href={props.code}><p className="card--button"> View Code </p></a>
            </div>

        </div>
    )
}
