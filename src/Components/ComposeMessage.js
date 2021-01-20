import React from "react"
import "../Styles/ComposeMessage.css"
import CloseIcon from "@material-ui/icons/Close"
import { Button } from "@material-ui/core"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { setMessageClosed } from "../features/mailSlice"
import { db } from "./firebase"
import firebase from "firebase"

function ComposeMessage() {
  const dispatch = useDispatch()
  const { register, handleSubmit, watch, errors } = useForm()

  const onSubmit = (formData) => {
    console.log(formData)
    db.collection("emails").add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })

    dispatch(setMessageClosed())
  }

  return (
    <div className="compose-message">
      <div className="compose-message-header">
        <h3>New Message</h3>
        <CloseIcon
          onClick={() => dispatch(setMessageClosed())}
          className="compose-message-close"
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          placeholder="To"
          type="email"
          ref={register({ required: true })}
        />
        {errors.to && <p className="message-error">To is required</p>}
        <input
          name="subject"
          placeholder="Subject"
          type="text"
          ref={register({ required: true })}
        />
        {errors.subject && <p className="message-error">Subject is required</p>}

        <input
          name="message"
          className="compose-message-field"
          placeholder="Message..."
          type="text"
          ref={register({ required: true })}
        />
        {errors.message && <p className="message-error">Message is required</p>}

        <div className="compose-message-options">
          <Button
            className="compose-message-send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  )
}

export default ComposeMessage
