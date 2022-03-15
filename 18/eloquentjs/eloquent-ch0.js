const sum = (total = 0, count = 1) => {
    while (count <= 20) {
    total += count
    count += 1
    console.log(total, count)
    }
    return `total: ${total} count: ${count}`
}

console.log(sum(2,7))
console.log(sum())



function factorial(n) {
    if (n == 0) {
      return 1;
    } else {
      return factorial(n - 1) * n;
    }
  }

  console.log(factorial(8))