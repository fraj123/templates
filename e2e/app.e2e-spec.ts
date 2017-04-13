import { PrimeLoginPage } from './app.po';

describe('prime-login App', () => {
  let page: PrimeLoginPage;

  beforeEach(() => {
    page = new PrimeLoginPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
