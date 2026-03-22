// targeting the user card
const userCardEle = document.getElementById('userCard');
const userId = userCardEle.getAttribute("data-user-id");
console.log(userId);
const userRole = userCardEle.getAttribute("data-user-role");
console.log(userRole);


userCardEle.setAttribute('data-user-role', 'super-admin');

userCardEle.setAttribute('data-user-position', 'Engineer');

console.log(userCardEle);


