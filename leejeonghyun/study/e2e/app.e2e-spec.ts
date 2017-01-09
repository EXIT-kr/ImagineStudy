import { DevNoteNg2Page } from './app.po';

describe('dev-note-ng2 App', function() {
  let page: DevNoteNg2Page;

  beforeEach(() => {
    page = new DevNoteNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
