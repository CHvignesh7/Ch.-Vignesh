const buyButton1 = document.querySelector('#buy1');

buyButton1.addEventListener('click', () => {
    window.location.href = '/sub/pro1.html';
});
const buyButton2 = document.querySelector('#buy2');

buyButton2.addEventListener('click', () => {
    window.location.href = '/sub/pro2.html';
});
const buyButton3 = document.querySelector('#buy3');

buyButton3.addEventListener('click', () => {
    window.location.href = '/sub/pro3.html';
});
const buyButton4 = document.querySelector('#buy4');

buyButton4.addEventListener('click', () => {
    window.location.href = '/sub/pro4.html';
});
const buyButton5 = document.querySelector('#buy5');

buyButton5.addEventListener('click', () => {
    window.location.href = '/sub/pro5.html';
});
const buyButton6 = document.querySelector('#buy6');

buyButton6.addEventListener('click', () => {
    window.location.href = '/sub/pro6.html';
});
const buyButton7 = document.querySelector('#buy7');

buyButton7.addEventListener('click', () => {
    window.location.href = '/sub/pro7.html';
});
const buyButton8 = document.querySelector('#buy8');

buyButton8.addEventListener('click', () => {
    window.location.href = '/sub/pro8.html';
});
/*#################################################*/

/*#########################################*/
const searchInput = document.getElementById('search-input');
const productList = document.getElementById('product_list');
const products = productList.children;

searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    products.forEach((product) => {
        const productName = product.querySelector('.product_info h3').textContent.toLowerCase();
        if (productName.includes(searchTerm)) {
            product.style.display = 'flex';
        } else {
            product.style.display = 'none';
        }
    });
});
/*#################################################*/