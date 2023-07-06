export const checkEmailValidation = (setValidContact, setEmailValid, validContact) => {
  const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (validContact.email.length <= 0) {
    return setEmailValid({ content: '', status: false })
  }
  if (validContact.email.match(validRegex)) {
    return setEmailValid({ content: '', status: true });
  } else {
    return setEmailValid({ content: 'Не правильно веденна електрона пошта!', status: false });
  }
}

export const checkFormLength = (setAcceptOrder, setCorrectField, emailStatus, validContact, passwordStatus) => {
  const objectValues = Object.values(validContact);
  const objectKeys = Object.keys(validContact);
  let status = false;

  objectKeys.map((el, id) => {
    objectValues.map((item) => {
      if ((validContact[el].length > 0) && (item.length > 0)) {
        if (emailStatus || (emailStatus && passwordStatus)) {
          setCorrectField('')
          status = true
          setAcceptOrder(true)
        }
      } else {
        setCorrectField('Це поле пусте!')
        status = false
      }
    })
  })
  return status
}

export const checkPasswordValidation = (setPasswordValid, value) => {
  const validRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if (value.length <= 0) {
    return setPasswordValid({ content: '', status: false })
  }

  if (value.match(validRegex)) {
    return setPasswordValid({ content: '', status: true });
  } else {
    return setPasswordValid({ content: 'Мінімум 8 символів, не менше 1 літери або 1 цифри',
     status: false });
  }
}