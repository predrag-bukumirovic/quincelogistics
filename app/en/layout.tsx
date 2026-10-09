import Shell, { rootMetadata } from "../components/Shell";

export const metadata = rootMetadata("en");

export default function EnglishLayout({ children }: LayoutProps<"/en">) {
  return <Shell lang="en">{children}</Shell>;
}
