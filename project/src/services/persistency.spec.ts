import { Persistency } from './persistency'

describe('Persistency', () => {
  it('should return undefined', () => {
    const sut = new Persistency();
    expect(sut.saveOrder()).toBeUndefined();

  });

  it('should call console', () => {
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toBeCalledTimes(1);

  });

  it('should console log ', () => {
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toBeCalledWith('Pedido salvo com sucesso...');

  });
});
