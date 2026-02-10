const UINT8_MIN: number = 0;
const UINT8_MAX: number = (2**8) - 1;
const UINT16_MIN: number = 0;
const UINT16_MAX: number = (2**16) - 1;
const UINT32_MIN: number = 0;
const UINT32_MAX: number = (2**32) - 1;
const UINT64_MIN: number = 0;
const UINT64_MAX: number = (2**64) - 1;
const INT8_MIN: number = -(2**7);
const INT8_MAX: number = (2**7) - 1;
const INT16_MIN: number = -(2**15);
const INT16_MAX: number = 2**15;
const INT32_MIN: number = -(2**31);
const INT32_MAX: number = (2**31) - 1;
const INT64_MIN: bigint = -(2n**63n);
const INT64_MAX: bigint = (2n**63n) - 1n;

const unsignedToSigned8 = (int8: number): number => Int8Array.from(Uint8Array.of(int8))[0];
const signedToUnsigned8 = (uint8: number): number => Uint8Array.from(Int8Array.of(uint8))[0];
const unsignedToSigned16 = (int16: number): number => Int16Array.from(Uint16Array.of(int16))[0];
const signedToUnsigned16 = (uint16: number): number => Uint16Array.from(Int16Array.of(uint16))[0];
const unsignedToSigned32 = (int32: number): number => Int32Array.from(Uint32Array.of(int32))[0];
const signedToUnsigned32 = (uint32: number): number => Uint32Array.from(Int32Array.of(uint32))[0];
const unsignedToSigned64 = (int64: bigint): bigint => BigInt64Array.from(BigUint64Array.of(int64))[0];
const signedToUnsigned64 = (uint64: bigint): bigint => BigUint64Array.from(BigInt64Array.of(uint64))[0];

export default {
    UINT8_MIN,
    UINT8_MAX,
    UINT16_MIN,
    UINT16_MAX,
    UINT32_MIN,
    UINT32_MAX,
    UINT64_MIN,
    UINT64_MAX,
    INT8_MIN,
    INT8_MAX,
    INT16_MIN,
    INT16_MAX,
    INT32_MIN,
    INT32_MAX,
    INT64_MIN,
    INT64_MAX,
    signedToUnsigned8,
    unsignedToSigned8,
    signedToUnsigned16,
    unsignedToSigned16,
    signedToUnsigned32,
    unsignedToSigned32,
    signedToUnsigned64,
    unsignedToSigned64
}