import { useState, useCallback } from "react";

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const fromStorage = localStorage.getItem(key);
      return fromStorage ? JSON.parse(fromStorage) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const updateValue = useCallback(
    (newValue) => {
      const val = typeof newValue === "function" ? newValue(value) : newValue;
      setValue(val);
      localStorage.setItem(key, JSON.stringify(val));
    },
    [key, value]
  );

  return [value, updateValue];
}
