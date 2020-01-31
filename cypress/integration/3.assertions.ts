import { add } from '../support/add'

describe('Lets assert', () => {
  it('equal', () => {
    // note TypeScript definition
    const x: number = 42
    expect(x).to.equal(42)
    expect(x).to.not.equal(41)

    // note TypeScript definition
    const y: string = 'hello'
    expect(y).to.equal('hello')
    expect(y).to.not.equal('hell')
    // expect(y).to.not.equal('hello')
  })

  it('deep equal', () => {
    // note TypeScript definition
    // expect({a: 1}).to.equal({a: 1})
    expect({a: 1}).to.deep.equal({a: 1})
    // expect([1, 2, 'a']).to.equal([1, 2, 'a'])
    expect([1, 2, 'a']).to.deep.equal([1, 2, 'a'])
  })

  it('include', () => {
    expect('foobar').to.include('foo')
    // expect('Whatever').to.include('what')

    expect([1, 2, 3]).to.include(2)
    // expect([1, 2, 3]).to.include('2')
    // expect([1, '2', 3]).to.include(2)

    expect({a: 1, b: 2, c: 3}).to.include({a: 1, b: 2})
    expect({a: 1, b: 2, c: 3}).to.deep.include({a: 1, b: 2})
  })

  it('instanceof', () => {

    interface Animal {}
    abstract class MeatEatingAnimal implements Animal {}
    class Cat extends MeatEatingAnimal {}

    expect(new Cat()).to.be.an.instanceof(Cat)
    expect(new Cat()).to.be.an.instanceof(MeatEatingAnimal)
  })


  it('', () => {

  })


  it('', () => {

  })


  it('', () => {

  })


})
