import React from 'react'
import "../App.css"
import {useEffect} from 'react'



export default function Login(){
    function handleCallbackResonse(response){
        console.log("Encoded JWT ID token: " + response.credential);
    }

    useEffect(() => {
      /* global google */
      google.accounts.id.initialize({
        client_id: "929526562067-nht9q7isqqh06ci13se0i0stf3vnfq6j.apps.googleusercontent.com",
        callback: handleCallbackResonse
      });
      google.accounts.id.renderButton(
        document.getElementById('signInDiv'),
        {theme: 'outline', size: 'large'}
      );
    }, []);

    return(
        <div>
            <div id="signInDiv"></div>
        </div>
    )
}
