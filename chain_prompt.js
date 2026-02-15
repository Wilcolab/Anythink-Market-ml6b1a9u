function toKebabCase(input) {
    // Step 1: Validate the input
    if (input === null || input === undefined || typeof input !== 'string') {
        throw new Error('Input must be a non-null, non-undefined string');
    }

    // Step 2: Normalize the string
    let normalized = input
        .trim()
        .toLowerCase()
        .replace(/[\s_\.]/g, '-');

    // Step 3: Remove non-alphanumeric characters except dashes, and reduce consecutive dashes
    normalized = normalized
        .replace(/[^a-z0-9-]/g, '')
        .replace(/-+/g, '-');

    // Step 4: Return the kebab-case string
    return normalized;
}

module.exports = toKebabCase;