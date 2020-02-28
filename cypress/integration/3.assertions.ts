// https://docs.cypress.io/guides/references/assertions.html
describe('Lets assert', () => {

  // expect vs assert

  const add = (a:number, b:number): number => {
    return a + b
  }

  const myArray = [1, 3, 4]

  it('equal', () => {
    // note TypeScript definition
    const x: number = 42
    expect(x).to.equal(42)
    expect(x).to.not.equal(41)

    expect(add(1, 3)).to.eq(4) // shorter and pass function
    expect(myArray.length).to.eq(3) // array length

    // note TypeScript definition
    const y: string = 'hello'
    expect(y).to.equal('hello')
    expect(y).to.not.equal('hell')
    // expect(y).to.not.equal('hello')

    // expect({}).to.equal({}) // Is it equal ??
    // expect([]).to.equal([]) // Is it equal??
  })


  const myObject = {
    a: 'value',
    nested: {
      a: 'value',
      b: 'value'
    }
  }

  const basicObject = {}

  class Car {
    private breaks: boolean
  }


  it('deep equal / eql', () => {
    // note TypeScript definition
    // expect({a: 1}).to.equal({a: 1})
    expect({a: 1}).to.deep.equal({a: 1})
    // expect([1, 2, 'a']).to.equal([1, 2, 'a'])
    expect([1, 2, 'a']).to.deep.equal([1, 2, 'a'])

    // Similar
    expect({a: 1}).to.eql({a: 1})
    expect(1).to.eql(1)
  })




  it('include', () => {
    expect('foobar').to.include('foo')
    // expect('Whatever').to.include('what')

    expect([1, 2, 3]).to.include(2)
    expect([1, 2, 3]).to.not.include(5)
    // expect([1, 2, 3]).to.include('2')
    // expect([1, '2', 3]).to.include(2)

    // expect({a: 1, b: 3, c: 3}).to.include({a: 1, b: 2})
    expect({a: 1, b: 2, c: 3}).to.deep.include({a: 1, b: 2})
  })

  function howManyEyesDoesItHave(animal: Animal) {

  }

  it('instanceof / a', () => {

    interface Animal {
      numberOfEyes: number
    }


    function howManyEyesDoesItHave(animal: Animal) {
      cy.log("Animal eyes:", animal.numberOfEyes)
    }

    abstract class MeatEatingAnimal implements Animal {
      numberOfEyes: number = 10
      abstract walk (): boolean // prototype of function that needs to implemented
    }

    class Cat extends MeatEatingAnimal {
      numberOfEyes: number = 123

      walk(): boolean {
        // implentation
        return true
      }
    }

    expect(new Cat()).to.be.an.instanceof(Cat)
    expect(new Cat()).to.be.an.instanceof(MeatEatingAnimal)
    // expect(new Cat()).to.be.an.instanceOf(Animal) // No interface please
 

    const myObject = {a: 1}
    expect('foo').to.be.a('string')
    expect(myObject.a).to.be.a('number')
    expect({a: 1}).to.be.an('object')
    expect([1,2,3]).to.be.an('array')
    expect(null).to.be.a('null')
    expect(undefined).to.be.an('undefined')
    expect(new Error()).to.be.an('error')
  })


  it('keys', () => {
    const myObject = {
      a: 'A key',
      b: 'B key',
      c: 'C key'
    }

    expect(myObject).to.have.any.keys('a')
    expect(myObject).to.have.all.keys('a', 'b', 'c')
  })


  it('true / false / ok / null', () => {
    expect(1).to.equal(1) // Recommended
    expect(1).to.be.ok // Not recommended

    expect(true).to.be.true // Recommended
    expect(true).to.be.ok // Not recommended

    expect(0).to.equal(0) // Recommended
    expect(0).to.not.be.ok // Not recommended

    expect(false).to.be.false // Recommended
    expect(false).to.not.be.ok // Not recommended

    expect(null).to.be.null // Recommended
    expect(null).to.not.be.ok // Not recommended

    expect(undefined).to.be.undefined // Recommended
    expect(undefined).to.not.be.ok // Not recommended

    expect([]).to.be.ok
  })

  it('empty', () => {
    expect([]).to.be.empty
    expect('').to.be.empty
  })

  it('above / below / most / least / within', () => {
    expect(2).to.be.above(1) // >
    expect(3).to.be.least(2) // >=

    expect(1).to.be.below(2)    // <
    expect(1).to.be.at.most(2)  // <=

    expect(5).to.be.within(1,10)
    cy.log('today', new Date()) // today
    cy.log('new year', new Date('2020-1-1')) // 1.1.2020

    const yesterday = new Date('2020-1-30')
    const tomorrow = new Date('2020-2-2')

    //      today                   yesterday  tomorrow
    // expect(new Date()).to.be.within(yesterday, tomorrow) // Fix this
  })

  it('property', () => {
    expect({a: 1}).to.have.property('a')
    expect({a: 1}).to.have.property('a', 1)
  })

  it('lengthOf', () => {
    expect('foo').to.have.lengthOf(3)
    expect([1, 2, 3]).to.have.lengthOf(3)
    // ZIP, Country 
    // expect({a:1, b:2}).to.have.lengthOf(2) // Not objects please!
  })

  // https://regex101.com/
  it('match', () => {
    expect('foobaraskjdaskdhaskdjaskjdhsakjdha').to.match(/^foo.*/)
  })

  it('satisfy', () => {

    // Example
    const elephant = {
      legs: 5,
      babies: [
        'albert', 'anna'
      ]
    }
    // THE ELEPHANT
    // Elephant with 5 legs and has 2 babies
    expect(1).to.satisfy((num: number) => {

      // has to have 

      // TODO conditions

      return true // or false?
    })
  })


})
