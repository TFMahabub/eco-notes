import { useEffect, useState } from "react";

const getSavedValue = (key: any, initialValue: any) => {
  const savedValueStringify = localStorage.getItem(key);
  const savedValue = JSON.parse(savedValueStringify!);

  if (savedValue) return savedValue;
  if (initialValue instanceof Function) return initialValue();
  return initialValue;
};

export const useLocalStorage = (key: string, initialValue: any) => {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};
