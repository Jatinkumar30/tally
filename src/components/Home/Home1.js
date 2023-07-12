import React from "react";
import { Link } from "react-router-dom";


function Home(props) {
  return (
    <div className="intro-page">
    <br />
      <br />
      <br />
    <h1 className="into-heading"><i>||   Tally Counter   ||</i></h1>
    
    <p><i>
    <br />
      <br />
      <br />
    <hr />
    <br />
      <br />
      <br />
      <center>Hello everyone , this is my tally counter project as a submission for React tester intern position at reverr.</center>
      <br />
      <br />
      <br />
      <center>With this Online Counter, you can easily create multiple counters, customize their names, and increment or
      decrement their values with a simple click. It's perfect for counting inventory, tracking attendance,
      conducting surveys, and much more.</center>
      </i>
    </p>
      <br />
      <br />
      <br />

    <h4 className="into-heading">Please  <Link to="/login">  Login </Link>  To Use the Tally Counter</h4>
    {/* <a href="/dashboard" className="get-started-btn">Get Started</a> */}
  </div>
  );
}

export default Home;