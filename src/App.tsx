import { useState } from "react";
import { SignUpBox, LoginBox, Slider } from "./Auth.tsx"

import "./IntroMessage.scss";
import "./Auth.scss";

function App() {
  return (
    <>
      <div className="container">
        <IntroMessage />
        <AuthBox />
      </div>
    </>
  );
}

function IntroMessage() {
  return (
    <div className="intro">
      <div className="intro-signup">
        <h1 className="heading-primary--main">New User ?</h1>
        <h1 className="heading-primary--sub">
          Sign Up and join us by creating an account.
        </h1>
      </div>
      <div className="intro-login">
        <h1 className="heading-primary--main">Welcome !</h1>
        <h1 className="heading-primary--sub">
          Sign In and enjoy.
        </h1>

      </div>
    </div>
  );
}

function AuthBox() {

  const [showLogin, setShowLogin] = useState(true);
  console.log(showLogin)
  function handleAuth() {
    setShowLogin(!showLogin);
  }

  let classes = "auth";
  if (showLogin == false) {
    classes = "auth slide-animation";
  }

  return (
    <>
      <div className={classes}>
        <SignUpBox showLogin={showLogin} />
        <Slider showLogin={showLogin} handleAuth={handleAuth} />
        <LoginBox showLogin={showLogin} />
      </div>
    </>
  );
}

export default App;
