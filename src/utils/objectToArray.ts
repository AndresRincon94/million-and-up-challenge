function objectToArray(obj: any) {
  if (!obj) return obj

  return Object.assign([], Object.values(obj))
}

export default objectToArray;
