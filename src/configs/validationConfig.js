const validationFormConfig = {
    name: { error: false, errorMassage: 'Username should contain 2-60 characters.', rule: /^.{2,60}$/ },
    email: {
        error: false,
        errorMassage: 'User email is invalid',
        rule: /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/gm
    },
    phone: { error: false, errorMassage: 'Phone number, should start with code of Ukraine +380', rule: /^\+380\d{3}\d{2}\d{2}\d{2}$/ },
    position: { error: false, errorMassage: 'The position must not be empty', rule: '' },
    photo: {
        error: false,
        errorMassage: 'User photo should be jpg/jpeg image, with resolution at least 70x70px and size must not exceed 5MB.',
        rule: 5120
    }
};

const phoneConfig = {
    mask: '+38 (___) ___-__-__',

    getPrefix: function () {
        return this.mask.split(' (_')[0];
    }
};
export { validationFormConfig, phoneConfig };
