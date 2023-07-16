import image from "./restaurant.jpg";

export default function displayHome() {

    const content = document.querySelector('#content');
    const restaurantPhoto = new Image();

    restaurantPhoto.src = image;
    restaurantPhoto.alt = "Restaurant";
    restaurantPhoto.classList.add('restaurant-img')

    content.append(restaurantPhoto);

    const homeText = document.createElement('div');
    homeText.classList.add('home-text');
    homeText.textContent = "Step into a breakfast wonderland at Rise & Dine, where every bite is a journey of flavors that will awaken your taste buds and start your day with pure culinary delight."

    content.append(homeText);


}