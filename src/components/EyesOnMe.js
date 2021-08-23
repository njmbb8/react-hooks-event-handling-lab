import React from 'react';

function handleBlur(event){
    console.log('Hey! Eyes on me!');
}

function handleFocus(event){
    console.log('Good!');
}

function EyesOnMe(){
    return(
        <button onFocus={handleFocus} onBlur={handleBlur}>Eyes on me</button>
    )
}

export default EyesOnMe;