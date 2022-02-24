import { Discount } from './discount';
import { CartItem } from './interfaces/cart-item';
import { ShoppingCart } from './shopping-cart'

const createSut = () => {
  const discountMock = createDiscountMock();
  const sut = new ShoppingCart(discountMock);
  return { sut, discountMock }
}

const createDiscountMock = () => {
  class DiscountMock extends Discount { }
  return new DiscountMock();
}

const createCartItem = (name: string, price: number) => {
  class CartItemMock implements CartItem {
    constructor(public name: string, public price: number) { }
  }
  return new CartItemMock(name, price);
}

const createSutWithProduct = () => {
  const { sut, discountMock } = createSut();
  const cartItem1 = createCartItem('camiseta', 40);
  const cartItem2 = createCartItem('chinelo', 20);
  sut.addItem(cartItem1);
  sut.addItem(cartItem2);
  return { sut, discountMock }
}

describe('ShoppingCart', () => {
  it('should be an empty cart when no product is added', () => {
    const { sut } = createSut();
    expect(sut.isEmpty()).toBe(true);
  });

  it('should have 2 cart items', () => {
    const { sut } = createSutWithProduct();
    expect(sut.items.length).toBe(2);
  });

  it('should call discount calculate once when totalWithDicount is called', () => {
    const { sut, discountMock } = createSutWithProduct();
    const discountMockSpy = jest.spyOn(discountMock, 'calculate');
    sut.totalWithDicount();
    expect(discountMockSpy).toHaveBeenCalledTimes(1);
  });

  it('should call discount.calculate when total price when totalWithDicount is called', () => {
    const { sut, discountMock } = createSutWithProduct();
    const discountMockSpy = jest.spyOn(discountMock, 'calculate');
    sut.totalWithDicount();
    expect(discountMockSpy).toHaveBeenLastCalledWith(sut.total());
  });

  it('should add product and clear cart', () => {
    const { sut } = createSutWithProduct();
    expect(sut.items.length).toBe(2);
    sut.clear();
    expect(sut.items.length).toBe(0);
  });

  it('should remove products', () => {
    const { sut } = createSutWithProduct();
    expect(sut.items.length).toBe(2);
    sut.removeItem(1);
    expect(sut.items.length).toBe(1);
  });

});
