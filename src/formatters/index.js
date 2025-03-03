import stylish from "./stylish.js";

const formatter = {
    stylish
};

export default (format = 'stylish') => formatter[format];