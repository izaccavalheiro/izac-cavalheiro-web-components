import {
  Component,
  Host,
  h,
  Prop,
  State
} from '@stencil/core'

@Component({
  tag: 'ic-menu-toggle',
  styleUrl: 'ic-menu-toggle.css',
  shadow: true
})
export class IcMenuToggle {
  @Prop() label: string
  @Prop() active: boolean = false
  @Prop() darkMode: boolean

  @State() checked: boolean = false
  @State() className: string = ''

  private setChecked = (checked?: boolean) => {
    this.checked = checked || !this.checked
  }

  private getClassName = (state) => {
    return state ? 'active' : ''
  }

  private handleClick = () => {
    this.setChecked()
  }

  private update = () => {
    this.className = this.getClassName(this.checked)
  }

  componentDidLoad() {
    if (this.active) {
      this.setChecked(true)
    }

    this.update()
  }

  componentWillRender() {
    this.update()
  }

  render() {
    return (
      <Host>
        <button class={`${this.className} ${this.darkMode ? 'dark-mode' : ''}`} onClick={this.handleClick}>
          <span class='bar1'></span>
          <span class='bar2'></span>
          <span class='bar3'></span>
        </button>
      </Host>
    )
  }
}
