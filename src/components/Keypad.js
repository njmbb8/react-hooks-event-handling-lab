import React from 'react';

function handleChange(event){
    console.log('Entering password...');
}

function Keypad(){
    return(
        <input type="password" onChange={handleChange}></input>
    )
}

export default Keypad;