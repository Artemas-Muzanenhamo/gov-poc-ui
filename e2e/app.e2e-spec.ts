import { AppPage } from './app.po';

describe('gov-poc-ng App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('GOV-POC');
  });
});
