function a(x) {
  delete x;
  return x;
}
console.log(a(5));
