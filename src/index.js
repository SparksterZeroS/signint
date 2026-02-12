"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignInt = void 0;
var SignInt;
(function (SignInt) {
    SignInt.UINT8_MIN = 0;
    SignInt.UINT8_MAX = Math.pow(2, 8) - 1;
    SignInt.UINT16_MIN = 0;
    SignInt.UINT16_MAX = Math.pow(2, 16) - 1;
    SignInt.UINT32_MIN = 0;
    SignInt.UINT32_MAX = Math.pow(2, 32) - 1;
    SignInt.UINT64_MIN = 0;
    SignInt.UINT64_MAX = Math.pow(2, 64) - 1;
    SignInt.INT8_MIN = -(Math.pow(2, 7));
    SignInt.INT8_MAX = Math.pow(2, 7) - 1;
    SignInt.INT16_MIN = -(Math.pow(2, 15));
    SignInt.INT16_MAX = Math.pow(2, 15);
    SignInt.INT32_MIN = -(Math.pow(2, 31));
    SignInt.INT32_MAX = Math.pow(2, 31) - 1;
    function clamp(value, minimum, maximum) {
        return value < minimum ? minimum : value > maximum ? maximum : value;
    }
    function unsignedToSigned8(value) {
        var clamped = clamp(value, SignInt.UINT8_MIN, SignInt.UINT8_MAX);
        var converted = Int8Array.from(Uint8Array.of(clamped))[0];
        if (converted === undefined) {
            return NaN;
        }
        return converted;
    }
    SignInt.unsignedToSigned8 = unsignedToSigned8;
    function signedToUnsigned8(value) {
        var clamped = clamp(value, SignInt.INT8_MIN, SignInt.INT8_MAX);
        var converted = Uint8Array.from(Int8Array.of(clamped))[0];
        if (converted === undefined) {
            return NaN;
        }
        return converted;
    }
    SignInt.signedToUnsigned8 = signedToUnsigned8;
    function unsignedToSigned16(value) {
        var clamped = clamp(value, SignInt.UINT16_MIN, SignInt.UINT16_MAX);
        var converted = Int16Array.from(Uint16Array.of(clamped))[0];
        if (converted === undefined) {
            return NaN;
        }
        return converted;
    }
    SignInt.unsignedToSigned16 = unsignedToSigned16;
    function signedToUnsigned16(value) {
        var clamped = clamp(value, SignInt.INT16_MIN, SignInt.INT16_MAX);
        var converted = Uint16Array.from(Int16Array.of(clamped))[0];
        if (converted === undefined) {
            return NaN;
        }
        return converted;
    }
    SignInt.signedToUnsigned16 = signedToUnsigned16;
    function unsignedToSigned32(value) {
        var clamped = clamp(value, SignInt.UINT32_MIN, SignInt.UINT32_MAX);
        var converted = Int32Array.from(Uint32Array.of(clamped))[0];
        if (converted === undefined) {
            return NaN;
        }
        return converted;
    }
    SignInt.unsignedToSigned32 = unsignedToSigned32;
    function signedToUnsigned32(value) {
        var clamped = clamp(value, SignInt.INT16_MIN, SignInt.INT16_MAX);
        var converted = Uint32Array.from(Int32Array.of(clamped))[0];
        if (converted === undefined) {
            return NaN;
        }
        return converted;
    }
    SignInt.signedToUnsigned32 = signedToUnsigned32;
})(SignInt || (exports.SignInt = SignInt = {}));
