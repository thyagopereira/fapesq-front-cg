import React from 'react'
import './Card.css'

const Card = props => {
    return(
        <div className = 'card text-center'>
            <div className  = 'Overflow'>
            <img src = {props.imgsrc} alt  = "personPic" className ='card-img-top'/>
            </div>
            <div className = 'card-body text-dark'>
                <h4 className = 'card-title'>{props.title}</h4>
                <p className = 'card-text text-secondary'>
                        {props.uni}
                        <br/>
                        {props.phone}
                        <br/>
                        {props.email}
                </p>
                <a href={props.page} className= "btn btn-outline-success">Go to Page</a>
            </div>

        </div>
    );

}

export default Card;