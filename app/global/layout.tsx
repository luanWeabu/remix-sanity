import { Footer } from "~/components/Footer";

export interface ILayoutProps {
  footer: any;
}

export function Layout({ footer }: ILayoutProps) {
  return (
    <div>
      <Footer footerQuery={footer} />
    </div>
  );
}
