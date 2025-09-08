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
        <h2 class="text-[#1f2937] font-bold">${plant.name}</h2>
        <p class="text-[#1f2937] text-xs">${plant.description}</p>
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
    allPlantsStorage.appendChild(cardTree);
 })
 };

 //  category section call

function filterPlants(categoryName){
    const filteredPlants =allPlantsData.filter(
        plant=> plant.category===categoryName);
    displayPlants(filteredPlants);

}





