export const isValueNullOrUndefined = (value) => {
    if(typeof value === 'undefined')
        return true;
    else if (value == null)
        return true;
    return false;
};
