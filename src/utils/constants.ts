import { faker } from "@faker-js/faker";

export const ROUTES = {
  PRODUCTS: "/products",
  PRODUCT_DETAILS: "/product/:id",
  CART: "/cart",
  CHECKOUT: "/checkout",
  HOME:'/'
};

export const DummyBillingData = [
  {
    name: faker.name.fullName(),
    address: faker.address.streetAddress(),
    location: "Home",
    isDefault: true,
    phone: faker.phone.imei(),
  },
  {
    name: faker.name.fullName(),
    address: faker.address.streetAddress(),
    location: "Office",
    isDefault: false,
    phone: faker.phone.imei(),
  },
  {
    name: faker.name.fullName(),
    address: faker.address.streetAddress(),
    location: "Office",
    isDefault: false,
    phone: faker.phone.imei(),
  },
  {
    name: faker.name.fullName(),
    address: faker.address.streetAddress(),
    location: "Office",
    isDefault: false,
    phone: faker.phone.imei(),
  },
];
