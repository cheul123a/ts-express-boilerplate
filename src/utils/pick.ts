/**
 * Create an object composed of the picked object properties
 * @param {Object} object
 * @param {string[]} keys
 * @returns {Object}
 */


// T = [string]: any ex) {query: {value: 1}}
// K = T의 키중 string인 값만 ex) ["query"]
// T 에서 K 프로퍼티만 ex) {query: {value: 1}}
 const pick = <T extends Record<string, any>, K extends Extract<keyof T, string>> (
    object: T,
    keys: readonly K[]
): Partial<Pick<T,K>> => {
    return keys.reduce<Partial<Pick<T, K>>>((accumulator, key) => {
        if (object && Object.prototype.hasOwnProperty.call(object, key)) {
            accumulator[key] = object[key];
        }

        return accumulator;
    }, {});
};


export default pick;