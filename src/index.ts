/**
 * The minimum value an unsigned byte can be.
 * @type {number}
 */
export const UINT8_MIN: number = 0;

/**
 * The maximum value an unsigned byte can be.
 * @type {number}
 */
export const UINT8_MAX: number = 2 ** 8 - 1;

/**
 * The minimum value an unsigned word can be.
 * @type {number}
 */
export const UINT16_MIN: number = 0;

/**
 * The maximum value an unsigned word can be.
 * @type {number}
 */
export const UINT16_MAX: number = 2 ** 16 - 1;

/**
 * The minimum value an unsigned double word can be.
 * @type {number}
 */
export const UINT32_MIN: number = 0;

/**
 * The maximum value an unsigned double word can be.
 * @type {number}
 */
export const UINT32_MAX: number = 2 ** 32 - 1;

/**
 * The minimum value an signed byte can be.
 * @type {number}
 */
export const INT8_MIN: number = -(2 ** 7);

/**
 * The maximum value an signed byte can be.
 * @type {number}
 */
export const INT8_MAX: number = 2 ** 7 - 1;

/**
 * The minimum value an signed word can be.
 * @type {number}
 */
export const INT16_MIN: number = -(2 ** 15);

/**
 * The maximum value an signed word can be.
 * @type {number}
 */
export const INT16_MAX: number = 2 ** 15;

/**
 * The minimum value an signed double word can be.
 * @type {number}
 */
export const INT32_MIN: number = -(2 ** 31);

/**
 * The maximum value an signed double word can be.
 * @type {number}
 */
export const INT32_MAX: number = 2 ** 31 - 1;

/**
 * Clamps a number between a range.
 * @param value The number to clamp.
 * @param minimum The minimum value.
 * @param maximum The maximum value.
 * @returns
 */
// This function really only serves to prevent a bug when doing the conversions.
// For the some reason, if the number is out of the range of the byte-width of whatever
// integer is being converted, it causes some weird behavior.
// So to prevent whatever is going on, we'll use this for now. And also because it wouldn't
// hurt to.
function clamp(value: number, minimum: number, maximum: number): number {
    return value < minimum ? minimum : value > maximum ? maximum : value;
}

/**
 * Converts a `number` representation of a unsigned byte into a signed representation.
 * @param {number} value The unsigned byte to convert.
 * @returns {number} A signed `number` or `NaN` on failure.
 */
export function unsignedToSigned8(value: number): number {
    let clamped: number = clamp(value, UINT8_MIN, UINT8_MAX);
    let converted: number | undefined = Int8Array.from(Uint8Array.of(clamped))[0];
    return converted !== undefined ? converted : NaN;
}

/**
 * Converts a `number` representation of a signed byte into a unsigned representation.
 * @param {number} value The signed byte to convert.
 * @returns {number} A unsigned `number` or `NaN` on failure.
 */
export function signedToUnsigned8(value: number): number {
    let clamped: number = clamp(value, INT8_MIN, INT8_MAX);
    let converted: number | undefined = Uint8Array.from(Int8Array.of(clamped))[0];
    return converted !== undefined ? converted : NaN;
}

/**
 * Converts a `number` representation of a unsigned word into a signed representation.  
 * The endianness used is defined by the runtime. See [Endianness (MDN)](https://developer.mozilla.org/docs/Glossary/Endianness)
 * @param {number} value The unsigned word to convert.
 * @returns {number} A signed `number` or `NaN` on failure.
 */
export function unsignedToSigned16(value: number): number {
    let clamped: number = clamp(value, UINT16_MIN, UINT16_MAX);
    let converted: number | undefined = Int16Array.from(Uint16Array.of(clamped))[0];
    return converted !== undefined ? converted : NaN;
}

/**
 * Converts a `number` representation of a signed word into a unsigned representation.  
 * The endianness used is defined by the runtime. See [Endianness (MDN)](https://developer.mozilla.org/docs/Glossary/Endianness)
 * @param {number} value The signed word to convert.
 * @returns {number} A unsigned `number` or `NaN` on failure.
 */
export function signedToUnsigned16(value: number): number {
    let clamped: number = clamp(value, INT16_MIN, INT16_MAX);
    let converted: number | undefined = Uint16Array.from(Int16Array.of(clamped))[0];
    return converted !== undefined ? converted : NaN;
}

/**
 * Converts a `number` representation of a unsigned double word into a signed representation.  
 * The endianness used is defined by the runtime. See [Endianness (MDN)](https://developer.mozilla.org/docs/Glossary/Endianness)
 * @param {number} value The unsigned double word to convert.
 * @returns {number} A signed `number` or `NaN` on failure.
 */
export function unsignedToSigned32(value: number): number {
    let clamped: number = clamp(value, UINT16_MIN, UINT16_MAX);
    let converted: number | undefined = Int32Array.from(Uint32Array.of(clamped))[0];
    return converted !== undefined ? converted : NaN;
}

/**
 * Converts a `number` representation of a signed double into a unsigned representation.  
 * The endianness used is defined by the runtime. See [Endianness (MDN)](https://developer.mozilla.org/docs/Glossary/Endianness)
 * @param {number} value The signed double to convert.
 * @returns {number} A unsigned `number` or `NaN` on failure.
 */
export function signedToUnsigned32(value: number): number {
    let clamped: number = clamp(value, INT32_MIN, INT32_MAX);
    let converted: number | undefined = Uint32Array.from(Int32Array.of(clamped))[0];
    return converted !== undefined ? converted : NaN;
}
