export namespace SignInt {
    export const UINT8_MIN: number = 0;
    export const UINT8_MAX: number = 2 ** 8 - 1;
    export const UINT16_MIN: number = 0;
    export const UINT16_MAX: number = 2 ** 16 - 1;
    export const UINT32_MIN: number = 0;
    export const UINT32_MAX: number = 2 ** 32 - 1;
    export const UINT64_MIN: number = 0;
    export const UINT64_MAX: number = 2 ** 64 - 1;
    export const INT8_MIN: number = -(2 ** 7);
    export const INT8_MAX: number = 2 ** 7 - 1;
    export const INT16_MIN: number = -(2 ** 15);
    export const INT16_MAX: number = 2 ** 15;
    export const INT32_MIN: number = -(2 ** 31);
    export const INT32_MAX: number = 2 ** 31 - 1;

    function clamp(value: number, minimum: number, maximum: number): number {
        return value < minimum ? minimum : value > maximum ? maximum : value;
    }

    export function unsignedToSigned8(value: number): number {
        let clamped: number = clamp(value, UINT8_MIN, UINT8_MAX);
        let converted: number | undefined = Int8Array.from(Uint8Array.of(clamped))[0];
        return converted !== undefined ? converted : NaN;
    }

    export function signedToUnsigned8(value: number): number {
        let clamped: number = clamp(value, INT8_MIN, INT8_MAX);
        let converted: number | undefined = Uint8Array.from(Int8Array.of(clamped))[0];
        return converted !== undefined ? converted : NaN;
    }

    export function unsignedToSigned16(value: number): number {
        let clamped: number = clamp(value, UINT16_MIN, UINT16_MAX);
        let converted: number | undefined = Int16Array.from(Uint16Array.of(clamped))[0];
        return converted !== undefined ? converted : NaN;
    }

    export function signedToUnsigned16(value: number): number {
        let clamped: number = clamp(value, INT16_MIN, INT16_MAX);
        let converted: number | undefined = Uint16Array.from(Int16Array.of(clamped))[0];
        return converted !== undefined ? converted : NaN;
    }

    export function unsignedToSigned32(value: number): number {
        let clamped: number = clamp(value, UINT16_MIN, UINT16_MAX);
        let converted: number | undefined = Int32Array.from(Uint32Array.of(clamped))[0];
        return converted !== undefined ? converted : NaN;
    }

    export function signedToUnsigned32(value: number): number {
        let clamped: number = clamp(value, INT32_MIN, INT32_MAX);
        let converted: number | undefined = Uint32Array.from(Int32Array.of(clamped))[0];
        return converted !== undefined ? converted : NaN;
    }
}