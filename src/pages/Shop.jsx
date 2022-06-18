import React from 'react';

import { ShopSearch, LocationWidget } from '../components';
import { Recommended, Summer, Parties, Creators } from '../containers';

const Shop = () => {
  return (
    <section>
      <ShopSearch />
      <Recommended />
      <Summer />
      <Parties />
      <Creators />
      <LocationWidget />
    </section>
  );
}

export default Shop;