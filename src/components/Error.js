import React from 'react';

const Error = ({mensaje}) => {
    return (
     <div className="bg-alert">   
         <h2 className="mt-5 text-center">{mensaje}</h2>
     </div>
    );
}

export default Error;