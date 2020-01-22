export const decode = input => {
    return input
        ? input.replace(/&#(\d+);/g, (match, code) => {
            return String.fromCharCode(code);
        })
        : input;
};
