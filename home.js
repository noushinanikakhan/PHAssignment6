let allPlantsData=[];

// category section

fetch ("https://openapi.programming-hero.com/api/categories")
 .then (res=> res.json()
 .then (data => {
   
    categoryContainer = document.getElementById("category-container")
    categoryContainer.innerHTML="";


 data.categories.forEach(category => {
    const btnTree = document.createElement("div");
    btnTree.innerHTML=`
    <button id="btn-active-${category.id}" class="btn btn-ghost w-full text-left text-[#1f2937] hover:bg-[#15803d] hover:text-white active-tree">${category.category_name}</button> `

btnTree.onclick =()=>{ filterPlants(category.category_name) 

  const removeActive=()=> {
    const treeButtons= document.querySelectorAll(".active-tree"); 

    treeButtons.forEach (btn=> btn.classList.remove("active")); 

  }
   removeActive();

  const buttonGreen = document.getElementById(`btn-active-${category.id}`)

  buttonGreen.classList.add("active");
};


    categoryContainer.appendChild(btnTree);
 })
 }));


//  all card section

fetch ("https://openapi.programming-hero.com/api/plants")
 .then (res=> res.json())
 .then (data => {
     
    allPlantsData=data.plants;
    
    const allPlantsStorage=document.getElementById("plant-card");
    
    allPlantsStorage.innerHTML="";

    displayPlants(allPlantsData);});

  function displayPlants(plants) {
  const allPlantsStorage = document.getElementById("plant-card");
  allPlantsStorage.innerHTML = "";  

    // allPlants = document.getElementById("plant-card")
    // allPlants.innerHTML="";
// data

 plants.forEach(plant => {
    const cardTree = document.createElement("div");
    cardTree.innerHTML=`
    <div id="" class="bg-white space-y-3 w-[310px] h-[px] rounded-xl p-6 mb-4 items-center">
        <img class="w-[300px] h-[200px] justify-center rounded-xl" src="${plant.image}" alt="">
        <h2 onclick="plantDetailsModal(${plant.id})" class="text-[#1f2937] font-bold">${plant.name}</h2>
        <p class="text-[#1f2937] text-xs">${plant.description}</p>
        <div class="flex justify-between items-center">
          <button class="btn btn-xs bg-[#cff0dc] text-[#15803d] rounded-xl h-[8]">${plant.category}</button>
           <p class="text-[#1f2937] pb-2"><span class="text-2xl">৳</span>
           ${plant.price}</p>
        </div>
               <div class="">
            <button onclick="addToCart(${plant.id})" class="btn btn-wide bg-[#15803d] text-white rounded-3xl px-20  mx-auto">Add to Cart</button>    
        </div>
        </div>
    `
    allPlantsStorage.appendChild(cardTree);
 })
 
 };

 function plantDetailsModal (plantId){
    const plant = allPlantsData.find (p=>p.id===plantId);
    const modal = document.getElementById("plantDetailsModal")
    modal.innerHTML=`
    <div class="modal-box">
  <div>
      <h3 class="text-lg font-bold py-3">${plant.name}</h3>
      <img class="w-full h-[250px] justify-center rounded-xl" src="${plant.image}" alt="">
          <p class="py-4"><b>Category:</b> ${plant.category}</p>
      <p class="py-4"><b>Price:</b> <span class="text-2xl">৳</span> ${plant.price}</p>
    <p class="py-4"><b>Description:</b> ${plant.description}</p>
  </div>
    <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn">Close</button>
      </form>
    </div>
  </div>
    `

    modal.showModal();
 }

//  add to cart section
let cart = [];


function addToCart(plantId){
  const plant= allPlantsData.find(p=> p.id===plantId);
  cart.push(plant)
  updateCart();


}
 function updateCart () { 
const cartItems = document.getElementById("cart-items")
  cartItems.innerHTML= ``;

  let total = 0; 

  cart.forEach (item => {
    total += item.price;
    cartItems.innerHTML += `
     <button class="btn btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-[#f0fdf4] w-full md:w-11/12 min-h-12 px-2 py-3">
   <div class="flex  justify-between items-start w-full ">
       <div class="flex  flex-col justify-between ">
         <h5 class="text-xs md:text-sm text-left break-words">${item.name}</h5>
        <p class="text-xs text-left"><span class="text-xl">৳</span> ${item.price}</p>
      </div>
    <i class="fa-solid fa-xmark p-2" onclick="removeItem(${cart.indexOf(item)})"></i>
   </div>
      </button>`
  })

  cartItems.innerHTML += `<div class="w-10/12 flex justify-between items-center"> 
   <div class="text-md font-semibold"> Total: </div>
  <div> <span class="text-xl">৳</span> ${total} 
  </div>`
     }
     
  function removeItem (index) {
    cart.splice(index, 1)
    updateCart();
 }
 


 //  category section call

function filterPlants(categoryName){
    const filteredPlants =allPlantsData.filter(
        plant=> plant.category===categoryName);
    displayPlants(filteredPlants);

}







