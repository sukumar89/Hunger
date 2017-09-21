import { LoginsPage } from './app.po';

describe('logins App', function() {
  let page: LoginsPage;

  beforeEach(() => {
    page = new LoginsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
