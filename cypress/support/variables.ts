// Exporting
const hiddenVariable: string = 'hidden'
export const variable: string = 'variable'

export class MyClass {
  greetings(greeting: string) {
    return 'Hello there! ' + greeting
  }
}

export function myFunction (): void {}

export type MyType = 'string' | number

export interface MyInterface {
  text: string
  value: number
}

export const myArray: string[] = [
  'first',
  'second',
  'third'
]

export const myObject: MyInterface = {
  text: 'some text',
  value: 1234
}