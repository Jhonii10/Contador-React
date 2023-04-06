import React from 'react';

const Register = () => {

    let variable = '';

   if (navigator.serviceWorker){
      navigator.serviceWorker.register('./serviceWorker.js')
   }



    return (
        <div>
            {variable}
        </div>
    );
}

export default Register;
