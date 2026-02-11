namespace SignInt {
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

    export const unsignedToSigned8 = (int8: number): number => Int8Array.from(Uint8Array.of(int8))[0];
    export const signedToUnsigned8 = (uint8: number): number => Uint8Array.from(Int8Array.of(uint8))[0];
    export const unsignedToSigned16 = (int16: number): number => Int16Array.from(Uint16Array.of(int16))[0];
    export const signedToUnsigned16 = (uint16: number): number => Uint16Array.from(Int16Array.of(uint16))[0];
    export const unsignedToSigned32 = (int32: number): number => Int32Array.from(Uint32Array.of(int32))[0];
    export const signedToUnsigned32 = (uint32: number): number => Uint32Array.from(Int32Array.of(uint32))[0];
}
