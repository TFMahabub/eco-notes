export const useFetch = async (url: string, condition?: object) => {
  const data = await fetch(url, condition);
  return data.json();
};
