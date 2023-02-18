//GET CURRENT DATE
export const getCurrentDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const day = today.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const getTotalPriceByDays = (item, start, end) => {
  const timeCount = new Date(end).getTime() - new Date(start).getTime();
  const dayCount = Math.ceil(timeCount / (1000 * 3600 * 24)) + 1;
  return parseFloat(item.discPrice * dayCount).toFixed(2);
};
