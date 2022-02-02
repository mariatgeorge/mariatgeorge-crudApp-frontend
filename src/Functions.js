export const isValueNullOrUndefined = (value) => {
    if(typeof value === 'undefined')
        return true;
    else if (value == null)
        return true;
    return false;
};

export const createAccount = (values) => {
    console.log("submited")
    console.log(values);
}