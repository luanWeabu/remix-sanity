import { useLoaderData } from "@remix-run/react";
import Collection from "~/components/collections";
import { collectionQuery } from "~/queries/collection";
import { getClient } from "~/lib/santity";

import { settingFooterQuery } from "~/queries/footer";
import { Layout } from "~/global/layout";
import { Footer } from "~/components/Footer";

interface LoaderData {
  collections: any[];
  collectionDetail: any[];
  settingFooter: any[];
}

export const loader = async () => {
  const collections: any = await getClient().fetch(collectionQuery);

  const settingFooter: any = await getClient().fetch(settingFooterQuery);
  return { collections, settingFooter };
};

export default function Index() {
  const { collections, settingFooter } = useLoaderData<LoaderData>();

  return (
    <div>
      <div>
        <Collection collections={collections} />
        <Layout footer={settingFooter} />
      </div>
    </div>
  );
}
