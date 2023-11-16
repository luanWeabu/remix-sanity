import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";
import { projectId, dataset } from "../lib/santity";
import { BannerModule, LinkInternal } from "~/types/sentity_type";

// Import các types hoặc interface cần thiết cho đối tượng link

// Xác định các loại cho đối tượng link
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
    return link.slug; // Trả về slug nếu có
  } else if ("reference" in link && link.reference._ref) {
    if ("banner" in link) {
      // Kiểm tra nếu có thuộc tính 'banner'
      // Xử lý logic từ reference nếu không có slug
      // Thay projectId và dataset bằng các giá trị thực tế của bạn
      const builder = new ImageUrlBuilder(null, { projectId, dataset });
      const imageUrl = builder.image(link.banner.asset._ref).url();

      // Trả về URL dựa trên thông tin từ reference
      return `/collections/${link.reference._ref}/${imageUrl}`;
    } else {
      // Xử lý cho trường hợp không có thuộc tính 'banner'
      return `/collections/${link.reference._ref}`; // Ví dụ
    }
  }

  return "#"; // Hoặc trả về giá trị mặc định khác tùy thuộc vào trường hợp
}
