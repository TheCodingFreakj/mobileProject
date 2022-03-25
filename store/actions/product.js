export const DELETE_PRODUCT = "DELETE_PRODUCT";

export const deleteproduct = (id) => {
  return {
    type: DELETE_PRODUCT,
    id: id,
  };
};
