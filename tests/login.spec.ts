import { test } from "@playwright/test";
import { Login } from "../pages/login.page";

test.describe("Login page tests", () => {
  test.beforeEach(async ({ page }) => {
    const login = new Login(page);
    await login.goToBaseUrl();
  });

  test("should verify that users can log in to the app using valid credentials", async ({
    page,
  }) => {
    const login = new Login(page);
    await login.enterValidCredentials();
    await login.clickLoginButton();
    await login.verifyIfLogged();
  });
});
