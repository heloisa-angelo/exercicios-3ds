const subtrair = require("../src/index")

describe("Função subtrair", () => {
    test("Deve retornar 3 quando subtrair 5 - 2", () => {
        const a = 5
        const b = 2

        const resultado = subtrair(a, b)

        expect(resultado).toBe(3)
    })

    test("Deve retornar 5 ao subtrair 10 - 5", () => {
        const a = 10
        const b = 5

        const resultado = subtrair(a, b)

        expect(resultado).toBe(5)
    })
})