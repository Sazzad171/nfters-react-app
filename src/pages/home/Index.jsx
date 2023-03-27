import React from 'react';

// section components
import Banner from "./banner/Banner";
import Features from "./features/Features";
import TopCollections from "./top-collections/TopCollections";
import CollectionFeaturedNfts from "./collection-featured-nfts/CollectionFeaturedNfts";
import CreateSell from "./create-sell/CreateSell";
import DiscoverMore from "./discover-more/DiscoverMore";

export default function Index() {
  return (
    <>
      <Banner />
      <Features />
      <TopCollections />
      <CollectionFeaturedNfts />
      <CreateSell />
      <DiscoverMore />
    </>
  )
}
