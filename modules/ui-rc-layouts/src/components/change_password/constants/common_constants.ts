export const NAME_REDUCER = 'change_password';
export const KEY_TRANSLATE = 'change_password';
export const PATH_TO_STORE_REDUX = `core.resources.${NAME_REDUCER}.data`;
export const DEFAULT_ITEM = {
    value: '',
    errorMessage: '',
    show_text: false
};
export const REGEX_EMPTY = /^(?!\s*$).+/
export const REGEX_PASSWORD = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
// This regex will enforce these rules REGEX_PASSWORD:
// At least one upper case English letter, (?=.*?[A-Z])
// At least one lower case English letter, (?=.*?[a-z])
// At least one digit, (?=.*?[0-9])
// At least one special character, (?=.*?[#?!@$%^&*-])
// Minimum eight in length .{8,} (with the anchors)
