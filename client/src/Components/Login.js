import React from "react"

// components
import Button from "./Button"
import Form from "./Form"
import { loginReq } from '../utils/userRequests'

// utils
import { loginInputs } from "../utils/userInputs"

export default function Login() {

	const regLink = "/register";

	return (
		<div className="login">
      <Form 
        title={"Login to Your Account"}
        submitFunc={loginReq}
        id={"loginForm"}
        inputs={loginInputs}
      />
			<p>
				Need an account?
        <Button 
          style={{color: 'white', backgroundColor: 'black'}}
          text={"Sign Up"}
          onClick={() => { window.location = regLink }}
        />
			</p>
		</div>
	)
}