
const ValidateEmail = (email) => {

    var validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (validEmail.test(email))
        return true;
}

export default ValidateEmail;