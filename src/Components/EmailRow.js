import { Checkbox, IconButton } from "@material-ui/core"
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined"
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined"
import "../Styles/EmailRow.css"
import FormControlLabel from "@material-ui/core/FormControlLabel"

import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import { getMessage } from "../features/mailSlice"

function EmailRow({ id, title, subject, description, time }) {
  const history = useHistory()
  const [checked, setChecked] = useState(false)
  const dispatch = useDispatch()
  console.log(checked)

  const openMail = () => {
    dispatch(getMessage({ id, title, subject, description, time }))
    history.push("/mail")
  }

  return (
    <div onClick={openMail} className="email-row">
      <div className="email-row-options">
        <FormControlLabel
          control={
            <Checkbox
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
          }
        />

        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </div>

      <h3 className="email-row-title"> {title}</h3>
      <div className="email-row-message">
        <h4>
          {subject}
          <span className="email-row-description"> - {description}</span>
        </h4>
      </div>
      <div className="email-row-time">{time}</div>
    </div>
  )
}

export default EmailRow
