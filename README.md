# Chimoney Challenge
This is a [React](https://reactjs.org/) project bootstrapped with [`create-react-app`](https://reactjs.org/docs/create-a-new-react-app.html).

## Getting Started

First, install project dependencies: 

```bash
npm install
# or
yarn
```

Then, run the development server:

```bash
npm run start
# or
yarn start
```

The project would be available at [http://localhost:3000](http://localhost:3000/) 

#### Features implemented
- Product List: A page to show a list of products [Products](http://localhost:3000/) 
- Cart: A page that contains items added to [Cart](http://localhost:3000/cart/) 


#### Approach
Initially, gift cards data was available from the [Chimoney API](https://chimoney.readme.io/reference/get_v0-2-info-assets), but was later unavailable, so I had to quickly switch to the Ecommerce data available, which meant there was not enough time to implement the Product Details page, so I stuck to just building a card for each product, with the name , price and "Add to cart button". I also had to skip making the pages responsive as there was no time

#### Performance techniques used
- I made the performance a bit better by implementing Code splitting to enable users load only the bundles they need at a time
- I also implemented a Skeleton loader for the products page, when attempting to fetch products. This shows users a skeleton of the products, while they are waiting for the products to competely load
- Caching with local storage was enabled for the Cart

#### How you could improve the performance of the app
- The products page could be paginated to avoid fetching all data at once as the number of products grows, the amount of time to load also increases