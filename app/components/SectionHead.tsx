import type { ReactNode } from "react";

type Props = {
  label: string;
  title: ReactNode;
  lead?: ReactNode;
};

export default function SectionHead({ label, title, lead }: Props) {
  return (
    <div className="section-head" data-reveal>
      <p className="label">
        {label}
      </p>
      <div>
        <h2 className="title">{title}</h2>
        {lead && <p className="lead">{lead}</p>}
      </div>
    </div>
  );
}
