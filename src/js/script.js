const email = document.getElementById("email-si");
const emailError = document.getElementById("email-error-si");
const submit = document.getElementById("submit-si");

email.addEventListener("keyup", inputEmailListener);
submit.addEventListener("click", buttomSubmitLister);

function toggleClass(el, className, bool) {
  if (bool) el.classList.add(className);
  else el.classList.remove(className);
}
//
function emailValid() {
  if (
    email.classList.contains("state-error") &&
    email.classList.contains("state-error-text")
  ) {
    email.classList.remove("state-error");
    email.classList.remove("state-error-text");
    email.setAttribute("aria-hidden", true);
    email.setAttribute("aria-invalid", false);
    toggleClass(emailError, "state-error-hidden", true);
    toggleClass(emailError, "state-error-show", false);
  }
}
//
function emailInvalid() {
  email.setAttribute("class", "state-error state-error-text");
  email.setAttribute("aria-hidden", false);
  email.setAttribute("aria-invalid", true);
  toggleClass(emailError, "state-error-hidden", false);
  toggleClass(emailError, "state-error-show", true);
}
//
function inputEmailListener(e) {
  const input = e.target.value;

  if (input && /(^\w.*@\w+\.\w)/.test(input)) {
    emailValid();
  } else {
    emailInvalid();
  }
}
//
function buttomSubmitLister() {
  const input = email.value;
  if (input && /(^\w.*@\w+\.\w)/.test(input)) {
    emailValid();
  } else {
    emailInvalid();
  }
}
