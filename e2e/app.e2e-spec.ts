import { A2UsUpSPage } from './app.po';

describe('a2-us-up-s App', () => {
  let page: A2UsUpSPage;

  beforeEach(() => {
    page = new A2UsUpSPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
