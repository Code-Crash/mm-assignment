

// /^            : Start
// (?=.{8,})        : Length 
// (?=.*[a-zA-Z])   : Letters
// (?=.*\d)         : Digits
// (?=.*[!#$%&? "]) : Special characters
// $/              : End

const FORM_VALIDATORS = {
    password: (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/)
};



export {
    FORM_VALIDATORS
};

