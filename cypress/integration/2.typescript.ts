// import {variable} from '../support/variables'

// Variables and comment ;)
let a = 1     // something that you will change
const b = 2   // something that will never change
var c = 3     // do not use

// array
const myArray = []
const mySecondArray = [
  // items
  1,
  'string'
]

// object
const myObject = {
  property: 'value'
}


describe('Typescript', () => {

  it('Basic types', () => {
    // https://www.typescriptlang.org/docs/handbook/basic-types.html
    const one: number = 1
    const hello: string = 'hello'
    const isThisRight: boolean = true // false?
  })

  // Functions
  function easy() {}

  function harder() {
    return {} // or [] or 1 or "123"
  }

  function mySimpleFunction(input: string): number {
    cy.log(input)
    return 987654321
  }

  // Arrow function - same same but a little different
  const myArrowFunction = (input: number): string => {
    // cy.log(input)
    return 'Arrow function output'
  }

  it('runs my functions', () => {

  })

  // Classes
  class Empty {}

  class Car {
    vin: string = 'ASDFGHJKLSDFG' // property or key
  }

  // interface
  interface MyInterface {
    mustHaveKey: string
  }

  const thisIsMyInterfaceValue: MyInterface = {
    mustHaveKey: 'yes!'
  }

  it('makes my class happy', () => {
    const emptyInstance = new Empty()
  })

})







