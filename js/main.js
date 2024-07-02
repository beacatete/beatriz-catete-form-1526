//VARIABLES
let btn = document.getElementById('button');
let fn = document.getElementById('name');
let em = document.getElementById('email');
let msg = document.getElementById("message");

//SOTORE REGULAR EXPRESSION FOR EMAIL
let emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

//START VALIDATING
function validateForm(event) {
    //object to store form data
    let data = {};
    //array to store the errors
    let errors = [];

    // MAKE SURE ALL USER ENTRIES ARE TRIMMED
    // lets trim the eventual whitespace
    fn.value = fn.value.trim();
    em.value = em.value.trim();
    msg.value = msg.value.trim();
    
    //FULL NAME
    //if fn.value contain user data
    if (fn.value) {
        data.user_name = fn.value;
    } else {
        //if it is empty: create a corresponding error-message and add it to the declared array "error"
        errors.push("Full Name is missing!");
    }

    // VALIDATE EMAIL FIELD
    // if em.value contains user-input 
    if (em.value) {
        // then check the email format
        if (emailPattern.test(em.value)) {
            // pass the user-input into the newly created prperty user_email:
            data.user_email = em.value;
        } else {
            //if email is invalid
            errors.push('Your email is invalid!');
        }
    } else {
        //if field is empty
        errors.push('Please enter your email!');
  }

    //MESSAGE
    //check if the message is not empty
    if (msg.value) {
        data.user_message = msg.value;
    } else {
        //if it is empty: create a corresponding error-message and add it to the declared array "error"
        errors.push("Message is missing!");
    }

    //FEEDBACK/ERRORS
    // Check if there is anything in array errors
    if (errors.length > 0) {
        //if it is empty
        //print it in JS Console
        console.log("Errors:", errors);
    } else {
        //If it is filled
        // Print the data in JavaScript console.
        console.log("Form data:", data);


        //To clear the text-fields
        fn.value = "";
        em.value = "";
        msg.value = "";
    }
//END VALIDATING    
}

//Register form when submit button is clicked
btn.addEventListener('click', validateForm);