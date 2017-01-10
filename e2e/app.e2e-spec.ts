import { AGClientPage } from './app.po';

describe('arrowgames.se_client App', function() {
  let page: AGClientPage;

  beforeEach(() => {
    page = new AGClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
