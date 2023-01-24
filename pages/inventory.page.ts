import { expect, Locator, Page } from "@playwright/test";
import { SortOption } from "@interfaces";
import { urls } from "@consts/urls";

export class InventoryPage {
	readonly page: Page;
	readonly sortButton: Locator;
	readonly cartButton: Locator;
	readonly addToCartButton: Locator;
	readonly removeFromCartButton: Locator;
	readonly inventoryHeaderLabel: Locator;
	readonly cartSummaryItem: Locator;
	readonly continueShoppingButton: Locator;

	constructor(page: Page) {
		this.page = page;
		this.sortButton = page.getByTestId("product_sort_container");
		this.cartButton = page.locator("#shopping_cart_container a");
		this.addToCartButton = page.getByText("Add to cart");
		this.removeFromCartButton = page.getByText("Remove");
		this.inventoryHeaderLabel = page.getByText("Products");
		this.cartSummaryItem = page.locator(".cart_item");
		this.continueShoppingButton = page.getByText("Continue Shopping");
	}

	async chooseSortOption(sort: SortOption) {
		await this.sortButton.selectOption(sort.option);
	}

	async addItemToCart() {
		await this.addToCartButton.first().click();
	}

	async removeItemFromCart() {
		await this.removeFromCartButton.last().click();
	}

	async goToCart() {
		await this.cartButton.click();
	}

	async goToInventoryPage() {
		await this.page.goto(urls.productUrl);
	}

	async verifyIfCartIsEmpty(isEmpty = false) {
		if (isEmpty) {
			await expect(this.cartSummaryItem).toBeHidden();
		} else {
			await expect(this.cartSummaryItem).toBeVisible();
		}
	}

	async clickContinueShoppingButton() {
		await this.continueShoppingButton.click();
	}
}
