import React from 'react';

import { ShopSearch } from '../components';
import { Recommended, Summer, Parties, Creators } from '../containers';

const Shop = () => {
  return (
    <section>
      <ShopSearch />
      <Recommended />
      <Summer />
      <Parties />
      <Creators />
    </section>
  );
}

export default Shop;