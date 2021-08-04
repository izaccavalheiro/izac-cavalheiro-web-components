import { newSpecPage } from '@stencil/core/testing';
import { IcSwitch } from '../ic-switch';

describe('ic-switch', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IcSwitch],
      html: `<ic-switch></ic-switch>`,
    });
    expect(page.root).toEqualHtml(`
      <ic-switch>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ic-switch>
    `);
  });
});
