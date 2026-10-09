import Shell, { rootMetadata } from "../components/Shell";

export const metadata = rootMetadata("de");

export default function GermanLayout({ children }: LayoutProps<"/de">) {
  return <Shell lang="de">{children}</Shell>;
}
