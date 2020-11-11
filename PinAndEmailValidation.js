function pinValidator(pin){
let pinRegex = RegExp('^([1-9])[0-9]{2}(\\s)?[0-9]{2}[0-9]$');
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
    pinValidator("400 088");
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

