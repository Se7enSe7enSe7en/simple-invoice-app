// WARNING: these functions are not standard and 
// may have unwanted consequences, use with caution

// Data Transforming:

// tstb_1: Unextend Object
// This is a function that dynamically creates
// an object_b (unextended object) from object_A (extended object) 
// where:
// object_A (unextendFrom):
// 1. must have an interface extended from object_B's interface
// 2. is the actual object that needs unextending
// object_B (unextendTo):
// 1. must have an interface
// 2. a sample object that follows object_B's interface
// this function returns an object that follows interface_B
export function unextendObject(unextendFrom: any, unextendTo: any) {
    const allowed: string[] = Object.keys(unextendTo);
    // console.log('allowed: ', allowed); // DEBUG
    const filtered = Object.keys(unextendFrom)
    .filter((key) => allowed.includes(key))
    .reduce((obj, key) => {
        return {
        ...obj,
        [key]: unextendFrom[key],
        };
    }, {});
    // console.log('TYPEOF FILTERERD: ', typeof filtered); // DEBUG
    // console.log('TYPEOF unextendFrom: ', typeof unextendFrom); // DEBUG
    // console.log('FILTERED', filtered); // DEBUG
    return filtered;
}