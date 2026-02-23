const { validarPedido } = require('../validarPedido');

describe('validarPedido', () => {

  test('deve retornar false se o total for menor ou igual a 0', () => {
    const pedido = {
      cliente: "Carlos",
      total: 0,
      itens: ["Produto A"]
    };

    expect(validarPedido(pedido)).toBe(false);
  });

  test('deve retornar false se não existir cliente', () => {
    const pedido = {
      total: 100,
      itens: ["Produto A"]
    };

    expect(validarPedido(pedido)).toBe(false);
  });

  test('deve retornar false se não existir lista de itens', () => {
    const pedido = {
      cliente: "Carlos",
      total: 100
    };

    expect(validarPedido(pedido)).toBe(false);
  });

  test('deve retornar false se a lista de itens estiver vazia', () => {
    const pedido = {
      cliente: "Carlos",
      total: 100,
      itens: []
    };

    expect(validarPedido(pedido)).toBe(false);
  });

  test('deve retornar true se o pedido for válido', () => {
    const pedido = {
      cliente: "Carlos",
      total: 150,
      itens: ["Produto A", "Produto B"]
    };

    expect(validarPedido(pedido)).toBe(true);
  });

});