interface Color {
  _key: string;
  _type: string;
  alpha: number;
  hex: string;
  hsl: {
    _type: string;
    a: number;
    h: number;
    l: number;
    s: number;
  };
  hsv: {
    _type: string;
    a: number;
    h: number;
    s: number;
    v: number;
  };
  rgb: {
    _type: string;
    a: number;
    b: number;
    g: number;
    r: number;
  };
}

interface LinkInternal {
  _key: string;
  _type: string;
  reference: {
    _ref: string;
    _type: string;
    _weak: boolean;
  };
  title: string;
}

interface Banner {
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
}

interface ModuleBanner {
  _key: string;
  _type: string;
  banner: Banner;
  buttonStyle: string;
  buttonText: string;
  links: LinkInternal[];
  maxwidthContent: string;
  mobileRatio: string;
  showButton: boolean;
  text: string;
  textPosition: string;
  textColor: Color[];
  title: string;
  titleLine2: string;
}

interface BannerSlider {
  _key: string;
  _type: string;
  autoPlay: boolean;
  banners: ModuleBanner[];
  fullWidth: boolean;
  itemsPerSlider: number;
  loop: boolean;
  margin: string;
}

interface Store {
  createdAt: string;
  descriptionHtml: string;
  gid: string;
  id: number;
  imageUrl: string;
  isDeleted: boolean;
  slug: {
    _type: string;
    current: string;
  };
  sortOrder: string;
  title: string;
}

interface Collection {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  modules: BannerSlider[];
  store: Store;
}
