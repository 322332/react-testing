export function Input({ label, name, error, ...props }) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input name={name} id={name} {...props} />
      {error ? <span role="alert">{error}</span> : null}
    </>
  );
}
