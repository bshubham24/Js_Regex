function pinValidator(pin){
let pinRegex = RegExp('^[1-9]{1}[0-9]{4}[0-9]{1}$');
let checkPin = pinRegex.test(pin);
if(checkPin){
    console.log(pin+" as pin is correct");
}
else{
    throw "Incorrect Pin";
}
}
try {
    pinValidator(400088);
} catch (error) {
    console.error(error);
}
try {
    pinValidator(40005445);
} catch (error) {
    console.error(error);
}
try {
    pinValidator("A40008");
} catch (error) {
    console.error(error);
}
try {
    pinValidator("A4000b");
} catch (error) {
    console.error(error);
}

