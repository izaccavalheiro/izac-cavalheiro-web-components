import { newSpecPage } from '@stencil/core/testing';
import { IcMenuToggle } from '../ic-menu-toggle';

describe('ic-menu-toggle', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IcMenuToggle],
      html: `<ic-menu-toggle></ic-menu-toggle>`,
    });
    expect(page.root).toEqualHtml(`
      <ic-menu-toggle>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ic-menu-toggle>
    `);
  });
});
