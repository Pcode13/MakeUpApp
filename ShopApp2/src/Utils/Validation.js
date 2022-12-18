import validator from 'is_js'

const checkEmpty = (val, key) => {
    console.log("Vlaue",val)
    console.log("key",key)
    if (val == null || validator.empty(val.trim())) {
        
        return `${key}`;
    } else {
        return '';
    }
}


const checkMinLength = (val, minLength, key) => {
    if (val.trim().length < minLength) {
        return `Please enter valid ${key}`
    } else {
        return '';
    }
}

const checkMaxLength = (val, maxLength, key) => {
    if (val.trim().length > maxLength) {
        return `Please enter valid ${key}`
    } else {
        return '';
    }
}

// const checkPassword = (val, key) => {
//     console.log("Vlaue",val)
//     console.log("key",key)
//     if (val == null || validator.empty(val.trim())) {
        
//         return `${key}`;
//     } else {
//         return '';
//     }
// }


export default function (data) {
    const { username, email, password,phoneno,address,comfirmedpassword,selectedImage } = data
console.log("Demo data",data)
    if (username !== undefined) {
        let emptyValidationText = checkEmpty(username, 'Please enter your user name')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } else {
            let minLengthValidation = checkMinLength(username,1, 'username')
            if (minLengthValidation !== '') {
                return minLengthValidation
            }
        }
    }

    if (email !== undefined) {
        let emptyValidationText = checkEmpty(email, 'Please enter your email')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } else {
            if (!validator.email(email)) {
                return 'Please enter valid email'
            }
        }
    }
    if (phoneno !== undefined) {
        let emptyValidationText = checkEmpty(phoneno, 'Please enter your phone number')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } else {
            let minLengthValidation = checkMaxLength(phoneno, 10, 'phoneno')
            if (minLengthValidation !== '') {
                return minLengthValidation
            }
        }
    }

    if (selectedImage !== undefined ) {
        let emptyValidationText = checkEmpty(selectedImage, 'Please enter your profile Image')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } else {
           return ''
        }
    }

    if (address !== undefined) {
        let emptyValidationText = checkEmpty(address, 'Please enter your address')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } else {
            let minLengthValidation = checkMaxLength(address, 100, 'address')
            if (minLengthValidation !== '') {
                return minLengthValidation
            }
        }
    }


    if (password !== undefined) {
        let emptyValidationText = checkEmpty(password, 'Please enter your password')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } else {
            let minLengthValidation = checkMinLength(password, 8, 'password')
            if (minLengthValidation !== '') {
                return minLengthValidation
            }
        }
    }

    if (comfirmedpassword !== undefined) {
        let emptyValidationText = checkEmpty(comfirmedpassword, 'Please enter your confirmed password')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } else {
            let minLengthValidation = checkMaxLength(comfirmedpassword, 8, ' comfirmedpassword')
            if (minLengthValidation !== '') {
                return minLengthValidation
            }
        }
    }

    
   

}