const handleServerError = (res, err) => {
  const { status, message } = err
  const code = status ? status : 500
  const errorMessage = message ? message : 'Unknown Error'

  res.status(code).send({
    status: code,
    message: errorMessage
  })
}

const cleanString = (string) => {
  return string.trim().toLowerCase()
}

module.exports = {
  handleServerError,
  cleanString
}
