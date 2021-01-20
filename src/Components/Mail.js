import React from "react"
import "../Styles/Mail.css"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import { IconButton } from "@material-ui/core"
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox"
import ErrorIcon from "@material-ui/icons/Error"
import DeleteIcon from "@material-ui/icons/Delete"
import EmailIcon from "@material-ui/icons/Email"
import WatchLaterIcon from "@material-ui/icons/WatchLater"
import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import LabelImportantIcon from "@material-ui/icons/LabelImportant"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import { useHistory } from "react-router-dom"
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore"
import PrintIcon from "@material-ui/icons/Print"
import ExitToAppIcon from "@material-ui/icons/ExitToApp"
import { useSelector } from "react-redux"
import { selectMessageDetails } from "../features/mailSlice"

function Mail() {
  const history = useHistory()
  const selectMessage = useSelector(selectMessageDetails)

  return (
    <div className="mail">
      <div className="mail-tools">
        <div className="mail-tools-left">
          <IconButton onClick={() => history.push("/")}>
            <ArrowBackIcon />
          </IconButton>
          <IconButton>
            <MoveToInboxIcon />
          </IconButton>
          <IconButton>
            <ErrorIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <EmailIcon />
          </IconButton>
          <IconButton>
            <WatchLaterIcon />
          </IconButton>
          <IconButton>
            <CheckCircleIcon />
          </IconButton>
          <IconButton>
            <LabelImportantIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="mail-tools-right">
          <IconButton>
            <UnfoldMoreIcon />
          </IconButton>
          <IconButton>
            <PrintIcon />
          </IconButton>
          <IconButton>
            <ExitToAppIcon />
          </IconButton>
        </div>
      </div>
      <div className="mail-body">
        <div className="mail-body-header">
          <h2>{selectMessage?.subject}</h2>
          <LabelImportantIcon className="mail-important" />
          <p>{selectMessage?.title}</p>
          <p className="mail-time">{selectMessage?.time}</p>
        </div>
        <div className="mail-message">
          <p>{selectMessage?.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Mail
