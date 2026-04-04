const ProfileCard = () => {
    const imgUrl = 'https://cdn.pixabay.com/photo/2024/02/24/22/37/ai-generated-8594846_1280.png';
    const name = 'tony stark';
    const programmingLanguage = 'Java, MERN';
    const hobbies = ['singing','volley ball','drawing','coding'];
    const bio = 'hi i am tony stark and i love building iron man suit"s';

    return (
        <div style={{padding : "2rem", fontFamily : "Arial"}}>
            <h1>Welcome to {name} 's profile</h1>
            <img style={{width : "150px", borderRadius : "40px"}} src={imgUrl} alt="profile" />
            <h4>Favourite Programming Language is {programmingLanguage}</h4>
            <p>
                <strong>{bio}</strong>
            </p>
            <h2>Hobbies Are : </h2>
            <ul>
                {hobbies.map((e, index) => {
                    return <li key={index}>{e}</li>
                })}
            </ul>
        </div>
    )
}

export default ProfileCard;