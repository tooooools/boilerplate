/* global __VERSION__ */

import '/test/test.scss'

import { render } from '/utils/jsx'
import HelloWorld from '/components/HelloWorld'

console.log('Hello from test.jsx')
console.log(`${__VERSION__}-${import.meta.env.MODE}`)
render(<HelloWorld />)
