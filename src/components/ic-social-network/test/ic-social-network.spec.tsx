import { newSpecPage } from '@stencil/core/testing';
import { IcSocialNetwork } from '../ic-social-network';

describe('ic-social-network', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IcSocialNetwork],
      html: `<ic-social-network></ic-social-network>`,
    });
    expect(page.root).toEqualHtml(`
      <ic-social-network>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ic-social-network>
    `);
  });
});
