import { newE2EPage } from '@stencil/core/testing';

describe('ic-social-network', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ic-social-network></ic-social-network>');

    const element = await page.find('ic-social-network');
    expect(element).toHaveClass('hydrated');
  });
});
