const password = document.querySelector('#password')
const passwordConfirm = document.querySelector('#confirm-password')

const handlePassword = () => {
  if (password.value !== passwordConfirm.value) {
    if (
      !password.classList.contains('error') &&
      !passwordConfirm.classList.contains('error')
    ) {
      password.classList.add('error')
      passwordConfirm.classList.add('error')
    }
    return password.setCustomValidity('Passwords do not match')
  } else {
    password.setCustomValidity('')
    password.classList.remove('error')
    passwordConfirm.classList.remove('error')
  }
}

passwordConfirm.addEventListener('keyup', handlePassword)
