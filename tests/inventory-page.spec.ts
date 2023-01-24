import { sortOptions } from "@consts/sort-options";
import { user } from "@consts/users";
import { test } from "@fixtures";

test.describe("Inventory page tests", () => {
	test.beforeEach(async ({ loginPage }) => {
		await loginPage.goToBaseUrl();
		await loginPage.enterCredentials(user.validUser);
		await loginPage.clickLoginButton();
	});

	test.afterAll(async ({ page }) => {
		await page.close();
	});

	test("should verify that users can add and remove products", async ({
		inventoryPage,
	}) => {
		await inventoryPage.addItemToCart();
		await inventoryPage.removeItemFromCart();
		await inventoryPage.goToCart();
		await inventoryPage.verifyIfCartIsEmpty(true);
		await inventoryPage.clickContinueShoppingButton();
		await inventoryPage.addItemToCart();
		await inventoryPage.goToCart();
		await inventoryPage.verifyIfCartIsEmpty(false);
	});

	test("should verify that products can be sorted according to name and price", async ({
		inventoryPage,
	}) => {
		await inventoryPage.chooseSortOption(sortOptions.nameDescending);
		await inventoryPage.chooseSortOption(sortOptions.nameAscending);
		await inventoryPage.chooseSortOption(sortOptions.priceAscending);
		await inventoryPage.chooseSortOption(sortOptions.priceDescending);
	});

	test("should verify that sidebar buttons work as intended", async ({
		sidebar,
		inventoryPage,
	}) => {
		await sidebar.openSidebar();
		await sidebar.clickAboutButton();
		await sidebar.verifyAboutLink();
		await inventoryPage.goToInventoryPage();
		await sidebar.openSidebar();
		await sidebar.clickResetAppStateButton();
		await sidebar.closeSidebar();
	});

	test("should verify that users can sucessfully log out", async ({
		sidebar,
		loginPage,
	}) => {
		await sidebar.openSidebar();
		await sidebar.clickLogoutButton();
		await loginPage.verifyIfLoggedIn(false);
	});
});
