import React, { useState } from "react";
import { List } from "react-native-paper";

import Header from "../components/common/Header";
import GenderButtonGroup from "../components/GenderButtonGroup";
import ProductSearchCategory from "../components/ProductSearchCategory";
import ProductSearchType from "../components/ProductSearchType";
import useProductStore from "../hooks/useProductStore";
import { Gender } from "../utils/data";

export default function SearchScreen() {
  const [gender, setGender] = useState<Gender>("Women");
  const categories = useProductStore(state => state.categories);

  return (
    <React.Fragment>
      <Header
        title="Search"
        accessibilityLabel="You are at the search screen"
        accessibilityHint="Select your desired category on this page"
      />
      <GenderButtonGroup gender={gender} onGenderChange={setGender} />
      <List.AccordionGroup>
        {categories.map((category, idx) => (
          <ProductSearchCategory key={idx} id={idx} category={category.name}>
            {category.types.map((type, typeIdx) => (
              <ProductSearchType
                key={typeIdx}
                gender={gender}
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
