import Layout from "../components/Layouts/Layout ";
import BokaTransformation from "../components/SectionsPages/bokaTransformation";
import Companies from "../components/SectionsPages/companies";
import CustomersSays from "../components/SectionsPages/customersSays";
import ExploringBusinesses from "../components/SectionsPages/exploringBusinesses";
import HeroSections from "../components/SectionsPages/heroSections";
import PopularCategory from "../components/SectionsPages/popularCategory";
import Services from "../components/SectionsPages/services";
import SpecialOffer from "../components/SectionsPages/specialOffer";
import React from "react";
import CardItem from "../components/SectionsPages/cardItem";
import Brands from "../components/SectionsPages/brands";
import MoreBusiness from "../components/SectionsPages/moreBusiness";
import FeaturedBusinesses from "../components/SectionsPages/featuredBusinesses";
import PopularBusinesses from "../components/SectionsPages/popularBusinesses";
export default function Home({ businesses, brands, bokaTransformation }) {
  return (
    <Layout>
      <HeroSections />
      <Services />
      <SpecialOffer>
        {businesses.data.map((businesses) =>
          React.Children.toArray(<CardItem businesses={businesses} />)
        )}
      </SpecialOffer>
      
      <PopularBusinesses>
        {businesses.data.map((businesses) =>
          React.Children.toArray(<CardItem businesses={businesses} />)
        )}
      </PopularBusinesses>
      
      <FeaturedBusinesses>
        {businesses.data.map((businesses) =>
          React.Children.toArray(<CardItem businesses={businesses} />)
        )}
      </FeaturedBusinesses>
      <BokaTransformation data={bokaTransformation} />
      <PopularCategory />
      <CustomersSays />
      <Companies>
        {brands.data.map((brands) =>
          React.Children.toArray(<Brands brands={brands} />)
        )}
      </Companies>
      <ExploringBusinesses>
        {businesses.data.map((businesses) =>
          React.Children.toArray(<CardItem businesses={businesses} />)
        )}
      </ExploringBusinesses>
      
      <MoreBusiness>
        {businesses.data.map((businesses) =>
          React.Children.toArray(<CardItem businesses={businesses} />)
        )}
      </MoreBusiness>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const businesses = await fetch(
    "https://api.dev.boka.co/business-management/businesses"
  );
  const bokaTransformation = await fetch(
    "https://api.dev.boka.co/content-management/case-studies"
  );
  const brands = await fetch(
    "https://api.dev.boka.co/content-management/brands"
  );
  const businessesData = await businesses.json();
  const brandsData = await brands.json();
  const bokaTransformationData = await bokaTransformation.json();
  return {
    props: {
      businesses: businessesData,
      brands: brandsData,
      bokaTransformation: bokaTransformationData,
    },
  };
};
