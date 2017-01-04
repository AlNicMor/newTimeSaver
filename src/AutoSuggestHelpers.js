export const getSuggestions = (searchString, keyToSearch, dataArray) => {
  const inputLength = searchString.length;

  return inputLength === 0 ? [] : dataArray.filter(isSearched(searchString.trim(), keyToSearch));
};

const isSearched = (query, key) => (item) =>
    !query || item[key].toLowerCase().includes(query.toLowerCase());

