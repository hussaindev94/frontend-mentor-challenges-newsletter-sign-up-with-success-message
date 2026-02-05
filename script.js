//Grap the two pages:
//1.sign up page.
//2.success message page.
const signUpPage = document.querySelector(".sign-up-page");
const successMessagePage = document.querySelector(".success-page");
//Grap the success page's button:
//1.success page's button.
const successPageButton = document.querySelector(".success-page-button");
//Grap the form:
const form = document.querySelector(".form");
//Error message:
const errorMessage = document.querySelector(".email-error-message");
//Grap the email input field
const emailInput = document.querySelector(".form-email-input");
//Grap the place for the user's email
const userEmail = document.querySelector(".user-email");

//form data validation:
function formDataValidation(data) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    //1.Loop over the data.
    for (const key in data) {
        if (!data[key] || !regex.test(data[key])) {
            errorMessage.classList.remove("hidden");
            emailInput.classList.add("wrong-email-input");

        } else {
            //If everything is ok,
            userEmail.innerText = data[key];
            signUpPage.classList.add("hidden");
            successMessagePage.classList.remove("hidden");
            emailInput.value = "";
        }
    }
}

//Reset the form state:
function resetFormState() {
    errorMessage.classList.add("hidden");
    emailInput.classList.remove("wrong-email-input");
}
emailInput.addEventListener("click", resetFormState);

//Reset the app pages:
function resetAppPages() {
    signUpPage.classList.remove("hidden");
    successMessagePage.classList.add("hidden");
}
successPageButton.addEventListener("click", resetAppPages);

//handle submit function:
const handelsubmit =  (e) => {
    e.preventDefault(e);

    //Get the form data:
    const data = Object.fromEntries(new FormData(e.target));

    //Pass the data into validation step:
    formDataValidation(data);

}

//Adding event listener to the form:
form.addEventListener("submit", handelsubmit);
