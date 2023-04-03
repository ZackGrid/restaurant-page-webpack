
import { addTextItem } from "./home";

// Function to create a fieldset and return it
const newfieldset = (className, legend) => {

  const fieldset = document.createElement('fieldset');
  fieldset.className = className;
  fieldset.innerHTML = '<legend>' + legend + '</legend>';

  return fieldset;
}

// Function to create an input type and append to a fieldset
const newInput = (type, name, text, id, checked, field) => {

  const newElement = document.createElement('div');
  newElement.className = id;
  newElement.innerHTML =
    '<input type="' + type + '" '
    + 'name="' + name + '" '
    + 'id="' + id + '" '
    + 'value="' + id + '" '
    + checked + '>'
    + '<label for="' + id + '">'
    + text + '</label>';

  field.appendChild(newElement);
}

// Create menu/order page using functions from above and the imported addText
const menuTab = () => {

  const homeContent = document.querySelector('#content');
  const orderForm = document.createElement('form');
  const footer = document.createElement('div');
  const orderBttn = document.createElement('button');
  const resetBttn = document.createElement('button');
  const buttons = document.createElement('div');
  buttons.id = 'buttons';
  orderBttn.id = 'order-bttn';
  resetBttn.id = 'reset-bttn';
  footer.className = 'footer';
  orderForm.className = 'order-form';

  const chooseSize = newfieldset('choose-size', 'Choose the size of your pizza');
  const chooseToppings = newfieldset('choose-top', 'Choose your toppings')

  newInput('radio', 'pizza-size', 'Small', 'small', '', chooseSize);
  newInput('radio', 'pizza-size', 'Medium', 'medium', 'checked', chooseSize);
  newInput('radio', 'pizza-size', 'Large', 'large', '', chooseSize);

  newInput('checkbox', 'topping', 'Tomato Sauce', 'tomato-sauce', 'checked', chooseToppings);
  newInput('checkbox', 'topping', 'Mozzarella', 'mozzarella', 'checked', chooseToppings);
  newInput('checkbox', 'topping', 'Pepperoni', 'pepperoni', '', chooseToppings);
  newInput('checkbox', 'topping', 'Cheddar', 'cheddar', '', chooseToppings);
  newInput('checkbox', 'topping', 'Onions', 'onions', '', chooseToppings);
  newInput('checkbox', 'topping', 'Garlic', 'garlic', '', chooseToppings);
  newInput('checkbox', 'topping', 'Cucumber', 'cucumber', 'checked', chooseToppings);
  newInput('checkbox', 'topping', 'Pineapple', 'pineapple', '', chooseToppings);
  newInput('checkbox', 'topping', 'Bacon', 'bacon', '', chooseToppings);
  newInput('checkbox', 'topping', 'Zucchini', 'zucchini', '', chooseToppings);
  newInput('checkbox', 'topping', 'Sausage', 'sausage', '', chooseToppings);
  newInput('checkbox', 'topping', 'Fried Chicken', 'fried-chicken', '', chooseToppings);


  addTextItem('Copyright&copy; Kramerica Industries', 'kramerica-copyright', footer);


  orderBttn.innerHTML = 'ORDER PIZZA';
  orderBttn.setAttribute('type', 'submit');
  resetBttn.innerHTML = 'RESET ORDER';
  resetBttn.setAttribute('type', 'reset');


  orderForm.appendChild(chooseSize);
  orderForm.appendChild(chooseToppings);
  buttons.appendChild(orderBttn);
  buttons.appendChild(resetBttn);
  orderForm.appendChild(buttons);
  homeContent.appendChild(orderForm);
  homeContent.appendChild(footer);
}

export default menuTab;


