// app/functions/validation.ts

/**
 * Checks if a given string is a valid email address.
 * @param email The email string to validate.
 * @returns True if the email is valid, false otherwise.
 */
export const isValidEmail = (email: string): boolean => {
  // A common regex for email validation
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// You can add other validation functions here, e.g.,
// export const isStrongPassword = (password: string): boolean => { /* ... */ };
// export const isPhoneNumberValid = (phone: string): boolean => { /* ... */ };