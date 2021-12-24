console .log("This is registration page");

const registrationform = document.getElementById("registration-form")

function getSelected(select) {
    let selectedValues = []
    for(OptionIndex in select.options){
        if(select.options[OptionIndex].selected) {
           selectedValues.push(select.options[OptionIndex].value);
        }
    }
    return selectedValues
}

registrationform.onsubmit = function(event){
    console.log("Submitted")

    event.preventDefault();
    console.log("I am triggerred when submit is pressed");
    let name = document.getElementById("Name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    // let gender = getSelected(document.getElementById("gender"));
    let Interest = getSelected(document.getElementById("Interest"));
    let date = document.getElementById("date").value;
    let agree = document.getElementById("agree").checked;
    const data={
        name: name,
        email: email,
        gender: gender,
        Interest: Interest,
        date: date,
        agree: agree,
    }
    console.log(data);
    localStorage.setItem("userInfo", JSON.stringify(data))
};