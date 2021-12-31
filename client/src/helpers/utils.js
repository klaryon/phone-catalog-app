const formatterNumber = (number) => {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "EUR",
  }).format(number);
};

export default formatterNumber;
