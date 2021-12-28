import React from "react";
import { Select } from "@chakra-ui/react";

const LangSwitcher = () => {
  return (
    <Select defaultValue="eng" borderRadius="4px">
      <option value="eng">Eng</option>
      <option value="ger">Ger</option>
    </Select>
  );
};

export default LangSwitcher;
