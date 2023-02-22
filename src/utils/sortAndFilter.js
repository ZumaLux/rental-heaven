//Sorting data
function cmp(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
}
export function sortItems(data, sortValue) {
  if (sortValue === "default") return;
  if (sortValue.split(" ")[0].includes("ascending")) {
    return [
      data.sort(function (a, b) {
        return (
          cmp(b[sortValue.split(" ")[1]], a[sortValue.split(" ")[1]]) ||
          cmp(b[sortValue.split(" ")[2]], a[sortValue.split(" ")[2]])
        );
      }),
    ];
  } else if (sortValue.split(" ")[0].includes("descending")) {
    return [
      data.sort(function (a, b) {
        return (
          cmp(a[sortValue.split(" ")[1]], b[sortValue.split(" ")[1]]) ||
          cmp(a[sortValue.split(" ")[2]], b[sortValue.split(" ")[2]])
        );
      }),
    ];
  }
}

//Searching data
export function searchItems(data, word) {
  const excludedColumns = ["id", "img"];
  const _word = word.toLowerCase().trim();
  return data.filter((item) => {
    return Object.keys(item).some((key) =>
      excludedColumns.includes(key) ? false : item[key].toString().toLowerCase().includes(_word)
    );
  });
}
