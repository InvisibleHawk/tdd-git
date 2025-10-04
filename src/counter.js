export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }

  const setDoubleCounter = (count) => {
    counter = count * 2
    element.innerHTML = `count is ${counter}`
  }

  const linearInterpolation = (start, end, t) => {
    return start + (end - start) * t
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
