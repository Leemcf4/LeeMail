import { Button } from "@material-ui/core"
import React from "react"
import { useDispatch } from "react-redux"
import { login } from "../features/userSlice"
import "../Styles/Login.css"
import { auth, provider } from "./firebase"

function Login() {
  const dispatch = useDispatch()

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        )
      })
      .catch((error) => alert(error.message))
  }

  return (
    <div className="login">
      <div className="login-container">
        <img src="leemaillogo.png" alt="" />
        <Button
          className="login-button"
          variant="contained"
          color="primary"
          onClick={signIn}
        >
          Login
        </Button>
      </div>
    </div>
  )
}

export default Login
