// Write your Pizza Builder JavaScript in this file.

// Constants 
let basePrice = 10;
let ingredients = {
  pepperonni: {name: 'Pepperonni', price: 1},
  mushrooms: {name: 'Mushrooms', price: 1},
  greenPeppers: {name: 'Green Peppers', price: 1},
  whiteSauce: {name: 'White sauce', price: 3},
  glutenFreeCrust: {name: 'Gluten-free crust', price: 5}
}

// Initial value of the state (the state values can change over time)
let state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
}

// This function is triggered once at the begining and everytime the state is changed
const renderPepperonni = () => {
  document.querySelectorAll('.pep').forEach($pep => {
    if (state.pepperonni) {
      $pep.style.visibility = "visible";
    }
    else {
      $pep.style.visibility = "hidden";
    }
  })
}

const renderMushrooms = () => {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach($mushroom =>{
    if (state.mushrooms) {
      $mushroom.style.visibility = "visible";
    }
    else {
      $mushroom.style.visibility = "hidden";
    }
  })
}

const renderGreenPeppers = () => {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll(`.green-pepper`).forEach($greenpepper =>{
    if (state.greenPeppers) {
      $greenpepper.style.visibility = "visible";
    }
    else {
      $greenpepper.style.visibility = "hidden";
    }
  })
}

const renderWhiteSauce = () => {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const sauceElement = document.querySelector('.sauce');
  if(state.whiteSauce) {
    sauceElement.className = 'sauce sauce-white';
  } else {
    sauceElement.className = 'sauce'
  };
}


const renderGlutenFreeCrust = () => {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const crustElement = document.querySelector('.crust');
  if(state.glutenFreeCrust){
    crustElement.className = 'crust crust-gluten-free';
  } else{
    crustElement.className = 'crust';
  }
}

const renderButtons = () => {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  let activePepperonni = document.querySelector(`.btn-pepperonni`) 
    if (state.pepperonni){
      if(activePepperonni.classList.contains("active")){  
      } 
      else {
        activePepperonni.classList.add(`active`)
      }
    }
    else {
      if(activePepperonni.classList.contains("active")){  
        activePepperonni.classList.remove(`active`)
      } 
      else {
      }
    }
  let activeMushrooms = document.querySelector(`.btn-mushrooms`) 
  if (state.mushrooms){
    if(activeMushrooms.classList.contains("active")){  
    } 
    else {
      activeMushrooms.classList.add(`active`)
    }
  }
  else {
    if(activeMushrooms.classList.contains("active")){  
      activeMushrooms.classList.remove(`active`)
    } 
    else {
    }
  }
  let activeGreenPepper = document.querySelector(`.btn-green-peppers`) 
  if (state.greenPeppers){
    if(activeGreenPepper.classList.contains("active")){  
    } 
    else {
      activeGreenPepper.classList.add(`active`)
    }
  }
  else {
    if(activeGreenPepper.classList.contains("active")){  
      activeGreenPepper.classList.remove(`active`)
    } 
    else {
    }
  }
  let activeSauce = document.querySelector(`.btn-sauce`) 
  if (state.whiteSauce){
    if(activeSauce.classList.contains("active")){  
    } 
    else {
      activeSauce.classList.add(`active`)
    }
  }
  else {
    if(activeSauce.classList.contains("active")){  
      activeSauce.classList.remove(`active`)
    } 
    else {
    }
  }
  let activeCrust = document.querySelector(`.btn-crust`) 
  if (state.glutenFreeCrust){
    if(activeCrust.classList.contains("active")){  
    } 
    else {
      activeCrust.classList.add(`active`)
    }
  }
  else {
    if(activeCrust.classList.contains("active")){  
      activeCrust.classList.remove(`active`)
    } 
    else {
    }
  }
}

const renderPrice = () => {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const prices = document.querySelector('.panel.price').getElementsByTagName('li');
  let pizzaPrice = 10;
  let priceUpdate = document.querySelector('.panel.price').getElementsByTagName('strong');

  if(state.pepperonni){
    prices[0].style.display = 'list-item';
    pizzaPrice += ingredients.pepperonni.price;
  } else{
    prices[0].style.display = 'none';
  }
  if(state.mushrooms){
    prices[1].style.display = 'list-item';
    pizzaPrice += ingredients.mushrooms.price;
  } else{
    prices[1].style.display = 'none';
  }
  if(state.greenPeppers){
    prices[2].style.display = 'list-item';
    pizzaPrice += ingredients.greenPeppers.price;
  } else{
    prices[2].style.display = 'none';
  }
  if(state.whiteSauce){
    prices[3].style.display = 'list-item';
    pizzaPrice += ingredients.whiteSauce.price;
  } else{
    prices[3].style.display = 'none';
  }
  if(state.glutenFreeCrust){
    prices[4].style.display = 'list-item';
    pizzaPrice += ingredients.glutenFreeCrust.price;
  } else{
    prices[4].style.display = 'none';
  }
  priceUpdate[0].innerHTML = `$${pizzaPrice}`;
    }


// This function takes care of rendering the pizza based on the state
const renderEverything = () => {
  renderPepperonni()
  renderMushrooms()
  renderGreenPeppers()
  renderWhiteSauce()
  renderGlutenFreeCrust()
  
  renderButtons()
  renderPrice()
}

renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn-pepperonni').onclick = () => {
  state.pepperonni = !state.pepperonni;
  console.log(state.pepperonni);
  renderEverything();
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn-mushrooms').onclick = () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
}

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector(`.btn-green-peppers`).onclick = () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
}

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(`.btn-sauce`).onclick = () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
}

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(`.btn-crust`).onclick = () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
}