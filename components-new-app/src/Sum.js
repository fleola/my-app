export function Sum({ numbers = [3, 1, 2, 5, 4] }) {
  const sum = numbers.reduce((prev, current) => prev + current);
  return (
    <div>
      <h1>The Sum is: {sum}</h1>
    </div>
  );
}
