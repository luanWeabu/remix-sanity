export interface Color {
  _key?: string;
  _type?: string;
  alpha?: number;
  hex?: string;
  hsl?: {
    _type?: string;
    a?: number;
    h?: number;
    l?: number;
    s?: number;
  };
  hsv?: {
    _type?: string;
    a?: number;
    h?: number;
    s?: number;
    v?: number;
  };
  rgb?: {
    _type?: string;
    a?: number;
    b?: number;
    g?: number;
    r?: number;
  };
}

export interface Link {
  _key?: string;
  _type?: string;
  newWindow?: boolean;
  slug?: string;
  title?: string;
  reference?: {
    _ref?: string;
    _type?: string;
    _weak?: boolean;
  };
}

export interface CountdownTimer {
  background?: Color[];
  buttonBackground?: Color[];
  buttonText?: string;
  buttonTextColor?: Color[];
  end?: string;
  links?: Link[];
  showButton?: boolean;
  start?: string;
  status?: boolean;
  subtitle?: string;
  textColor?: Color[];
  title?: string;
  // ... (các trường thông tin khác)
}

export interface FooterLinkSection {
  _key?: string;
  _type?: string;
  mainLink?: Link[];
  subLink?: Link[];
}

export interface Footer {
  columnLinks?: FooterLinkSection[];
  // ... (các trường thông tin khác)
}

export interface HeaderLink {
  _key?: string;
  _type?: string;
  newWindow?: boolean;
  slug?: string;
  title?: string;
}

export interface Header {
  logo?: {
    _type?: string;
    asset?: {
      _ref?: string;
      _type?: string;
    };
  };
  logoWhite?: {
    _type?: string;
    asset?: {
      _ref?: string;
      _type?: string;
    };
  };
  topLinks?: HeaderLink[];
  // ... (các trường thông tin khác)
}

export interface Newsletter {
  background?: Color[];
  banner?: {
    _type?: string;
    asset?: {
      _ref?: string;
      _type?: string;
    };
  };
  desc?: string;
  heading?: string;
  showPopup?: boolean;
  textColor?: Color[];
  // ... (các trường thông tin khác)
}

export interface Other {
  address1?: string;
  address2?: string;
  email?: string;
  paymentImage?: {
    _type?: string;
    asset?: {
      _ref?: string;
      _type?: string;
    };
  };
  phoneNumber?: string;
  shippingText?: string;
  storeDomain?: string;
  storeName?: string;
  // ... (các trường thông tin khác)
}

export interface Seo {
  description?: string;
  title?: string;
}

export interface Social {
  facebook?: string;
  instagram?: string;
  pinterest?: string;
  twitter?: string;
  youtube?: string;
}

export interface Settings {
  _createdAt?: string;
  _id?: string;
  _rev?: string;
  _type?: string;
  _updatedAt?: string;
  countdownTimer?: CountdownTimer;
  footer?: Footer;
  header?: Header;
  newsletter?: Newsletter;
  other?: Other;
  seo?: Seo;
  social?: Social;
}
