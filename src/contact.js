export default function displayContact() {

    const content = document.querySelector('#content');
    const contactInfoContainer = document.createElement('div');
    contactInfoContainer.classList.add('contact');
    contactInfoContainer.textContent = "";

    const textContent = ["Restaurant Name: Rise and Dine", "Address: 123 Sunny Street, Pancakeville, Brunchington", "Phone: (555) 123-4567", "Email: info@riseanddinebrunch.com",
        "Website: www.riseanddinebrunch.com", "Social Media: @riseanddinebrunch"];

    textContent.forEach(str => {
        let textBox = document.createElement('div');
        textBox.textContent = str;
        contactInfoContainer.append(textBox);
    });

    content.append(contactInfoContainer);


}