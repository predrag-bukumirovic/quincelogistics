import Shell, { rootMetadata } from "../components/Shell";

export const metadata = rootMetadata("sr");

export default function SerbianLayout({ children }: LayoutProps<"/">) {
  return <Shell lang="sr">{children}</Shell>;
}
