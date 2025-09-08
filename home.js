
//     fetch("https://openapi.programming-hero.com/api/categories")
//     .then((res) => res.json())
//     .then( json => displayCategories(json.data));
//     ;
// }

// const displayCategories =(categories) => { 

// const categoryContainer = document.getElementById("category-container");
// categoryContainer.innerHTML="";


// for (let category of categories) {

//     const btnTree = document.getElementById("div")
//     btnTree.innerHTML=`
//     <button  class="btn btn-ghost w-full text-[#1f2937] hover:bg-[#15803d] hover:text-white">All Trees</button>
//     `

//     categoryContainer.appendChild(btnTree)
// }
//  }

// loadCategories();
fetch ("https://openapi.programming-hero.com/api/categories")
 .then (res=> res.json()
 .then (data => {
    categoryContainer = document.getElementById("category-container")
    categoryContainer.innerHTML="";


 data.categories.forEach(category => {
    const btnTree = document.createElement("div");
    btnTree.innerHTML=`
    <button  class="btn btn-ghost w-full text-left text-[#1f2937] hover:bg-[#15803d] hover:text-white ">${category.category_name}</button>
    `
    categoryContainer.appendChild(btnTree);
 })
 }));

//  all card section

fetch ("https://openapi.programming-hero.com/api/plants")
 .then (res=> res.json()
 .then (data => {
    allPlants = document.getElementById("plant-card")
    allPlants.innerHTML="";


 data.plants.forEach(plant => {
    const cardTree = document.createElement("div");
    cardTree.innerHTML=`
    <div id="" class="bg-white space-y-3 w-[310px] h-[px] rounded-xl p-6">
        <img class="w-[300px] h-[200px] justify-center rounded-xl" src="${plant.image}" alt="">
        <h2 class="text-[#1f2937] font-bold">${plant.name}</h2>
        <p class="text-[#1f2937] text-xs    ">${plant.description}</p>
        <div class="flex justify-between">
          <button class="btn btn-xs bg-[#cff0dc] text-[#15803d] rounded-xl">${plant.category}</button>
           <p class="text-[#1f2937]"><span class="text-2xl">৳</span>
           ${plant.price}</p>
        </div>
               <div class="">
            <button class="btn btn-wide bg-[#15803d] text-white rounded-3xl px-20  mx-auto">Add to Cart</button>    
        </div>
        </div>
    `
    allPlants.appendChild(cardTree);
 })
 }));




