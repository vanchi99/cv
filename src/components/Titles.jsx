export function Subtitle({ title }) {
  return <h5 className="subtitle mt-3">{title}</h5>;
}

export function Title({ title }) {
  return (
    <h3 className="title mt-3">
      <strong>{title}</strong>
    </h3>
  );
}
