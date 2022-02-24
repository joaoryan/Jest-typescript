import { IndividualCustomer, EnterpriseCustomer } from './customer'

const createIndividual = (firstName: string, lastName: string, cpf: string): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
}

const createEnterprise = (name: string, cnpj: string): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
}

afterEach(() => jest.clearAllMocks());

describe('Enterprise', () => {
  it('should have name, cnpj', () => {
    const sut = createEnterprise("Udemy", '123.333');
    expect(sut).toHaveProperty('name', 'Udemy');
    expect(sut).toHaveProperty('cnpj', '123.333');
  });

  it('should have get name cpf', () => {
    const sut = createEnterprise("Udemy", '123.333');
    expect((sut).getName()).toBe('Udemy');
    expect((sut).getIDN()).toBe('123.333');
  });
});


describe('Individual', () => {
  it('should have firstname, lastName, cpf', () => {
    const sut = createIndividual("joao", 'santos', '123.333');
    expect(sut).toHaveProperty('firstName', 'joao');
    expect(sut).toHaveProperty('lastName', 'santos');
    expect(sut).toHaveProperty('cpf', '123.333');
  });

  it('should have get name cpf', () => {
    const sut = createIndividual("joao", 'santos', '123.333');
    expect((sut).getName()).toBe('joao santos');
    expect((sut).getIDN()).toBe('123.333');
  });
});

