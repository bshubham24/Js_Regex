function emailValidator(email){
    let emailregex = RegExp('^([a-z]+)([0-9])*([_+-.]{1}[a-z0-9]+)*(@)([a-z0-9]+)[.]([a-z]{2,})([.][a-z]{2}){0,1}$');
    let checkEmail = emailregex.test(email);
    if(checkEmail){
        console.log(email+" is a valid email");
    }
    else{
        console.log(email+' is a invalid email');
    }
}

emailValidator("abc.xyz@bridgelabz.co.in");
emailValidator("abc+100@gamil.com");
emailValidator("abc@gmail.com.au.in")