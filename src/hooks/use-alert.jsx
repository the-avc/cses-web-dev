import Snackbar from "@mui/material/Snackbar"
import Alert from "@mui/material/Alert"
import { useState } from "react"

export function useAlert() {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [severity, setSeverity] = useState("info")

  const showAlert = (newMessage, newSeveriy = "info") => {
    setMessage(newMessage)
    setSeverity(newSeveriy)
    setOpen(true)
  }

  const handleClose = (event, reason) => {
    if (reason !== "clickaway") {
      setOpen(false)
    }
  }

  const AlertBox = () => {
    return (
      <>
        {open && (
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity={severity}
              variant='filled'
              sx={{ width: "100%" }}
            >
              {message}
            </Alert>
          </Snackbar>
        )}
      </>
    )
  }
  return { AlertBox, showAlert }
}
