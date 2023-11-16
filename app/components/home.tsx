import { Link } from "@remix-run/react";
import type { SanityDocument } from "@sanity/client";

export default function Collection({
  collections,
}: {
  collections: SanityDocument[];
}) {
  return (
    <main className="container mx-auto grid grid-cols-1 divide-y divide-blue-100">
      {collections?.length > 0 ? (
        collections.map((collection: SanityDocument) => (
          <Link
            key={collection._id}
            to={collection.slug.current}
            className="p-4 hover:bg-blue-50"
          >
            <h2>{collection.title}</h2>
          </Link>
        ))
      ) : (
        <div className="p-4 text-red-500">No Collection found</div>
      )}
    </main>
  );
}
