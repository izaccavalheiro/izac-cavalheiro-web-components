import { newE2EPage } from '@stencil/core/testing';

describe('ic-switch', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ic-switch></ic-switch>');

    const element = await page.find('ic-switch');
    expect(element).toHaveClass('hydrated');
  });
});
