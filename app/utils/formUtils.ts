type Input = {
  inputs?: React.RefObject<HTMLInputElement>[];
};

type CheckInputsFieldsType = {
  body: {
    lastname: string;
    firstname: string;
    email: string;
    password: string;
    confirmPassword: string;
  };
};

/**
 * Function that clear the input value.
 * @param inputs takes an array of input (ref) elements
 * @returns the input value to an empty string
 */
export function clearInuputs(inputs: Input[]) {
  const inputArray = inputs;

  if (inputArray.length !== 0) {
    return inputArray.forEach((input: any) => {
      input.current.value = '';
    });
  }
  return;
}

function isLastNameValid(lastName: string) {
  const hasValidLastName = {
    hasError: false,
    message: '',
  };

  if (!lastName) {
    hasValidLastName.hasError = true;
    hasValidLastName.message = 'Le nom de famille est requis';
  }

  if (lastName && !lastName.match(/^[a-zA-Z]+$/)) {
    hasValidLastName.hasError = true;
    hasValidLastName.message =
      'Le nom de famille ne doit contenir que des lettres.';
  }

  return hasValidLastName;
}

function isFirstNameValid(firstName: string) {
  const hasValidFirstName = {
    hasError: false,
    message: '',
  };

  if (!firstName) {
    hasValidFirstName.hasError = true;
    hasValidFirstName.message = 'Le nom de famille est requis';
  }

  if (firstName && !firstName.match(/^[a-zA-Z]+$/)) {
    hasValidFirstName.hasError = true;
    hasValidFirstName.message =
      'Le nom de famille ne doit contenir que des lettres.';
  }

  return hasValidFirstName;
}

function isEmailValid(email: string) {
  const hasValidEmail = {
    hasError: false,
    message: '',
  };

  if (!email) {
    hasValidEmail.hasError = true;
    hasValidEmail.message = "L'adresse email est requis.";
  }

  if (
    email &&
    !email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
  ) {
    hasValidEmail.hasError = true;
    hasValidEmail.message =
      "L'adresse email n'est pas valide. Veuillez saisir une adresse email.";
  }

  return hasValidEmail;
}

function isStrongPassword(password: string) {
  // Check if has a least one lower, one uppercase and one number
  const hasLowerCase = /[a-z]/.test(password);
  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);

  // check if doesn't contain special characters
  const hasSpecialChar = /[!$&()\-{}[\]|\\'",<>?]/.test(password);
  const hasWhitespace = /\s/.test(password);

  const hasValidPassword = {
    hasError: false,
    message: '',
  };

  if (!password) {
    hasValidPassword.hasError = true;
    hasValidPassword.message = 'Le mot de passe est requis';
  }

  if (
    (password && !hasLowerCase) ||
    (password && !hasUpperCase) ||
    (password && !hasNumber)
  ) {
    hasValidPassword.hasError = true;
    hasValidPassword.message =
      'Le mot de passe doit contenir au moins une lettre minuscule, une lettre majuscule et un chiffre.';
  }

  if ((password && hasSpecialChar) || (password && hasWhitespace)) {
    hasValidPassword.hasError = true;
    hasValidPassword.message =
      "Le mot de passe ne doit pas contenir d'espaces ni ces caractères spéciaux [!$&(){}[]|'\",<>?].";
  }

  if (password && password.length < 8) {
    hasValidPassword.hasError = true;
    hasValidPassword.message =
      'Le mot de passe doit contenir au moins 8 caractères.';
  }

  return hasValidPassword;
}

function isConfirmPasswordValid(
  confirmPassword: string,
  password: string,
  hasValidPassword: boolean
) {
  const hasValidConfirmPassword = {
    hasError: false,
    message: '',
  };

  if (!hasValidPassword.hasError) {
    if (password !== confirmPassword) {
      hasValidConfirmPassword.hasError = true;
      hasValidConfirmPassword.message =
        'Les mots de passe ne correspondent pas.';
    }
  }

  if (!confirmPassword) {
    hasValidConfirmPassword.hasError = true;
    hasValidConfirmPassword.message =
      'La confirmation de mots de passe est requis.';
  }

  return hasValidConfirmPassword;
}

////////////////////////////////////////////////////////////////
export function checkInputsFields(body: CheckInputsFieldsType) {
  const { lastname, firstname, email, password, confirmPassword } = body;

  const hasValidLastName = isLastNameValid(lastname);
  const hasValidFirstName = isFirstNameValid(firstname);
  const hasValidEmail = isEmailValid(email);
  const hasValidPassword = isStrongPassword(password);
  const hasValidConfirmPassword = isConfirmPasswordValid(
    confirmPassword,
    password,
    hasValidPassword.hasError
  );

  const hasValidInput = {
    hasError: false,
    messages: {
      lastNameErrorMsg: hasValidLastName.message,
      firstNameErrorMsg: hasValidFirstName.message,
      emailErrorMsg: hasValidEmail.message,
      passwordErrorMsg: hasValidPassword.message,
      confirmPasswordErrorMsg: hasValidConfirmPassword.message,
    },
  };

  if (
    hasValidLastName.hasError ||
    hasValidFirstName.hasError ||
    hasValidEmail.hasError ||
    hasValidPassword.hasError ||
    hasValidConfirmPassword.hasError
  ) {
    hasValidInput.hasError = true;
  }

  return hasValidInput;
}
