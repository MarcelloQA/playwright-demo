/* eslint-disable @typescript-eslint/no-non-null-assertion */

interface User {
  username: string;
  password: string;
}

export const USERS: {
  VALID_USER: User;
  INVALID_USER: User;
  LOCKED_USER: User;
  PERFORMANCE_GLITCH_USER: User;
} = {
  VALID_USER: {
    username: process.env.USERNAME!,
    password: process.env.PASSWORD!,
  },
  INVALID_USER: {
    username: "abc",
    password: "abc",
  },
  LOCKED_USER: {
    username: process.env.LOCKED_USER!,
    password: process.env.PASSWORD!,
  },
  PERFORMANCE_GLITCH_USER: {
    username: process.env.PERFORMANCE_GLITCH_USER!,
    password: process.env.PASSWORD!,
  },
};

export const URLS = {
  BASE_URL: "/",
  PRODUCTS_URL: "/inventory.html",
};

export const ERROR_MESSAGES = {
  NO_USERNAME: "Epic sadface: Username is required",
  NO_PASSWORD: "Epic sadface: Password is required",
  NO_USER:
    "Epic sadface: Username and password do not match any user in this service",
  LOCKED: "Epic sadface: Sorry, this user has been locked out.",
};
