export const handleInputChange = (e, setFormValues) => {
  const { id: key, value } = e.target;

  setFormValues((f) => ({ ...f, [key]: value }));
};
