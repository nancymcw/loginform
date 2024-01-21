import React from "react";
import LoginButton from "./LoginButton";
//Imported the button component above. For the login div I had a text input for username and password input for password.
export default class LoginTable extends React.Component {
  render() {
    console.log("Login loaded");
    return (
      <div className="login">
        <form>
          <h3>Login:</h3>
          <label for="input" className="text">
            Username:
          </label>
          <br />
          <input type="text" className="input" />
          <br />
          <label for="input" className="text">
            Password:
          </label>
          <br />
          <input type="password" className="input" />
          <br />
          <br />
          <LoginButton /> {/*Calling the login button component*/}
        </form>
      </div>
    );
  }
}
