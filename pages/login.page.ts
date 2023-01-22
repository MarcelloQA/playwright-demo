import { expect, Locator, Page } from "@playwright/test";
import { ERROR_MESSAGES, URLS, USERS } from "../support/consts";

export class Login {
  readonly page: Page;
  readonly userNameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;
  readonly errorButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userNameInput = page.getByTestId("username");
    this.passwordInput = page.getByTestId("password");
    this.loginButton = page.getByTestId("login-button");
    this.errorMessage = page.getByTestId("error");
    this.errorButton = page.getByTestId("error").getByRole("button");
  }
  async goToBaseUrl() {
    await this.page.goto(URLS.BASE_URL);
  }

  async enterValidUserName() {
    await this.userNameInput.fill(USERS.VALID_USER.username);
  }

  async enterInvalidUserName() {
    await this.userNameInput.fill(USERS.INVALID_USER.username);
  }

  async enterLockedUserName() {
    await this.userNameInput.fill(USERS.LOCKED_USER.username);
  }

  async enterValidPassword() {
    await this.passwordInput.fill(USERS.VALID_USER.password);
  }

  async enterInvalidPassword() {
    await this.passwordInput.fill(USERS.INVALID_USER.password);
  }

  async enterLockedPassword() {
    await this.passwordInput.fill(USERS.LOCKED_USER.password);
  }

  async enterValidCredentials() {
    await this.enterValidPassword();
    await this.enterValidUserName();
  }

  async enterInvalidCredentials() {
    await this.enterInvalidPassword();
    await this.enterInvalidUserName();
  }

  async enterLockedCredentials() {
    await this.enterLockedPassword();
    await this.enterLockedUserName();
  }

  async dismissErrorMessage() {
    await this.errorButton.click();
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }

  async verifyIfLogged() {
    await expect(this.page).toHaveURL(URLS.PRODUCTS_URL);
  }

  async verifyIfNotLogged() {
    await expect(this.page).not.toHaveURL(URLS.PRODUCTS_URL);
    await expect(this.page).toHaveURL(URLS.BASE_URL);
  }

  async verifyPasswordErrorMessage() {
    await expect(this.errorMessage).toHaveText(ERROR_MESSAGES.NO_PASSWORD);
  }

  async verifyUserNameErrorMessage() {
    await expect(this.errorMessage).toHaveText(ERROR_MESSAGES.NO_USERNAME);
  }

  async verifyNoUserErrorMessage() {
    await expect(this.errorMessage).toHaveText(ERROR_MESSAGES.NO_USER);
  }

  async verifyLockedErrorMessage() {
    await expect(this.errorMessage).toHaveText(ERROR_MESSAGES.LOCKED);
  }
}
