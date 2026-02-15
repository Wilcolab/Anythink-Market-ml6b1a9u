/**
 * Converts a string to camelCase format.
 * 
 * Handles null and undefined inputs by returning them as-is.
 * Splits input by whitespace, underscores, and hyphens, then joins words
 * with the first word in lowercase and subsequent words capitalized.
 * 
 * @param {string|null|undefined} input - The string to convert to camelCase
 * @returns {string|null|undefined} The converted camelCase string, or the input if null/undefined
 * @throws {Error} If input is not a string, null, or undefined
 * 
 * @example
 * toCamelCase('hello world');        // 'helloWorld'
 * toCamelCase('hello_world');        // 'helloWorld'
 * toCamelCase('hello-world');        // 'helloWorld'
 * toCamelCase('hello  world');       // 'helloWorld'
 * toCamelCase(null);                 // null
 * toCamelCase(undefined);            // undefined
 * toCamelCase('');                   // ''
 */

/**
 * Converts a string to dot.case format.
 * 
 * Handles null and undefined inputs by returning them as-is.
 * Splits input by whitespace, underscores, and hyphens, then joins words
 * with dots, converting all characters to lowercase.
 * 
 * @param {string|null|undefined} input - The string to convert to dot.case
 * @returns {string|null|undefined} The converted dot.case string, or the input if null/undefined
 * @throws {Error} If input is not a string, null, or undefined
 * 
 * @example
 * toDotCase('hello world');          // 'hello.world'
 * toDotCase('hello_world');          // 'hello.world'
 * toDotCase('hello-world');          // 'hello.world'
 * toDotCase('HELLO WORLD');          // 'hello.world'
 * toDotCase(null);                   // null
 * toDotCase(undefined);              // undefined
 * toDotCase('');                     // ''
 */
function toCamelCase(input) {
    // Handle null and undefined
    if (input === null || input === undefined) {
        return input;
    }

    // Throw error if not a string
    if (typeof input !== 'string') {
        throw new Error('Input must be a string, null, or undefined');
    }

    // Trim leading/trailing whitespace
    const trimmed = input.trim();

    // If empty string, return it
    if (trimmed.length === 0) {
        return '';
    }

    // Split by separators (space, underscore, hyphen) and filter out empty strings
    const words = trimmed.split(/[\s_-]+/).filter(word => word.length > 0);

    // Convert to camelCase
    return words
        .map((word, index) => {
            // Convert word to lowercase
            const lowerWord = word.toLowerCase();

            // Capitalize first letter only if not the first word
            if (index === 0) {
                return lowerWord;
            }

            return lowerWord.charAt(0).toUpperCase() + lowerWord.slice(1);
        })
        .join('');
}

module.exports = toCamelCase;

function toDotCase(input) {
    // Handle null and undefined
    if (input === null || input === undefined) {
        return input;
    }

    // Throw error if not a string
    if (typeof input !== 'string') {
        throw new Error('Input must be a string, null, or undefined');
    }

    // Trim leading/trailing whitespace
    const trimmed = input.trim();

    // If empty string, return it
    if (trimmed.length === 0) {
        return '';
    }

    // Split by separators (space, underscore, hyphen) and filter out empty strings
    const words = trimmed.split(/[\s_-]+/).filter(word => word.length > 0);

    // Convert to dot.case
    return words
        .map(word => word.toLowerCase())
        .join('.');
}

module.exports = toDotCase;

