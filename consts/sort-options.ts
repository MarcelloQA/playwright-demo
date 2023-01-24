import { SortOption } from "@interfaces";

export const sortOptions: {
	nameAscending: SortOption;
	nameDescending: SortOption;
	priceAscending: SortOption;
	priceDescending: SortOption;
} = {
	nameAscending: { option: "az" },
	nameDescending: { option: "za" },
	priceAscending: { option: "hilo" },
	priceDescending: { option: "lohi" },
};
