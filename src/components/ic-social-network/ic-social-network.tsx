import {
  Component,
  Host,
  h,
  Prop,
  getAssetPath,
  State
} from '@stencil/core'

import {
  data
} from './data'

@Component({
  tag: 'ic-social-network',
  styleUrl: 'ic-social-network.css',
  assetsDirs: ['assets'],
  shadow: true
})
export class IcSocialNetwork {
  @Prop() name: string
  @Prop() image: string
  @Prop() target: string
  @Prop() url: string
  @Prop() urlTitle: string
  @Prop() darkMode: boolean

  @State() defaultImage = `NAME-logo-COLOR.png`;
  @State() defaultTarget = `_blank`;

  render() {
    const name = this.name.toLowerCase()
    const image = (this.image || this.defaultImage.replace('NAME', name).replace('-COLOR', this.darkMode ? '-inverted' : ''))
    const imageAlt = `${this.name} logo`
    const url = this.url || data.filter(filteredItem => filteredItem.name === name)[0].url
    const urlTitle = this.urlTitle || `${this.name} link`
    const target = this.target || this.defaultTarget

    const classesName = `${this.darkMode ? 'dark-mode' : ''}`

    return (
      <Host>
        <a href={url} title={urlTitle} target={target} class={classesName} rel="noopener">
          <img src={getAssetPath(`./assets/${image}`)} alt={imageAlt} />
        </a>
      </Host>
    )
  }
}
