function pinValidator(pin){
let pinRegex = RegExp('^[0-9]{6}$');
let checkPin = pinRegex.test(pin);
if(checkPin){
    console.log("Pin is correct");
}
else{
    console.log("Incorrect Pin");
}
}

pinValidator(400088);
pinValidator(40005445);