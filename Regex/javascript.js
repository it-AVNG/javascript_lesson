
const inputs = document.querySelectorAll('input');


const patterns ={
    telephone:/^\d{11}$/,
    username:/^[a-z\d]{5,12}$/i,
    password:/^[@_-w\d]{8,20}$/,
    slug:/^[a-z\d_]{8,20}$/,
    email:/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
};

//validaation function

function validate(field,Regex) {
    //If test of Regex field value returns true, 
    //the class of that input turns into valid, else invalid
    if(Regex.test(field.value)){
        field.className = 'valid';
    } else {
        field.className = 'invalid'
    }
    console.log(Regex.test(field.value));
}

inputs.forEach((input) => {
    //listen to keyup event of inputfield
    input.addEventListener('keyup',(e)=>{
        console.log(e.target.attributes.name.value);
        //validate if the inputs comply with regex pattern
        validate(e.target, patterns[e.target.attributes.name.value]);

    });

});