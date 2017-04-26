import { BookandlearnPage } from './app.po';

describe('bookandlearn App', () => {
  let page: BookandlearnPage;

  beforeEach(() => {
    page = new BookandlearnPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
