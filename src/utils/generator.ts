export function getRandomCode() {
  return Math.random().toString(36).slice(2, 8).toUpperCase();
}

export function getDiscount() {
  return Math.floor(Math.random() * (25 - 5 + 1)) + 5;
}
