import { newE2EPage } from '@stencil/core/testing';

describe('ic-menu-toggle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ic-menu-toggle></ic-menu-toggle>');

    const element = await page.find('ic-menu-toggle');
    expect(element).toHaveClass('hydrated');
  });
});
