import { Chaper01Page } from './app.po';

describe('chaper01 App', function() {
  let page: Chaper01Page;

  beforeEach(() => {
    page = new Chaper01Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
