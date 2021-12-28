import React from "react";
import { Select } from "@chakra-ui/react";
import { useRouter } from "next/router";

const languages = [
  {
    code: "en",
    short: "Eng",
  },
  {
    code: "de",
    short: "Ger",
  },
];

const LangSwitcher = () => {
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const locale = e.target.value;

    router.push("/", "/", { locale });
  };

  return (
    <Select
      defaultValue={router.locale}
      borderRadius="4px"
      onChange={handleChange}
    >
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.short}
        </option>
      ))}
    </Select>
  );
};

export default LangSwitcher;
