import { Component, Prop, h } from '@stencil/core';
@Component({
  tag: 'sb-button',
  styleUrl: 'button.scss',
  shadow: true,
})
export class Button {
  /**
   * Theme has the following themes: 'primary' | 'secondary' | 'light' | 'dark'
   */
  @Prop() theme: string = 'primary';

  /**
   * Icon
   */
  @Prop() icon: string;

  /**
   * Disable
   */
  @Prop({ reflect: true })
  disabled: boolean;

  render() {
    return (
      <button class={this.theme} disabled={this.disabled}>
        {/* {this.icon} TODO use fontwesome maybe*/}
        <slot />
      </button>
    );
  }
}
