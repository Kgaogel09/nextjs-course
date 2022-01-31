import { Fragment } from "react/cjs/react.development";
import { useRef } from "react";

function HomePage() {
  const emailRef = useRef();
  const feedbackRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredEmail = emailRef.current.value;
    const feedbackRef = emailRef.current.value;
  }

  return (
    <Fragment>
      <h1>The Home Page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Your Email Address</label>
          <input type="email" id="email" ref={emailRef}></input>
        </div>
        <br />
        <div>
          <label htmlFor="feedback">Your Feedback</label>
          <textarea
            rows="5"
            type="feedback"
            id="feedback"
            ref={feedbackRef}
          ></textarea>
        </div>
        <br />
        <button onClick={submitFormHandler}>Send Feedback</button>
      </form>
    </Fragment>
  );
}

export default HomePage;
