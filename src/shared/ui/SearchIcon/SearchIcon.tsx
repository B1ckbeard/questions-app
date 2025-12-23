import { memo } from "react";
import { icons } from "@/shared/assets";

const SearchIcon = memo(() => (
  <img
    src={icons.searchIcon}
    alt="Иконка поиска"
    width="20"
    height="20"
    loading="lazy"
  />
));

export default SearchIcon;
