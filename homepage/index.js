let image=document.getElementById("slider");

let images=[
    'https://www.reliancedigital.in/medias/Citi-Bank-Offer-Carousel-Banner-15-06-2022.jpg?context=bWFzdGVyfGltYWdlc3w3ODYzNnxpbWFnZS9qcGVnfGltYWdlcy9oY2MvaDRlLzk4NDU2NTI4ODE0MzguanBnfGM4M2EwOTJkNDFhMThmZjdmNGIyMzM0YTgyNzM5MWIwMzFiMmM4OWY1ODM1M2RlNjBhNWQ0NjM4ZTQzNTVkZWM',
    'https://www.reliancedigital.in/medias/Father-s-day-Desktop.jpg?context=bWFzdGVyfGltYWdlc3w5NDA2NnxpbWFnZS9qcGVnfGltYWdlcy9oOTgvaGFlLzk4NDYxNTM2NzQ3ODIuanBnfDVmZmIzY2NkNTExNjI2NGI4ZjU2NzhiZTM1ODk1M2ZhMmZiZTUzNTUyOTJjMmIxYzM0MWUzNDkzOGYzMjAyMGM',
    'https://www.reliancedigital.in/medias/iPhone-13-CLP-Banner-15-06-2022.jpg?context=bWFzdGVyfGltYWdlc3w2MTc2MnxpbWFnZS9qcGVnfGltYWdlcy9oMmQvaGYyLzk4NDU2NTQ1MTk4MzguanBnfDBmMDkwZmU1ODdiMDNiMDdjZmQ3ZmE5MDk4NDgzNWFmMWVhM2E3ZjFhOTJiYmJlMWU2YWI5MjllODNhZjE0ZGQ',
    'https://www.reliancedigital.in/medias/Big-screen-desktop.jpg?context=bWFzdGVyfGltYWdlc3wxMDA0NjZ8aW1hZ2UvanBlZ3xpbWFnZXMvaDAzL2gwZS85ODQ2NjAzNjc3NzI2LmpwZ3xiOGJhNDIwYzRhODZhODZmMWFiZmVkOTU3ZDk4NWZiMGY2MGUwMDA0NjRlNzNmZTVkYTZjZjk5ODYxODZmZGNl',
    'https://www.reliancedigital.in/medias/Zest-10-Cashback-CLP-Banner-Desktop.jpg?context=bWFzdGVyfGltYWdlc3wxMDAyNjh8aW1hZ2UvanBlZ3xpbWFnZXMvaGU3L2g3YS85ODQ0NjY0MTA3MDM4LmpwZ3wzZGVkMGQ4ZmU5ZjI0ZTlmYTJhNDk1OGYyYzczZGZiZWVmN2YyOTIzYzVkYzdlNDYzMjdkOGE5YmFkMmQxMDAx',
    
]

setInterval(function(){             
    let random=Math.floor(Math.random()*6);
    image.src=images[random];
    },2000);

    let image2=document.getElementById("slider2");

let images2=[
    'https://www.reliancedigital.in/medias/RD-Macbook-Pro-CLP-Bannrer-Desktop.jpg?context=bWFzdGVyfGltYWdlc3w3NTUxOHxpbWFnZS9qcGVnfGltYWdlcy9oMmUvaGE0Lzk4NDYxNTE1NDQ4NjIuanBnfDE5OTY4NDIwZjM3ZjM3ZTA3ZDAxMjVhMTRlMTNlMGNlMzRmNjA4MjJiMzYyYTBmM2YxOGE4MTE2MGUzYTQ3ZmU',
    'https://www.reliancedigital.in/medias/Oppo-K10-5G-NPI-Banner-09-06-2022.jpg?context=bWFzdGVyfGltYWdlc3w2Mjg1NnxpbWFnZS9qcGVnfGltYWdlcy9oYTQvaDQxLzk4NDYxNzc0MzE1ODIuanBnfGMzZjU5OGM1ODEyZWU0MzVlN2ZiYWE5YTZkMWRkZWZlYTI5NTc0YjkyMDg3NGMyYWY1Mzk1ZGU0YjI3ODcyNjc',
    'https://www.reliancedigital.in/medias/Acer-Banner-NPI-D.jpg?context=bWFzdGVyfGltYWdlc3wxNDk4NTh8aW1hZ2UvanBlZ3xpbWFnZXMvaGJjL2hlYS85ODI0Mjk5Nzc4MDc4LmpwZ3w5NDgxYzg3OWQwMzQ5OWEyNDkwNzc0OTViN2E2ZjZiY2Y0M2MxMjYyMzMzOTVjOWNhNmY4Mjk3MjdlNDU3OGM1',
    'https://www.reliancedigital.in/medias/Epson-D.jpg?context=bWFzdGVyfGltYWdlc3wxNTA3NjV8aW1hZ2UvanBlZ3xpbWFnZXMvaGE1L2gwNy85ODQyMjE3Mzg2MDE0LmpwZ3xiOGI2NWM4YzIyNWI0ZGMyYzI4YTBkN2FlM2JiNDhiYjgxOTdhY2UyZmU4YmVhOWZiM2FkMGQ1Mjc2NDNhOWJl',
    'https://www.reliancedigital.in/medias/Motorola-edge30-NPI-Banner-20-05-2022.jpg?context=bWFzdGVyfGltYWdlc3w2MzU4M3xpbWFnZS9qcGVnfGltYWdlcy9oNDYvaGEwLzk4MzMwNTAxNzc1NjYuanBnfDcxNGUwYTczMTE2ZGQ0YWMxMmZmZDc4MGI1MmI4Yjc0MjMwYjU0MmZjNDRjZWZmYjI0MGFjYTZjMTRjYmU4YjU',
    'https://www.reliancedigital.in/medias/Bose-Soundlink-Flex-NPI-Banners-Desktop.jpg?context=bWFzdGVyfGltYWdlc3w5NDY4NnxpbWFnZS9qcGVnfGltYWdlcy9oZTYvaDU4Lzk4NDIxMTc3Mzg1MjYuanBnfGUyOWU3YzRlOWIzODZhMGIzNWJhNDMzZmM0Y2FhZDhmNWMyYmNlNjg5ZjRlZDkzZTkxYjM4YzJmN2JlYmQzY2E',
    'https://www.reliancedigital.in/medias/Desktop-1365x260.jpg?context=bWFzdGVyfGltYWdlc3wxMDkwOTR8aW1hZ2UvanBlZ3xpbWFnZXMvaDM0L2g1OC85ODM0OTk3MzUwNDMwLmpwZ3wwZmU2NmQ0ODkxMTQ3YzFhZDZiOGMyODg0ZTQ0ODBiZWE5ZTA4NTM1MGMzZGMyNzQ5ZmUzOTUzMTQ3OWEyMGEw',
    'https://www.reliancedigital.in/medias/Moto-E32s-NPI-Banner-13-06-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMTE1NDN8aW1hZ2UvanBlZ3xpbWFnZXMvaDFkL2gzMS85ODQzMDY3MDI3NDg2LmpwZ3wwOWU5NTA4ZTlhMGQ3MWY4ODEyZjIyNmQ3NmU2OWU2NTllMmEwZWNhMzcyMTQyNTVhMzlkMDVjNzRiNzRhYWU2'
    
]  

setInterval(function(){             
    let random=Math.floor(Math.random()*6);
    image2.src=images2[random];
    },2000);