import { AgendaFolderingCssPage } from './app.po';

describe('agenda-foldering-css App', function() {
  let page: AgendaFolderingCssPage;

  beforeEach(() => {
    page = new AgendaFolderingCssPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
