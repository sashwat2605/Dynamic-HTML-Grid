var clothing=[
    {
        name:'Men Navy Blue  Solid Sweatshirt',

        image:'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg',

        brand:'United Colours of Benetton',

        price:'Rs 2599',

    },

    {
     name:'Men Black MAMGP T7 Sweat Sporty Jacket',

     image:'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2060340/2017/9/14/11505387708574-Puma-Men-Black-Solid-Sporty-Jacket-371505387708496-1.jpg',

     brand: 'Puma',

     price:'Rs 7999',

    },

    {

        name:'Men Black Action Parkview Lifestyle Shoes',

        image:'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2018/9/19/b1373b00-37d4-41a0-a908-5d742a68d3661537343756229-1.jpg',
   
        brand: 'Hush Puppies',
   
        price:'Rs 6999',

    },

    {
        name:'Women Black Solid Lightweight Leather Jacket',

        image:'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/3854721/2018/3/12/11520844673915-BARESKIN-Women-Black-Solid-Lightweight-Leather-Jacket-7761520844673718-1.jpg',
   
        brand: 'Bareskin',
   
        price:'Rs 3999',

    },
    {
        name:'Women Blue Solid Shirt dress',

        image:'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/5649908/2018/5/10/6bfe80cd-2f55-42bc-aa7f-e0d6c9e2ac531525936414747-SASSAFRAS-Women-Blue-Solid-Shirt-Dress-3831525936414532-1.jpg',
   
        brand: 'SASSAFARAS',
   
        price:'Rs 5200',

    }

];


var container=document.querySelector(".container");
var container2=document.querySelector(".container2");

var output="";
for(let i=0;i<clothing.length;i++){
     output+=` <div class="product">
      <img src="${clothing[i].image}" alt="">
      <p>${clothing[i].name}</p>
      <span class="brand">
        ${clothing[i].brand}
      </span>
      <span class="price">
          ${clothing[i].price}
      </span>

   </div>`
}

container.innerHTML=output;


var accessory = [
    {
        name:'Unisex Silver-Toned Series 3 Smart Watch',
        brand:'Apple',
        image:'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/9803247/2019/5/27/624dac60-4c42-4902-bba1-30a51cc7f43c1558948536543-Apple-Unisex-Smart-Watches-1441558948536225-1.jpg',
        price:'Rs 31999',
    },
    {
        name:'Unisex Black & Green Reflex 2.0 Smart Band',
        brand:'Fastrack',
        image:'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2019/2/23/dc05b5e5-aa82-493e-bf0b-0c309baf21021550920383101-1.jpg',
        price:'Rs 1999',
    },
    {
        name:'Unisex Black Galaxy Fit Fitness Band',
        brand:'Samsung',
        image:'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/10122083/2019/6/24/e533a691-3908-41b0-8307-1928a37d4ec41561362162650-Samsung-Galaxy-Fit-4801561362161527-1.jpg',
        price:'Rs 9990',
    },
    {
        name:'Gear IconX Black Cord-free Fitness Earbuds',
        brand:'Samsung',
        image:'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/8593217/2019/4/9/de2c21f3-6731-4c29-9369-692a486a1b8c1554802772926-Samsung-Gear-IconX-Black-Cord-free-Fitness-Earbuds-256155480-1.jpg',
        price:'Rs 13990',
    },
    {
        name:'White 2nd Gen Airpods with Charging Case',
        brand:'Apple',
        image:'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/9803279/2019/5/27/6661d579-12ae-456b-b8f2-e78e5256a99c1558948436173-Apple-AirPods-with-Charging-Case-2nd-Gen-White-3831558948435-1.jpg',
        price:'Rs 14999',
    },


]

var output1="";
for(let i=0;i<accessory.length;i++){
    output1 += ` <div class="product">
    <img src="${accessory[i].image}" alt="">
    <p>${accessory[i].name}</p>
    <span class="brand">
      ${accessory[i].brand}
    </span>
    <span class="price">
        ${accessory[i].price}
    </span>

 </div>`
}

container2.innerHTML=output1;