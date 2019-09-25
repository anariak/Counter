import React from 'react';
import PropTypes from 'prop-types';

let contador = props=>{
    let contador = 0;
    
    setInterval(()=>{

    }, 1000);

    return (
        <div className="contador">
            <h3>{props.unidades}</h3>
            <h3>{props.decenas}</h3>
            <h3>{props.centenas}</h3>
        </div>
    )
};

contador.propTypes={
    unidades: PropTypes.number,
    decenas: PropTypes.number,
    centenas: PropTypes.number
}

export default contador;