// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const mutateOption = (data: any) => {
  return {
    optimisticData: data,
    rollbackOnError: true,
    populateCache: true,
    revalidate: false,
  };
};
