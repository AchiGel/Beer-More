import beerData from "../beersNames.json";
import BeerCard from "../components/BeerCard";
import { RightSection } from "./Page_one";

export default function Page_two() {
  return (
    <RightSection>
      {beerData
        .filter((el) => el.id > 8)
        .map((item) => (
          <BeerCard
            key={item.id}
            title={item.title}
            subtitle={item.subtitle}
            id={item.id}
            icon={item.icon}
            flag={item.flag}
            alcohol={item.alcohol}
            filtered={item.filtered}
            price={item.price}
            discount={item.discount}
          />
        ))}
    </RightSection>
  );
}
