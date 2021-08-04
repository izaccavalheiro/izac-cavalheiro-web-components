import {
  Component,
  Host,
  h,
  Prop,
  State
} from '@stencil/core'

@Component({
  tag: 'ic-switch',
  styleUrl: 'ic-switch.css',
  shadow: true
})
export class IcSwitch {
  @Prop() label: string
  @Prop() active: boolean = false

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
        <button class={this.className} onClick={this.handleClick}>
          <span>{this.label}</span>
        </button>
      </Host>
    )
  }
}
