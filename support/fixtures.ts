import { test as base } from "@playwright/test";
import { Login } from "../pages/login.page";
import { Shared } from "../pages/shared.page";

type Fixtures = {
  login: Login;
  shared: Shared;
};

export const test = base.extend<Fixtures>({
  login: async ({ page }, use) => {
    await use(new Login(page));
  },
  shared: async ({ page }, use) => {
    await use(new Shared(page));
  },
});
export { expect } from "@playwright/test";
