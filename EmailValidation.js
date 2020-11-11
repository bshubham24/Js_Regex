function emailValidator(email){
    let emailregex = RegExp('^([a-z]+)(@)([a-z]+)[.]([a-z]{2,})$');
    let checkEmail = emailregex.test(email);
    if(checkEmail){
        console.log(email+" is a valid email");
    }
    else{
        console.log(email+' is a invalid email');
    }
}

emailValidator("abc@bridgelabz.co");