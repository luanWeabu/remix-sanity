import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";
import { projectId, dataset } from "../lib/santity";
import { BannerModule, LinkInternal } from "~/types/sentity_type";

interface LinkWithSlug {
  slug: string;
}

interface LinkWithReference {
  reference: {
    _ref: string;
  };
  banner: {
    asset: {
      _ref: string;
    };
  };
}

type LinkType = LinkWithSlug | LinkWithReference | LinkInternal | BannerModule;

export default function getLinkURLCollections(link: LinkType): string {
  if ("slug" in link && link.slug) {
    return link.slug;
  } else if ("reference" in link && link.reference._ref) {
    if ("banner" in link) {
      const builder = new ImageUrlBuilder(null, { projectId, dataset });
      const imageUrl = builder.image(link.banner.asset._ref).url();
      return `/collections/${link.reference._ref}/${imageUrl}`;
    } else {
      return `/collections/${link.reference._ref}`;
    }
  }

  return "#";
}
