import React from 'react';

const Tugma = ({rang, bg, text}) => {
    return (
        <div>
            <button style={{color:rang, backgroundColor:bg}}>{text}</button>
        </div>
    );
}

export default Tugma;
