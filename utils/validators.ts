export const nameRegex =
  /^[A-Za-záéíóúÁÉÍÓÚñÑ\s-]{2,50}$/;

export const onlyNameChars = (value: string) =>
  value.replace(/[^A-Za-záéíóúÁÉÍÓÚñÑ\s-]/g, "");