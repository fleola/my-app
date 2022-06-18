import { useEffect, useRef, useState } from "react";

export function CarDetails({ initialData }) {
  const formRef = useRef();
  const { year, model, color } = initialData;
  const [control, setControl] = useState(true);

  const handleInputForm = (year, color, model) => {
    formRef.current.elements.color.value = color;
    formRef.current.elements.model.value = model;
    formRef.current.elements.year.value = year;
  };

  useEffect(() => {
    setControl(true);
    !control
      ? handleInputForm(year, color, model)
      : handleInputForm("", "", "");

    return setControl(false);
  }, [year, color, model]);

  //! How to reset the form ?
  //   useEffect(() => {
  //     if (isInitialMounted.current) {
  //       isInitialMounted.current = false;
  //     } else {
  //       handleInputForm("", "", "");
  //     }
  //   }, [color, year, model]);

  return (
    <form ref={formRef}>
      <input name="model" value=""></input>
      <input name="year" type="number" value=""></input>
      <input name="color" value=""></input>
    </form>
  );
}
