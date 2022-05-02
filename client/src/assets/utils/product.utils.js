export const getIndividualCategories = (product) => {
  const typeArray = product.map((item) => item.type.map((cat) => cat));
  var newArray = typeArray.join(",").split(",");
  return Array.from(new Set(newArray));
};

export const setActiveClassToSort = (e) => {
  const filterButtons = document.querySelectorAll(
    ".sidebar-widget-list-left button, .sidebar-widget-tag button , .product-filter button , .shop-tab button"
  );
  filterButtons.forEach((item) => {
    item.classList.remove("active");
  });
  e.currentTarget.classList.add("active");
};

export const getSortProduct = (products, categoryName) => {
  if (!categoryName) {
    return products;
  }
  var regex = new RegExp(categoryName , 'gi');
  let sortedProduct = products.filter((product) => product.type.join('').match(regex))
  return sortedProduct
};
