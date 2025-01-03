export const antiChrono = {
    tests: (a, b) => ((a < b) ? 1 : -1),
    prod: (a, b) => ((a?.date < b?.date) ? 1 : -1)
}