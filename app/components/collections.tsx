import { Link } from "@remix-run/react";
import imageUrlBuilder from "@sanity/image-url";
import { BannerGrid, BannerModule, ViewAllLink } from "~/types/sentity_type";
import { projectId, dataset } from "../lib/santity";

interface CollectionProps {
  collections: BannerGrid[];
  collectionDetail: Store[];
}

export default function Collection({
  collections,
  collectionDetail,
}: CollectionProps) {
  const builder = imageUrlBuilder({ projectId, dataset });

  const filterCollections: BannerGrid[] = [collections[0]];
  const filterBannerItems: BannerModule[] = filterCollections[0].bannerItems;
  const itemBannerCollection: BannerGrid = filterCollections[0];
  const filterViewAllLink: ViewAllLink[] = [
    itemBannerCollection.viewAllLink[0],
  ];

  return (
    <main className="container mx-auto">
      <div className="flex justify-between p-4">
        {itemBannerCollection.bannerTitle && (
          <>
            <div>
              <h2 className="text-2xl font-bold">
                {itemBannerCollection.bannerTitle}
              </h2>
            </div>
            <div className="flex underline-offset-2 items-center">
              <span className="underline underline-offset-1 font-bold">
                <a href={filterViewAllLink[0].slug}>
                  {filterViewAllLink[0].title}
                </a>
              </span>
            </div>
          </>
        )}
      </div>

      <section className="container mx-auto grid grid-cols-4 divide-y divide-blue-100 ">
        {filterBannerItems.length > 0 ? (
          filterBannerItems.map((collection: BannerModule) => {
            const titleCollectionLinks = collection.links[0].title
              .replace(/\s/g, "")
              .toLowerCase();

            const allowedTitles: Record<string, string> = {
              forkid: "accessories",
              sportware: "sportswear",
            };

            const filteredTitle =
              allowedTitles[titleCollectionLinks] || titleCollectionLinks;

            return (
              <Link
                key={collection._key}
                to={`${filterViewAllLink[0].slug}/${filteredTitle}`}
                className="m-4 hover:bg-blue-50 relative"
              >
                <p className="absolute top-[45%] left-[40%] text-slate-50">
                  {collection.caption}
                </p>
                <img
                  src={builder
                    .image(collection.banner.asset._ref)
                    .width(300)
                    .height(400)
                    .quality(80)
                    .url()}
                  alt={`Banner for ${collection.caption}`}
                  height={800}
                  width={800}
                />
              </Link>
            );
          })
        ) : (
          <div className="p-4 text-red-500">No Collection found</div>
        )}
      </section>
    </main>
  );
}
