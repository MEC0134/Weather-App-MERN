
module.exports.sanitizeRegForm = (obj) => {

    const sanitizedData = {};

    if(obj.email && obj.username && obj.password) {
        sanitizedData.email = obj.email.trim();
        sanitizedData.username = obj.username.trim();
        sanitizedData.password = obj.password.trim();
    }
    
    return sanitizedData;
}


module.exports.sanitizeLogForm = (obj) => {

    const sanitizedData = {};

    if(obj.username && obj.password) {
        sanitizedData.username = obj.username.trim();
        sanitizedData.password = obj.password.trim();
    }
    
    return sanitizedData;
}