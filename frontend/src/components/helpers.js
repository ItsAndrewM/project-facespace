const capitalizeFirstLetter = (string) => {
    const newString = string.toLowerCase();
    return newString.charAt(0).toUpperCase() + newString.slice(1)
};

module.exports = {capitalizeFirstLetter}
