//! select the target element
const appContainer = document.getElementById('app');
const generateBtn = document.getElementById('generate');

//! data source (10 profiles)
const profiles = [
    { name: "Tony Stark", desc: "Genius billionaire engineer" },
    { name: "Steve Rogers", desc: "Super soldier and leader" },
    { name: "Bruce Banner", desc: "Scientist with anger issues 😄" },
    { name: "Natasha Romanoff", desc: "Elite spy and assassin" },
    { name: "Clint Barton", desc: "Master archer" },
    { name: "Peter Parker", desc: "Friendly neighborhood hero" },
    { name: "Thor", desc: "God of Thunder ⚡" },
    { name: "Wanda Maximoff", desc: "Reality bending powers" },
    { name: "Doctor Strange", desc: "Master of mystic arts" },
    { name: "Black Panther", desc: "King of Wakanda" }
];

//! pointer to track current profile
let currentIndex = 0;

//! function to create one profile card per click
function createProfileCard() {

    // stop when all profiles are generated
    if (currentIndex >= profiles.length) {
        alert("All profiles generated");
        return;
    }

    const profileCard = document.createElement("div");
    profileCard.className = 'profile-card';

    // image
    const profileImage = document.createElement('img');
    profileImage.src = 'https://cdn.pixabay.com/photo/2016/11/15/22/32/christmas-1827719_1280.png';
    profileImage.className = 'img';

    // name
    const profileHeading = document.createElement('h3');
    //*                                    main imp
    profileHeading.textContent = profiles[currentIndex].name;

    // description
    const profileDescription = document.createElement('p');
    //*                                    main imp
    profileDescription.textContent = profiles[currentIndex].desc;

    // append elements
    profileCard.appendChild(profileImage);
    profileCard.appendChild(profileHeading);
    profileCard.appendChild(profileDescription);

    appContainer.appendChild(profileCard);

    // move to next profile
    currentIndex++;
}

//! event listener
generateBtn.addEventListener('click', createProfileCard);