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
            { name: "Black Panther", desc: "King of Wakanda" },
            {name : "superman", desc : "very powerful can even take a nuclear missile"},
            {name : "wonder-women", desc : "very ancient warrior and powerful can give tough combat"}
        ];


        // at final we are gonna append everything into this
        const appId = document.getElementById('app');

        const buttonId = document.getElementById('generate')


        // current index = 0;
        let currentIndex = 0;

        function generateProfileCardByClickingButton() {

            if (currentIndex >= profiles.length) {
                return;
            }

            const profileCard = document.createElement("div");
            profileCard.className = 'container1';

            const profileImage = document.createElement('img');
            profileImage.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYow01LyKq89TROj1CaHvNVF1G1uyPp_wdpg&s';
            profileImage.className = 'image'; // FIX

            const profileHeading = document.createElement('h3');

            profileHeading.textContent = profiles[currentIndex].name;

            const profileDescription = document.createElement('p');
            profileDescription.textContent = profiles[currentIndex].desc;

            profileCard.appendChild(profileImage);
            profileCard.appendChild(profileHeading);
            profileCard.appendChild(profileDescription);
            appId.appendChild(profileCard);

            currentIndex++; // CRITICAL
        }
        buttonId.addEventListener('click', generateProfileCardByClickingButton);