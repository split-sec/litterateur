import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  function handleCallbackResponse(response) {
    console.log("Response", response);
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "490307455016-rqng7v60arn5f3k3rlcnpf1mhv9cs3af.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large" }
    )  
  }, [])

  return (
    <>
      <div id="signInDiv"></div>
    </>
  )
}

export default App
