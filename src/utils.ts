export const getNewId = (arr: any) => {
  let idArr = arr.filter((item: any) => {
    return item.id !== undefined && item.id !== null && !isNaN(item.id);
  });

  idArr = idArr.map((item: any) => {
    return item.id;
  });

  if (!idArr.length) {
    return 0;
  }

  return Math.max(...idArr) + 1;
};

export const addSpacesInNumber = (number: string | number) => {
  const trimmedNumber = number.toString().replace(/ |\D/g, "");
  console.log(trimmedNumber);
  return trimmedNumber.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, "$1 ");
};
