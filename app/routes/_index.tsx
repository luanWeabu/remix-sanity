import { useLoaderData } from "@remix-run/react";
import Collection from "~/components/collections";
import { collectionQuery, collectionQueryInHomePage } from "~/lib/query";
import { getClient } from "~/lib/santity";

interface LoaderData {
  collections: any[];
}

export const loader = async () => {
  const collections: any = await getClient().fetch(collectionQuery);

  return { collections };
};

export default function Index() {
  const { collections } = useLoaderData<LoaderData>();

  return <Collection collections={collections} />;
}
