export const decode = input => {
    return input.replace(/&#(\d+);/g, (match, code) => {
        return String.fromCharCode(code);
    });
};
