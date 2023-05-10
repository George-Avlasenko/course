
const toggleBth = document.querySelector('.toggle_bth')
const toggleBthIcon = document.querySelector('.toggle_bth i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBth.onclick = function(){
  dropDownMenu.classList.toggle('open')
  const isOpen = dropDownMenu.classList.contains('open')

  toggleBthIcon.classList = isOpen
  ? 'fa-solid fa-xmark'
  : 'fa-solid fa-bars'
}

const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const bthpopup = document.querySelector('.bthLogin-popup');
const iconClose = document.querySelector('.icon-close');

const bthpopupDrop = document.querySelector('.bthLogin-popup_drop');


registerLink.addEventListener('click', ()=> {
wrapper.classList.add('active');
});   

loginLink.addEventListener('click', ()=> {
wrapper.classList.remove('active');
}); 

bthpopup.addEventListener('click', ()=> {
wrapper.classList.add('active-popup');
}); 

iconClose.addEventListener('click', ()=> {
wrapper.classList.remove('active-popup');
}); 


bthpopupDrop.addEventListener('click', ()=> {
wrapper.classList.add('active-popup');
}); 

function saveToXml() {
  // получаем данные, которые нужно сохранить в XML формате
  Email = document.getElementsByName("Email")[0].value;
  Password = document.getElementsByName("Password")[0].value;
  console.log(Email);
  console.log(Password);
  const data = {
    Email: Email,
    Password: Password,
  };

  // создаем XML документ
  const xmlDoc = document.implementation.createDocument(null, 'person');

  // создаем корневой элемент
  const rootElement = xmlDoc.documentElement;

  // добавляем элементы с данными в XML документ
  for (const [key, value] of Object.entries(data)) {
    const childElement = xmlDoc.createElement(key);
    childElement.textContent = value;
    rootElement.appendChild(childElement);
  }

  // сериализуем XML документ в строку 
  const xmlString = new XMLSerializer().serializeToString(xmlDoc);

  // создаем новый XML файл
  const fileName = 'myXmlFile.xml';
  const fileContent = xmlString;
  const file = new Blob([fileContent], { type: 'text/xml' });
  const fileUrl = URL.createObjectURL(file);

  // создаем ссылку для скачивания файла
  const downloadLink = document.createElement('a');
  downloadLink.href = fileUrl;
  downloadLink.download = fileName;

  // добавляем ссылку на страницу и симулируем клик для скачивания файла
  document.body.appendChild(downloadLink);
  downloadLink.click();

  // освобождаем URL объект после завершения скачивания файла
  URL.revokeObjectURL(fileUrl);
}



