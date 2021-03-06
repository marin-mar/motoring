@@include('_webpcss.js')
@@include('_header.js')
@@include('_intro.js')
@@include('_products.js')
@@include('_offer.js')
@@include('_popup404.js')

document.addEventListener('DOMContentLoaded', function(){
	autoPlaySlide();

	/* preload list of products - featured */
	const productsTitleFeatured = document.querySelector('.products__title--featured');
	productsTitleFeatured.classList.add("btn--active");
	loadProductsData(productsTitleFeatured, productsData);

	/* preload list of products - discount */ 
	const discountTitle = document.querySelector('.discount__title');
	loadProductsData(discountTitle, productsData);
})


