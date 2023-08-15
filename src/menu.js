const menuContainer = document.createElement('div');


export default function displayMenu() {


    menuContainer.classList.add('menu-container');
    menuContainer.textContent = "";
    const content = document.querySelector('#content');


    const menuTitle = document.createElement('div');
    menuTitle.classList.add('menu-title');
    menuTitle.textContent = "Menu";
    menuContainer.append(menuTitle);
    content.append(menuContainer);

    createMenuItem("Classic American Breakfast", "Two eggs any style, bacon or sausage links, hash browns or home fries, toast or biscuit.");
    createMenuItem("Fluffy Pancakes", "A stack of fluffy buttermilk pancakes with maple syrup and choice of toppings: fresh berries, chocolate chips, or whipped cream.");
    createMenuItem("French Toast", "Thick slices of French toast with powdered sugar and cinnamon, served with warm maple syrup and a side of fresh fruit.");
    createMenuItem("Breakfast Burrito", "Scrambled eggs, crumbled chorizo or bacon, cheese, and sautéed peppers and onions wrapped in a flour tortilla.");
    createMenuItem("Veggie Omelette", "Three-egg omelette with sautéed mushrooms, onions, spinach, and bell peppers, your choice of cheese.");
    createMenuItem("Eggs Benedict", "Poached eggs, Canadian bacon or smoked salmon, and hollandaise sauce served on a toasted English muffin.");


}

function createMenuItem(name, description) {
    let menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    let menuItemName = document.createElement('p');
    menuItemName.textContent = name;

    let menuItemDescription = document.createElement('p');
    menuItemDescription.textContent = description;

    menuItem.append(menuItemName);
    menuItem.append(menuItemDescription);
    menuContainer.append(menuItem);
}