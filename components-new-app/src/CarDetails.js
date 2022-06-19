import { useCarDetails } from "./useCarDetails";

export function CarDetails({ initialData }) {
  const { color, model, year, formRef } = useCarDetails({ initialData });

  return (
    <form ref={formRef}>
      <input name="model" defaultValue={model}></input>
      <input name="year" type="number" defaultValue={year}></input>
      <input name="color" defaultValue={color}></input>
    </form>
  );
}
