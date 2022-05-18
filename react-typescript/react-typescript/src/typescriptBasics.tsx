

import React from 'react'

let name: string;
let age: number;
let school: number | string // can be a number or string
let isRegistered: boolean;
let hobbies: string[]; //array of strings
let role: [number, string]; //tuple
let lastName: any; //can have any type
let grade: unknown; //can have any type

//printName function returns number or void(nothing) or string etc
let printName: (name: string) => string

// if you don't know what a function will return use never
let calculate: (name: string) => never
/* //object
type Person = {
  name: string,
  age?: number // make it optional with a question mark
}
//assining an object type
let person: Person = {
  name: "Antony",
  age: 38
} */

//combining 2 types
type x = {
  a: number,
  b: string
} 
type y = x & {
  c: number,
  d: string
}

//interface and type  are the same

//combining two interfaces
interface Computer {
  id:number
  name:string
}

interface Dell extends Computer {
  speed: string
}

const typescriptBasics = () => {
  return (
    <div>typescript-basics</div>
  )
}

export default typescriptBasics