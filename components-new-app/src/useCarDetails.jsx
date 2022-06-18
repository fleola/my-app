export function useCarDetails({ initialData }) {
  const formRef = useRef();
  const { year, model, color } = initialData;

  const handleInputForm = (year, color, model) => {
    formRef.current.elements.color.value = color;
    formRef.current.elements.model.value = model;
    formRef.current.elements.year.value = year;
  };

  useEffect(() => {
    handleInputForm(year, color, model);
  }, [year, color, model]);

  //! How to reset the form ?
  //   useEffect(() => {
  //     if (isInitialMounted.current) {
  //       isInitialMounted.current = false;
  //     } else {
  //       handleInputForm("", "", "");
  //     }
  //   }, [color, year, model]);
}
