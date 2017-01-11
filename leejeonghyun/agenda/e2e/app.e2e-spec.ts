import { CardStudyPage } from './app.po';

describe('card-study App', function() {
  let page: CardStudyPage;

  beforeEach(() => {
    page = new CardStudyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
