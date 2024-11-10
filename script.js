//get references to the form and display area
var form = document.getElementById('container');
var resumeDisplayElement = document.getElementById('resume-display');
//handle form submission
form.addEventListener('submit', function (event) {
    event === null || event === void 0 ? void 0 : event.preventDefault(); //prevent page default
    //collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var experience = document.getElementById('experience').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    //Generate the resume content dynamically
    var resumeHTML = "<h2><b>Resume</h2></b>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b>".concat(name, "</p>\n    <p><b>Email:</b>").concat(email, "</p>\n    <p><b>Phone:</b>").concat(phone, "</p>\n\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n\n     <h3>Experience</h3>\n    <p>").concat(experience, "</p>\n\n     <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n    ");
    //Display resume builder
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML;
    }
    else {
        console.log('The resume display element is missing');
    }
});
