import {useState, useRef, useLayoutEffect } from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";

export function SignUpBox({ showLogin }: { showLogin: boolean }) {
  return (
    <TransitionGroup className="auth-section">
      {!showLogin && (
        <CSSTransition
          in={showLogin}
          timeout={{ enter: 1000, exit: 1000 }}
          classNames="auth-form__signup"
        >
          <div className="auth-form">
            <h1 className="heading-primary--main">Create an Account</h1>
            <div className="icon">
              <span className="icon__init_text">or join with:</span>
              <img
                className="icon__img"
                src=".src/assets/icons8-google-plus.svg"
                alt="no image"
              />
              <img
                className="icon__img"
                src=".src/assets/icons8-facebook.svg"
                alt="no image"
              />
              <img
                className="icon__img"
                src=".src/assets/icons8-linked-in.svg"
                alt="no image"
              />
            </div>
            <form className="auth-form__signup" method="post">
              <input
                className="auth-form-field-box"
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                required
              />
              <label className="auth-form-field-label" htmlFor="username">
                Username
              </label>
              <input
                className="auth-form-field-box"
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
              />
              <label className="auth-form-field-label" htmlFor="email">
                Email
              </label>
              <input
                className="auth-form-field-box"
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                required
              />
              <label className="auth-form-field-label" htmlFor="password">
                Password
              </label>
              <button className="btn btn-auth-form" type="submit">
                Sign Up
              </button>
            </form>
          </div>
        </CSSTransition>
      )}
    </TransitionGroup>
  );
}

export function LoginBox({ showLogin }: { showLogin: boolean }) {
  return (
    <TransitionGroup className="auth-section">
      {showLogin && (
        <CSSTransition
          in={showLogin}
          timeout={{ enter: 1000, exit: 1000 }}
          classNames="auth-form__login"
        >
          <div className="auth-form">
            <h1 className="heading-primary--main">Sign In</h1>
            <div className="icon">
              <span className="icon__init_text">or sign in with:</span>
              <img
                className="icon__img"
                src=".src/assets/icons8-google-plus.svg"
                alt="no image"
              />
              <img
                className="icon__img"
                src=".src/assets/icons8-facebook.svg"
                alt="no image"
              />
              <img
                className="icon__img"
                src=".src/assets/icons8-linked-in.svg"
                alt="no image"
              />
            </div>
            <form className="auth-form__login" method="post">
              <input
                className="auth-form-field-box"
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                required
              />
              <label className="auth-form-field-label" htmlFor="username">
                Username
              </label>
              <input
                className="auth-form-field-box"
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                required
              />
              <label className="auth-form-field-label" htmlFor="password">
                Password
              </label>
              <div className="password-recovery">
                <a href="">Forgot your password?</a>
              </div>
              <button className="btn btn-auth-form" type="submit">
                Sign In
              </button>
            </form>
          </div>
        </CSSTransition>
      )}
    </TransitionGroup>
  );
}

export function Slider({
  showLogin,
  handleAuth,
}: {
  showLogin: boolean;
  handleAuth: () => void;
}) {
  const [classes, setClasses] = useState("slider");
  const [btnClasses, setBtnClasses] = useState("btn btn-intro btn-intro-signup");
  const onceClicked = useRef(false);

  let btnToRender = "SIGN IN";
  if (showLogin) {
    btnToRender = "SIGN UP";
  }

  useLayoutEffect(() => {
    if (!onceClicked.current) {
      return
    }

    setClasses("slider slider-stretch");
    setBtnClasses("btn btn-intro hide-text")
    const countdownInterval = setTimeout(() => {
      setClasses("slider");
      if (showLogin) {
        setBtnClasses("btn btn-intro btn-intro-signup")
      }
      else{
        setBtnClasses("btn btn-intro btn-intro-login")
      }
    }, 500);

    return () => {
      clearInterval(countdownInterval);
    };
  }, [showLogin]);

  return (
    <div className={classes}>
      <button className={btnClasses} onClick={() => {
        handleAuth(); onceClicked.current = true;
      }}>
        {btnToRender}
      </button>
    </div>
  );
}