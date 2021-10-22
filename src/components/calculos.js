const sum = (a, b) => {
    const value1 = parseInt(a)
    const value2 = parseInt (b)
    const sum = value1 + value2
    return sum
  }

  const sumTotal = (a, b, c, d, e) => {
    const value1 = parseInt(a)
    const value2 = parseInt (b)
    const value3 = parseInt (c)
    const value4 = parseInt (d)
    const sum = value1 + value2 + value3 + value4 
    return sum
  }

const percentage = (valueRent, valueTotalIncome) => {
    const a = parseInt(valueRent) * 100
    const porcentage = a/valueTotalIncome
    return Math.round(porcentage)
}

export { sum, percentage, sumTotal}



