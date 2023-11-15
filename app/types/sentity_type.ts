export type Reference = {
  _ref: string;
  _type: string;
  _weak: boolean;
};

export type LinkInternal = {
  _key: string;
  _type: string;
  reference: Reference;
  title: string;
};

export type BannerModule = {
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
};
