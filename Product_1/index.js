let data = [
    {
        image: "https://www.reliancedigital.in/medias/Apple-12-Smartphones-491901531-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzODkxMHxpbWFnZS9qcGVnfGltYWdlcy9oMjgvaGY2Lzk0MDc3MjI1MjA2MDYuanBnfDA3MjRkMGZjMjBkZGNhYjgyZjg1NjQ0ZWQ4ZWMyOGM4ZGQ4OTk4MjVlMzViZDllNTgzZmRiYzMwNDA3ZTliZDM",
        name: "Apple iPhone 12 64 GB, Blue",
        price: "₹55,900.00",
        mrp: "₹65,900.00",
        discount: "15%(₹10,000)",
    },
    {
        image: "https://www.reliancedigital.in/medias/Apple-iPhone12-Smartphones-491901528-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMjgwN3xpbWFnZS9qcGVnfGltYWdlcy9oM2YvaGQ4Lzk2NzU4Njg4MzE3NzQuanBnfDI5ZmE0NzA5MjhmYzQ1MTU2ZGM5MmY2YzgxM2VjY2FhMjlhZDVlMzRjMDhkODg5NThhZjA1Y2Q0ZTBjY2Y2NzE",

        name: "Apple iPhone 12 64 GB, Black",
        price: "₹57,400.00",
        mrp: "₹65,900.00",
        discount: "13%(8,500)",

    },
    {
        image: "https://www.reliancedigital.in/medias/Apple-iPhone12-Smartphones-491901528-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMjgwN3xpbWFnZS9qcGVnfGltYWdlcy9oM2YvaGQ4Lzk2NzU4Njg4MzE3NzQuanBnfDI5ZmE0NzA5MjhmYzQ1MTU2ZGM5MmY2YzgxM2VjY2FhMjlhZDVlMzRjMDhkODg5NThhZjA1Y2Q0ZTBjY2Y2NzE",
        name: "Apple iPhone 12 64 GB, Green",
        price: "₹58,900.00",
        mrp: "₹65,900.00",
        discount: "11%(7,000)",
    },
    {
        image: "https://www.reliancedigital.in/medias/Apple-12-Smartphones-491901530-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0MTQ1NXxpbWFnZS9qcGVnfGltYWdlcy9oNGIvaDU3Lzk0MDc3MzAzODQ5MjYuanBnfDJmNjUzMDY5MjAyNDQ5M2Y2Yjc2ZjBmNzJiNGZkYmQ2ZDk2YTk5YmM0ZTlhZGE3YjI0ZTBlODFhN2M4NzAxYWI",
        name: "Apple iPhone 12 64 GB, (Product)Red",
        price: "₹58,900.00",
        mrp: "₹65,900.00",
        discount: "10%(7,000)",
    },
    {
        image: "https://www.reliancedigital.in/medias/Apple-iPhone-12-64GB-491996646-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMzA1N3xpbWFnZS9qcGVnfGltYWdlcy9oY2EvaDA0Lzk1MzAwMTg0NjM3NzQuanBnfGJkNzJkOTYwYjkyNzExYjA5NjU2YjM5MzJjOTk3ZjdkZjAzZDE4NmZlYmQzMzZiMjAzNGQyNTk1OGY3ZTFlNDY",
        name: "Apple iPhone 12 64 GB, Purple",
        price: "₹58,900.00",
        mrp: "₹65,900.00",
        discount: "10%(7,000)",

    },
    {
        image: "https://www.reliancedigital.in/medias/Apple-12-Smartphones-491901529-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzNDM2NXxpbWFnZS9qcGVnfGltYWdlcy9oZGUvaDBjLzk0MDc3MjI4NDgyODYuanBnfGM0NDk5NDc1NmFhMTgwNzVmODQ2NTQzNjBkM2E1Yzk0MWVjZmM4MzA3ZDc1ZTFmZjQ2MjJiYWViMGY3NzEzYzY",
        name: "Apple iPhone 12 64 GB, White",
        price: "₹58,900.00",
        mrp: "₹65,900.00",
        discount: "10%(7,000)",

    },
    {
        image: "https://www.reliancedigital.in/medias/Apple-12-Smartphones-491901534-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0MDY4OXxpbWFnZS9qcGVnfGltYWdlcy9oNzQvaGM3Lzk0MDc3NDM3NTQyNzAuanBnfDM0N2ZmZDFhNTQxZDFkZmY4ZWU2OTRjZTJhZjNlNWEyMjEwZjA1NWExNTM5OTk3YTMyYjQzZWY5ODQ3Y2FhNzk",
        name: "Apple iPhone 12 128 GB, White",
        price: "₹59,900.00",
        mrp: "₹70,900.00",
        discount: "16%(11,000)",

    },
    {
        image: "https://www.reliancedigital.in/medias/Apple-12-Smartphones-491901537-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0MjE5NnxpbWFnZS9qcGVnfGltYWdlcy9oZWEvaDExLzk0MDc3NDExMzI4MzAuanBnfDMyYzZkZjBlZmEyNTRkNGVjOGY4MTk1MWYwYzg2Yjg0YjdlNjI2N2QwNDgwMmM5OTUxZTcwYjZiYjA1YTc5Yzc",
        name: "Apple iPhone 12 128 GB, Green",
        price: "₹59,900.00",
        mrp: "₹70,900.00",
        discount: "16%(11,000)",
    },
    {
        image: "https://www.reliancedigital.in/medias/Apple-iPhone12-Smartphones-491901533-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzOTEzMXxpbWFnZS9qcGVnfGltYWdlcy9oMGEvaGI0Lzk2NzYzMjUxNTg5NDIuanBnfDdjN2QxMjg2ZTgyZTlkYTcxZTA2YjdlNGZiNDEzMWU3ZTQ5MWE0MjI2MjdlZWYyYjkxNjhhMzZhOTFmODdkODU",
        name: "Apple iPhone 12 128 GB, Black",
        price: "₹59,900.00",
        mrp: "₹70,900.00",
        discount: "16%(11,000)",
    },
    {
        image: "https://www.reliancedigital.in/medias/Apple-iPhone-12-128GB-491996644-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMzA1N3xpbWFnZS9qcGVnfGltYWdlcy9oNjIvaGZkLzk1MzAwMDUzNTY1NzQuanBnfDE1MzI2NDQ5ZDAyZjNhZjk2N2IyZGQ5MmE5OWFmMDUwNDk1MzA1OGY0Yjk2NGIxMmU2ZTViYWI2NzQ0MWRjMDQ",
        name: "Apple iPhone 12 128 GB, Purple",
        price: "₹59,900.00",
        mrp: "₹70,900.00",
        discount: "16%(11,000)",

    },
    {
        image: "https://www.reliancedigital.in/medias/Apple-12-Smartphones-491901536-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0NTIzNHxpbWFnZS9qcGVnfGltYWdlcy9oMzQvaGE1Lzk0MDc3NDY0NDEyNDYuanBnfDA3MmMxMTU3MzQ0M2ViMjdlMTMwNjlkZGMxOWMyNDViYjdiODJiYjZlNDExYzM4ZTQwYzQxOGZiNTk4MjMyNTk",
        name: "Apple iPhone 12 128 GB, Gold",
        price: "₹59,900.00",
        mrp: "₹70,900.00",
        discount: "16%(11,000)",
    },
    {
        image: "https://www.reliancedigital.in/medias/Apple-12-Smartphones-491901535-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0Nzc3OXxpbWFnZS9qcGVnfGltYWdlcy9oZWUvaGU5Lzk0MDc3MzEwNDAyODYuanBnfDRhODY1Mjg0YTkyZDU5NmQ0MjA0Y2M2YTQ2YzQxZTRhYTU4ZjI4MzY4N2NhZDI4ODE3MDZkODQzMjk5NGQzNzU",
        name: "Apple iPhone 12 128 GB, (Product)Red",
        price: "₹59,900.00",
        mrp: "₹70,900.00",
        discount: "16%(11,000)",
    }
]

