/* global __VERSION__ */

import { render } from '/utils/jsx'
import HelloWorld from '/components/HelloWorld'

console.log(`${__VERSION__}-${import.meta.env.MODE}`)
render(<HelloWorld />)