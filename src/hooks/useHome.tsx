import React, { useCallback } from 'react';

function useHome() {
  const handleChange = useCallback((e) => {
    const { value } = e.target;
    console.log(value);
  }, []);

  return {
    handleChange,
  };
}

export default useHome;
