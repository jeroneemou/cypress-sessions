// import {variable} from '../support/variables'

// let a = 1

// Variables and comment ;)
let a = 1     // something that you will change
a = a + 2
a = a*10
a = 1234
const b = 2   // something that will never change
// b = 3
// var c = 3     // do not use

let asdf = 'asdf'
let asdfnull = null
let truthy = true // false
let undefindeVar = undefined
let asd = 7.8







type Whatever = String | Number | Object | null

// array
// const myArray: Array<Number> = [
//   'string',
//   'strin2g',
//   2
// ]
const mySecondArray: Array<Whatever> = [
  // items
  1, // first one [0]
  'string',
  {},
  null,
  true,
  'does it job'
]



it('should play with array', () => {
  mySecondArray.push('added value')
  mySecondArray.push('another value')
  cy.log('my awesome array', mySecondArray[0] ) // First item
  cy.log('my awesome array', mySecondArray.length ) // Length of an array
})









// object
const myObject = {
  property: 'value'
}



// Custom type consisting of number or string
type AwesomeType = number | string

describe('Typescript', () => {

  it('Basic types', () => {
    // https://www.typescriptlang.org/docs/handbook/basic-types.html
    let one: number
    one = 1
    // one = 'string'
    const hello: string = '123' //1 //'hello'
    const isThisRight: boolean = false //true // false?

    const customArray: Array<number> = [
      1, 2, 3, 4, 5, 6, 7 , // but not 'eight'
    ]
    customArray[1] = 1515 // reassign value to an array

    customArray.push( one ) // what you want to push in it

    // You can create a messy array with custom type
    const messyArray: Array<AwesomeType> = [1, 'two', 3 , 'four']
    // const messyArray: AwesomeType = [1, 'two', 3 , 'four']

    cy.log('basic types', [one, hello, isThisRight, customArray])
  })










  // Functions

  // My easy function that does nothing but logs something in console
  //                          v function input
  function awesomeFunctionName () {
    // function body
    cy.log('Hello from awesomeFunctionName')
  }

  () => { }// ... } //how do you call it?

  const awesomeArrowFunction = () => {
    cy.log('Hello from awesomeArrowFunction') 
  }


  it('easy functions', () => {
    awesomeFunctionName() // I have to call the function!
    awesomeArrowFunction() // I have to call the function!
  })


  // Trickier function

  // input
  const trickierFunction = (a:number, b:number) : void => {
    cy.log('Sum', inReturnFunction() + b)
  }

  // something to return
  const inReturnFunction = (): number => {
    return 1234
  }

  it('trickier functions', () => {
    trickierFunction(1, 3) // I have to call the function!
    cy.log('return function', inReturnFunction())
  })





  // function easy() {}
  // function harder() {
  //   return {} // or [] or 1 or "123"
  // }

  // function mySimpleFunction(input: string): number {
  //   cy.log(input)
  //   return 987654321
  // }

  // // Arrow function - same same but a little different
  // const myArrowFunction = (input: number): string => {
  //   // cy.log(input)
  //   return 'Arrow function output'
  // }


//   // Classes
//   class Empty {} 

//   class Car {
//     vin: string = 'ASDFGHJKLSDFG' // property or key
//   }

//   // interface
//   interface MyInterface {
//     mustHaveKey: string
//   }

//   const thisIsMyInterfaceValue: MyInterface = {
//     mustHaveKey: 'yes!'
//   }

//   it('makes my class happy', () => {
//     const emptyInstance = new Empty()
//   })

})







