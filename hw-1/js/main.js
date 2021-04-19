const products = [
    { id: 1, title: 'Notebook', price: 20000 },
    { id: 2, title: 'Mouse', price: 1500 },
    { id: 3, title: 'Keyboard', price: 5000 },
    { id: 4, title: 'Gamepad', price: 4500 },
];

const renderProduct = (title = "Название продукта", price = "Цена продукта") => {
    return `<div class="product-item">
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="by-btn">Добавить в корзину</button>
              </div>`;
};

const renderProducts = (list = products) => {
    const productList = list.map((item) => {
        return renderProduct(item.title, item.price);
    });

    //Установка параметра innerHTML преобразует массив в строку, разделенную запятыми; 
    //разделитель запятых используется по умолчанию для параметра Array.prototype.toString .
    // По этому используем метод join("") для склейки элементов массивов в одну строку без разделителей
    document.querySelector('.products').innerHTML = productList.join("");
}

renderProducts();