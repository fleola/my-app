import { useEffect, useRef } from "react";

export function useCarDetails({ initialData }) {
  const formRef = useRef();
  const { year, model, color } = initialData;

  const handleResetForm = () => {
    formRef.current.reset();
  };

  useEffect(() => {
    handleResetForm();
  }, [year, color, model]);

  return {
    formRef: formRef,
    model: model,
    year: year,
    color: color,
  };
}
