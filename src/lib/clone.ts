function clone<x>(data:x):x{
  return JSON.parse(JSON.stringify((data)))
}
export default clone;