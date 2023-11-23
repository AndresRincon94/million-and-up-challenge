/**
 * Change a object to array
 *
 * @param obj - Base object to change
 */
function objectToArray(obj: object) {
  if (!obj) return obj;

  return Object.assign([], Object.values(obj));
}

export default objectToArray;
