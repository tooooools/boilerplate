import './HelloWorld.scss'

import { Component } from '/utils/jsx'
import rawPublicSvgAsset from '/favicons/icon.svg?raw'

export default class Hello extends Component {
  template (props) {
    return <section class='hello-world' innerHTML={rawPublicSvgAsset} />
  }
}
