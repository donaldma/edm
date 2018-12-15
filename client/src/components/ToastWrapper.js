import React from 'react'
import { withStyles } from '@material-ui/core/styles/index'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const styles = (theme) => ({
  root: {}
})

const ToastWrapper = (props) => (
  <ToastContainer className='text-center' autoClose={3000} hideProgressBar position='top-center' />
)

export default withStyles(styles, { withTheme: true })(ToastWrapper)
