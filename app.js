

// ৯. একটা সিম্পল ওয়েবসাইট বানাও। সেখানে দুইটা ইনপুট ফিল্ড থাকবে। একটা ফিল্ডে লিখবে প্রোডাক্ট এর নাম। আর সেকেন্ড ইনপুট ফিল্ডে থাকবে প্রোডাক্ট এর প্রাইস। তারপর একটা বাটন থাকবে। সেই বাটনে চাপ দিলে। প্রোডাক্ট এর নাম আর দাম ব্রাউজারের লোকাল স্টোরেজে সেইভ হয়ে যাবে। এবং চাইলে একাধিক প্রোডাক্ট এবং সেটার দাম লোকাল স্টোরেজে সেইভ করতে পারবে। 

// ১০. যখন একটা প্রোডাক্ট এবং দাম লোকাল স্টোরেজে সেভ করবে। সেটা ওয়েবসাইট এ ও দেখাবে। এমনকি যদি ওয়েবসাইট নতুন করে লোড করে করে তাহলেও লোকাল স্টোরেজে এ সেভ হয়ে থাকা ডাটা থেকে বের করে এনে ওয়েবসাইট এ দেখাবে। 

//................GetName and price form Input field............................\\

const getProductAndPrice = () => {
    const product1 = document.getElementById('product-name');
    const product2 = document.getElementById('product-price');
    const name = product1.value;
    const price = product2.value;
    if (!name || !price) {
        return;
    }
    displayProductAndPrice(name, parseInt(price))
    cartAddToLocalStorage(name, parseInt(price))

    product1.value = '';
    product2.value = '';
}

//.....................display card......................\\

const displayProductAndPrice = (name, price) => {
    const ul = document.getElementById('parent')
    const li1 = document.createElement('li')
    const li2 = document.createElement('li')
    li1.className = 'list-group-item text-center text-warning fs-5 fw-bold';
    li2.className = 'list-group-item text-center text-warning fs-5 fw-bold';
    li1.innerText = name;
    li2.innerText = price;
    ul.appendChild(li1);
    ul.appendChild(li2);

}

//...............Checkout is there any cart available..............\\

const getCart = () => {

    const cart = localStorage.getItem('cart');
    let cardObj;
    if (cart) {
        cardObj = JSON.parse(cart);
    }
    else {
        cardObj = {}
    }
    return cardObj;
}
//...................Cart add to local Storage.....................\\

const cartAddToLocalStorage = (name, price) => {
    const cart = getCart()

    if (cart[name]) {
        cart[name] += price;
    }
    else {
        cart[name] = price;
    }
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified)
}


//....................Display cart from local storage..........................\\

const displayLocalStorageCart = () => {
    const table = document.getElementById('table');

    const cart = getCart()
    for (const name in cart) {
        displayProductAndPrice(name, cart[name])
    }
}
displayLocalStorageCart();