console.log(data.length)
let second = document.getElementById("second")
data.forEach(el => {
    let card = document.createElement("div")
    card.setAttribute("class", "card")
    // card.classList.add("product")
    let aprice = document.createElement("div")
    aprice.setAttribute("class", "aprice")

    //this is bouttom div of card
    let buttom = document.createElement("div")
    buttom.setAttribute("class", "buttom")

    let priceofferdiv = document.createElement("div")
    priceofferdiv.setAttribute("class", "priceofferdiv")
    //this is image div of card
    let imgdiv = document.createElement("div")
    imgdiv.setAttribute("class", "imgdiv")
    let img = document.createElement("img")
    img.setAttribute("class", "image")
    img.src = el.image
    let name = document.createElement("h3")
    name.setAttribute("class", "name")
    name.innerHTML = el.name
    let price = document.createElement("h4")
    price.setAttribute("class", "price")
    price.innerHTML = el.price
    let mrp = document.createElement("h4")
    mrp.setAttribute("class", "mrp")
    mrp.innerHTML = el.mrp
    let discount = document.createElement("h4")
    discount.setAttribute("class", "discount")
    discount.innerHTML = el.discount;
    let offer = document.createElement("div")
    offer.setAttribute("class", "offer")
    let offertext = document.createElement("p")
    offertext.innerHTML = "OFFERS AVAILABLE";
    offertext.setAttribute("class", "offertext")
    let offertext1 = document.createElement("p")
    offertext1.innerHTML = "CASHBACK"


    let wishlist = document.createElement("div")
    wishlist.setAttribute("class", "wishlist")

    let comparediv = document.createElement("div")
    comparediv.setAttribute("class", "comparediv")
    let wishlisttext = document.createElement("h3")
    let clogo = document.createElement("img")
    clogo.setAttribute("class", "logo")
    clogo.src = "https://cdn-icons-png.flaticon.com/128/545/545666.png"

    wishlisttext.setAttribute("name", "wishlist")
    wishlisttext.innerHTML = "Compare"
    //This is wiselistdiv of card,this is the main div it is the parent of wishlisttext and wlogo
    let wishlistdiv = document.createElement("div")
    wishlistdiv.setAttribute("class", "wishlistdiv")
    //  This is wishlist div of card
    let wlogo = document.createElement("img")
    wlogo.setAttribute("class", "logo")
    wlogo.src = "https://cdn-icons-png.flaticon.com/128/1077/1077035.png"
    let wishlisttext1 = document.createElement("h3")
    wishlisttext1.innerHTML = "Wishlist"



    //  this is append part of the code
    comparediv.append(clogo, wishlisttext)
    wishlistdiv.append(wlogo, wishlisttext1)
    wishlist.append(comparediv, wishlistdiv)
    offer.append(offertext, offertext1)
    aprice.append(price, mrp, discount)
    priceofferdiv.append(aprice, offer, wishlist)
    // imgdiv.append(img)
    buttom.append(name, priceofferdiv)
    card.append(img, buttom)
    second.append(card)

})
