describe('Primitive values', () => {
  it('should test jest assertions', () => {
    const number = 10;

    expect(number).toBeLessThan(11);
    expect(number).toBeLessThanOrEqual(10);

    expect(number).toBeCloseTo(10.001);
    expect(number).toBeCloseTo(9.996); //ver se está perto de

    expect(number).not.toBeNull();  //ver se não e null

    expect(number).toHaveProperty('toString'); //verifica se existe dentro de number
  });

  it('should split tests', () => {
    const number = 10;

    expect(number).toBe(10);     //Checa o retorno
    expect(number).toEqual(10);  //Checa para objetos

    expect(number).not.toBeFalsy(); //toBeFalsy checa se e falso
    expect(number).toBeTruthy();    //checa se e verdadeiro

    expect(number).toBeGreaterThan(9); //se e maior
    expect(number).toBeGreaterThanOrEqual(10); //se e maior ou igual
    expect(number).toBeLessThan(11); //se e menor
  });
});

describe('Objects', () => {
  it('should test jest assertions with objects', () => {
    const person = { name: 'Luiz', age: 30 };
    const anotherPerson = { ...person };

    expect(person).toEqual(anotherPerson); //ver se os obj são iguais
    expect(person).toHaveProperty('age');  //verifica se existe a propriedade age
    expect(person).not.toHaveProperty('lastName');
    expect(person).toHaveProperty('age', 30); //verifica se existe e ve o valor

    expect(person.name).toBe('Luiz');
  });
});
