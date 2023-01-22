import { test } from "../support/fixtures";

test.describe("Login page tests", () => {
  test.beforeEach(async ({ login }) => {
    await login.goToBaseUrl();
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test("should verify that users can log in to the app using valid credentials", async ({
    login,
  }) => {
    await login.enterValidCredentials();
    await login.clickLoginButton();
    await login.verifyIfLogged();
  });

  test("should verify that users cannot log in to the app using invalid credentials", async ({
    login,
  }) => {
    await login.clickLoginButton();
    await login.verifyUserNameErrorMessage();
    await login.dismissErrorMessage();
    await login.enterInvalidCredentials();
    await login.clickLoginButton();
    await login.verifyNoUserErrorMessage();
    await login.verifyIfNotLogged();
  });

  test("should test that locked users cannot log in to the app", async ({
    login,
  }) => {
    await login.enterLockedCredentials();
    await login.clickLoginButton();
    await login.verifyLockedErrorMessage();
    await login.verifyIfNotLogged();
  });
});
