import { Link } from "@remix-run/react";
import imageUrlBuilder from "@sanity/image-url";
import { BannerModule, LinkInternal } from "~/types/sentity_type";
import { projectId, dataset } from "../lib/santity";

export default function Collection({
  collections,
}: {
  collections: BannerModule[];
}) {
  console.log(collections);

  const builder = imageUrlBuilder({ projectId, dataset });

  return (
    <main className="container mx-auto">
      <div className="flex justify-between p-4">
        <div>
          <h2 className="text-2xl font-bold"> Top Collections</h2>
        </div>
        <div className="flex underline-offset-2 items-center">
          <span className="underline underline-offset-1 font-bold">
            View All{" "}
          </span>
        </div>
      </div>
      <section className="container mx-auto grid grid-cols-4 divide-y divide-blue-100 ">
        {collections?.length > 0 ? (
          collections.map((collection) => (
            <Link
              key={collection._key}
              to={collection._key}
              className="m-4 hover:bg-blue-50 relative"
            >
              <p className="absolute top-1/2 left-[40%] text-slate-50">
                {collection.caption}
              </p>
              <img
                src={builder
                  .image(collection.banner.asset._ref)
                  .width(300)
                  .height(400)
                  .quality(80)
                  .url()} // Display banner image
                alt={`Banner for ${collection.caption}`}
                height={800}
                width={800}
              />
            </Link>
          ))
        ) : (
          <div className="p-4 text-red-500">No Collection found</div>
        )}
      </section>
    </main>
  );
}
