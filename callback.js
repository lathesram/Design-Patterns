const calc = () => {
    return 2 + 3
}

const printCalc = (callback) => {
    console.log(callback());
}

printCalc(calc)