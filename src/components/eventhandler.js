import React, { useState } from 'react'
import PropTypes from 'prop-types'

const EventHandler = () => {

    let c = 1;


    const [count,setCount]= useState(10);
    const handleClick = () => {
        c++;
        console.log(c);
        
        // alert("That You don't have to click it ")
    }
    const updateState = () => {
        console.log(c);
        setCount(count + 1);
    }

  return (
    <div>
        <h1 className="text-center">Event Handling</h1>
        <hr />
        <button className="btn btn-primary" onClick={handleClick}>Click to Know</button>
        <h1>{c}</h1>
        <button className="btn btn-primary" onClick={updateState}>Update Kro</button>
        <h1>{count}</h1>
    </div>
  );
}

EventHandler.propTypes = {}

export default EventHandler;