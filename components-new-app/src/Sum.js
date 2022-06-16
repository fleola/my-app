export function Sum({ numbers }) {
  const sum = numbers.reduce((prev, current) => prev + current);
  return (
    <div>
      <h1>The Sum is: {sum}</h1>
    </div>
  );
}
