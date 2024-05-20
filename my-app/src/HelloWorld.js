import React, {Fragment} from "react";
import "./HelloWorld.css";
import Input from "./Input";

function HelloWorld(props) {
  const [isTrue, setIsTrue] = React.useState(true);
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [ID, setID] = React.useState("");
  const [DOB, setDOB] = React.useState("");


  const toggleTrue = () => {
    setIsTrue(!isTrue);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("First Name: " + firstName);
    console.log("Last Name: " + lastName);
    console.log("ID: " + ID);
    console.log("DOB: " + DOB);
  }

  return (
    <Fragment>
      <div>
        <hr />
        <h1 className="h1-red">{props.msg}</h1>
        <hr />
        {isTrue ? (
          <Fragment>
            <p>Is True</p>
          </Fragment>
        ) : (
          <Fragment>
            <p>Is False</p>
          </Fragment>
        )}
        <hr />
        <a href="#!" className="btn btn-outline-secondary" onClick={() => setIsTrue(toggleTrue)}>Toggle</a>
        <hr />

        <form autoComplete="off" onSubmit={handleSubmit}> 

          <Input
              title="First Name"
              name="firstName"
              type="text"
              className="form-control"
              autoComplete="off"
              onChange={(e) => setFirstName(e.target.value)}
          ></Input>

          <Input
              title="Last Name"
              name="lastName"
              type="text"
              className="form-control"
              autoComplete="off"
              onChange={(e) => setLastName(e.target.value)}

          ></Input>

          <Input
              title="ID"
              name="ID"
              type="text"
              className="form-control"
              autoComplete="off"
              onChange={(e) => setID(e.target.value)}
          ></Input>
              
          <Input
              title="DOB"
              name="DOB"
              type="date"
              className="form-control"
              autoComplete="off"
              onChange={(e) => setDOB(e.target.value)}
          ></Input>

          <input type="submit" value="Submit" className="btn btn-primary"></input>

          <div>
              First Name: {firstName} <br />
              Last Name: {lastName} <br />
              ID: {ID} <br />
              DOB: {DOB} <br />
          </div>
        </form>

         <hr />
      </div> {/* Close the parent element */}
    </Fragment>
  );
}
export default HelloWorld;