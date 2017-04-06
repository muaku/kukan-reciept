import { KukanReceiptPage } from './app.po';

describe('kukan-receipt App', function() {
  let page: KukanReceiptPage;

  beforeEach(() => {
    page = new KukanReceiptPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
