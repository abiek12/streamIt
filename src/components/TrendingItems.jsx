import { TRENDING_DUMMY } from "../utils/dummyData";
import { CDN_URL } from "../utils/constants";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const TrendingItems = () => {
  const [trendingItems, setTrendingItems] = useState(TRENDING_DUMMY);
  const { t } = useTranslation();

  return (
    <div className="trending-now">
      <h1 className="text-2xl font-semibold">
        {t("home.movieLists.trending")}
      </h1>
      <ul className="flex gap-2 w-full overflow-x-auto overflow-y-hidden no-scrollbar px-1">
        {trendingItems.map((item, idx) => (
          <li
            key={idx}
            className="relative px-5 py-6 cursor-pointer transition-transform ease-in-out duration-300 hover:scale-105"
          >
            <div className="w-44 h-64 rounded-lg overflow-hidden">
              <img
                src={`${CDN_URL}/${item.url}`}
                alt="Trending Movie Card"
                className="w-full h-full object-cover"
              />
              <span className="absolute inset-0 text-8xl font-extrabold text-black [text-shadow:0_1px_0_rgb(0_0_0)] [-webkit-text-stroke:2px_#D3D3D3] -left-1 top-40">
                {item.position}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingItems;
