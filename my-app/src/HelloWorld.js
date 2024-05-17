import React, {Fragment} from "react";
import "./HelloWorld.css";

function HelloWorld(props) {
  const [isTrue, setIsTrue] = React.useState(true);
  return (
    <Fragment>
      <hr />
      <h1 className="h1-red">{props.msg}</h1>
      <hr />
        {isTrue && 
          <Fragment>
            <p>Is True</p>
          </Fragment>
        }
        <hr />
        <a href="#!" className="btn btn-outline-secondary" onClick={() => setIsTrue(!isTrue)}>Toggle</a>
  </Fragment>
  )
}

export default HelloWorld;