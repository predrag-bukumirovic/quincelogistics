type Props = {
  items: { title: string; text: string }[];
};

export default function Steps({ items }: Props) {
  return (
    <ol className="steps">
      {items.map((step, i) => (
        <li
          className="step"
          key={step.title}
          data-reveal
          style={{ transitionDelay: `${i * 80}ms` }}
        >
          <h3>{step.title}</h3>
          <p>{step.text}</p>
        </li>
      ))}
    </ol>
  );
}
