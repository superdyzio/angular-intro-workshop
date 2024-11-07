export function getRandomElements<T>(arr: T[], numElements: number) {
  return arr.slice().sort(() => Math.random() - 0.5).slice(0, numElements);
}

export function getRandomNumber(x: number, y: number) {
  return Math.floor(Math.random() * (y - x + 1) + x);
}
