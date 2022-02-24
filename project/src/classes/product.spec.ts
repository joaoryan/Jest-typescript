import { Product } from './product'

const createSut = (nome: string, price: number): Product => {
  return new Product(nome, price);
}

describe('Persistency', () => {
  it('should have properties name and price', () => {
    const sut = createSut("camiseta", 49.90);
    expect(sut).toHaveProperty('name', 'camiseta');
    expect(sut).toHaveProperty('price', 49.90);
  });
});
