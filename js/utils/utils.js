/** @param {{
 * email: string
 * name: string
 * message: string
 * }} form - The Contact Form **/
export function validateForm(form) {
  const { email, message, name } = form;
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;



  if (!name) {
    swal({
        icon: 'error',
        title: 'Error',
        text: 'Please provide a name'
    });
    return false;
  }
  if (!email.match(validRegex)) {
    swal({
        icon: 'error',
        title: 'Error',
        text: 'Please provide a valid email address to reach you by.'
    });
    return false;
  }

  if (!message) {
    swal({
        icon: 'error',
        title: 'Error',
        text: 'Please provide a message'
    });
    return false;
  }

  return true;
}
