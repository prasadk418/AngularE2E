import { SourcecodePage } from './app.po';

describe('sourcecode App', () => {
  let page: SourcecodePage;

  beforeEach(() => {
    page = new SourcecodePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
