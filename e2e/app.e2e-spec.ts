import { AngularSummitPage } from './app.po';

describe('angular-summit App', () => {
  let page: AngularSummitPage;

  beforeEach(() => {
    page = new AngularSummitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
