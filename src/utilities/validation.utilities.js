exports.validateEmail =(email)=>{
    const emailRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
    if (!emailRegex.test(email)) {
        throw "Invaild email"
    } 
}

exports.validatePassword =(password)=>{
    var passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    if (!passwordRegex.test(password)) {
        throw "Password must have 8 to 16 valid characters and atleast a number and a special character"
    } 
}
