export interface Reference {
  _ref: string;
  _type: string;
  _weak?: boolean;
}

export interface LinkInternal {
  _key: string;
  _type: string;
  reference: Reference;
  title: string;
}

export interface BannerModule {
  _key: string;
  _type: string;
  banner: {
    _type: string;
    asset: Reference;
  };
  caption: string;
  desktopRatio: string;
  links: LinkInternal[];
  mobileRatio: string;
  showButton: boolean;
  textPosition: string;
}

export interface Banner {
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
}

export interface Link {
  _key: string;
  _type: string;
  reference: Reference;
  title: string;
}

export interface BannerItem {
  _key: string;
  _type: string;
  banner: Banner;
  caption: string;
  desktopRatio: string;
  links: Link[];
  mobileRatio: string;
  showButton: boolean;
  textPosition: string;
}

export interface ViewAllLink {
  _key: string;
  _type: string;
  newWindow: boolean;
  slug: string;
  title: string;
}

export interface BannerGrid {
  _key: string;
  _type: string;
  bannerItems: BannerItem[];
  bannerTitle: string;
  fullWidth: boolean;
  itemsPerRow: number;
  itemsPerRowMobile: number;
  itemsPerRowTablet: number;
  scrollMobile: boolean;
  scrollToLoad: boolean;
  viewAllLink: ViewAllLink[];
}
