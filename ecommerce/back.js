var productForm = document.querySelector(".productForm");
var categoryForm = document.querySelector(".categoryForm");
var adminDetails = document.querySelector(".admin-details");

const openProductForm = () => {
    productForm.style.display = "block";
    categoryForm.style.display = "none";
    adminDetails.style.display = "none";    
}

const closeProductForm = () => {
    productForm.style.display = "none";
    categoryForm.style.display = "none";
    adminDetails.style.display = "block";
}

const openCategoryForm = () => {
    categoryForm.style.display = "block";
    productForm.style.display = "none";    
    adminDetails.style.display = "none";       
}

const closeCategoryForm = () => {
    categoryForm.style.display = "none";
    productForm.style.display = "none";    
    adminDetails.style.display = "block";       
}
