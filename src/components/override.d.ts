/**
 * Safetly merge two object and return
 *
 * @param {Object} obj
 * @param {Object} priorObj
 * @returns Object
 */
export function merge(obj: any, priorObj?: any): any;
/**
 * Merge two object's property value and return.
 * - @prop existence in first/base object is mendatory.
 * - @prop existence in second/prior object is optional.
 *
 * @param {Objecrt} obj
 * @param {Object} priorObj
 * @param {string} prop
 *
 * @returns Object
 */
export function mergeAt(obj: Objecrt, priorObj: any, prop: string): any;
/**
 * Resolve consumer given override values
 *
 * @param {Object} obj
 * @param {string} key
 * @param {Object} props
 *
 * @returns Object|undefined
 */
export function resolve(obj: any, key: string, props: any): any;
/**
 * Resolve consumer given subcomponent style override
 *
 * @param {Object} obj
 * @param {ObjectObject|null} props
 *
 * @returns Object|undefined
 */
export function resolveStyle(obj: any, props: ObjectObject | null): any;
/**
 * Resolve consumer given subcomponent override
 *
 * @param {Object} obj
 *
 * @returns Object|undefined
 */
export function resolveComponent(obj: any): {
    component: any;
};
/**
 * Resolve consumer given subcomponent props
 *
 * @param {Object} props
 * @param {Object} props
 *
 * @returns Object|undefined
 */
export function resolveProps(props: any, obj: any): any;
