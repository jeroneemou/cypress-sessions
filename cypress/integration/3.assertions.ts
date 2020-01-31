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

  it('deep equal / eql', () => {
    // note TypeScript definition
    // expect({a: 1}).to.equal({a: 1})
    expect({a: 1}).to.deep.equal({a: 1})
    // expect([1, 2, 'a']).to.equal([1, 2, 'a'])
    expect([1, 2, 'a']).to.deep.equal([1, 2, 'a'])

    // Similar
    expect({a: 1}).to.eql({a: 1})
  })

  it('include', () => {
    expect('foobar').to.include('foo')
    // expect('Whatever').to.include('what')

    expect([1, 2, 3]).to.include(2)
    expect([1, 2, 3]).to.not.include(5)
    // expect([1, 2, 3]).to.include('2')
    // expect([1, '2', 3]).to.include(2)

    expect({a: 1, b: 2, c: 3}).to.include({a: 1, b: 2})
    expect({a: 1, b: 2, c: 3}).to.deep.include({a: 1, b: 2})
  })

  it('instanceof / a', () => {

    interface Animal {}
    abstract class MeatEatingAnimal implements Animal {}
    class Cat extends MeatEatingAnimal {}

    expect(new Cat()).to.be.an.instanceof(Cat)
    expect(new Cat()).to.be.an.instanceof(MeatEatingAnimal)

    expect('foo').to.be.a('string')
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
  })

  it('empty', () => {
    expect([]).to.be.empty
    expect('').to.be.empty
  })

  it('above / below / most / least / within', () => {
    expect(2).to.be.above(1) // >
    expect(3).to.be.least(2) // >=

    expect(1).to.be.below(2) // <
    expect(1).to.be.at.most(2) // <=

    expect(5).to.be.within(1,10)
  })

  it('property', () => {
    expect({a: 1}).to.have.property('a')
    expect({a: 1}).to.have.property('a', 1)
  })

  it('lengthOf', () => {
    expect('foo').to.have.lengthOf(3)
    expect([1, 2, 3]).to.have.lengthOf(3)
  })

  it('match', () => {
    expect('foobar').to.match(/^foo/)
  })

  it('satisfy', () => {
    expect(1).to.satisfy((num: number) => {
      return num > 0
    })
  })

  it('', () => {
  })

  it('', () => {
  })

  it('', () => {
  })


})
