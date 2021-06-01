import React from "react";
import { HStack } from "native-base";

import { Gender } from "../../utils/data";
import { CenterText, GenderButton } from "../styled";

interface Props {
  gender: Gender;
  onGenderChange: React.Dispatch<React.SetStateAction<Gender>>;
}

export default function GenderButtonGroup({ gender, onGenderChange }: Props) {
  return (
    <HStack w="100%">
      <GenderButton
        accessibilityLabel="Products for Women"
        accessibilityHint="Filters all products that are for women"
        accessibilityRole="button"
        accessibilityState={{ selected: gender === "Women" }}
        isActive={gender === "Women"}
        onPress={() => onGenderChange("Women")}>
        <CenterText>Women</CenterText>
      </GenderButton>
      <GenderButton
        accessibilityLabel="Products for Men"
        accessibilityHint="Filters all products that are for men"
        accessibilityRole="button"
        accessibilityState={{ selected: gender === "Men" }}
        isActive={gender === "Men"}
        onPress={() => onGenderChange("Men")}>
        <CenterText>Men</CenterText>
      </GenderButton>
    </HStack>
  );
}
