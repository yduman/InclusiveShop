import React from "react";
import { List } from "react-native-paper";

import Header from "../components/common/Header";
import ProductSearchCategory from "../components/ProductSearchCategory";
import ProductSearchType from "../components/ProductSearchType";
import useProductStore from "../hooks/useProductStore";

export default function SearchScreen() {
  const categories = useProductStore(state => state.categories);

  return (
    <React.Fragment>
      <Header title="Search" />
      <List.AccordionGroup>
        {categories.map((category, idx) => (
          <ProductSearchCategory key={idx} id={idx} category={category.name}>
            {category.types.map((type, typeIdx) => (
              <ProductSearchType
                key={typeIdx}
                displayName={type.namePlural}
                productType={type.name}
              />
            ))}
          </ProductSearchCategory>
        ))}
      </List.AccordionGroup>
    </React.Fragment>
  );
}
