import { useLoaderData } from "@remix-run/react";
import Collection from "~/components/collections";
import { collectionQuery, collectionQueryDetail } from "~/queries/collection";
import { getClient } from "~/lib/santity";

interface LoaderData {
  collections: any[];
  collectionDetail: any[];
}

export const loader = async () => {
  const collections: any = await getClient().fetch(collectionQuery);
  const collectionDetail: any = await getClient().fetch(collectionQueryDetail);

  return { collections, collectionDetail };
};

export default function Index() {
  const { collections, collectionDetail } = useLoaderData<LoaderData>();

  return (
    <Collection collections={collections} collectionDetail={collectionDetail} />
  );
}
