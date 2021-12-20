import React from "react";
import './Signin.css';


export default class SignIn extends React.Component {
    render() {
        return (
            <div class="display-type">
                <div class="mycard">
                    <form>
                        <div class="container">
                            <div class="header">
                                <h1>Welcome!</h1>
                                <p>Login to grab some snippets</p>
                            </div>
                            <label>Username :
                            </label>
                            <input className="signin-input" type="text" placeholder="Enter Username" name="username" required/>
                            <label>Password :
                            </label>
                            <input className="signin-input" type="password" placeholder="Enter Password" name="password" required/>
                            <button type="submit">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
