const Donation = () => {
    return(
        <section style={{display : "flex" , justifyContent : "space-around", padding : "2rem"}}>
            <div style={{border : "1px solid #ccc", padding : "1rem" , "width" : "200px"}}>
                <h3>Education</h3>
                <p>
                    <p>Support schools for education and supplies</p>
                </p>
                <button>Donate Now</button>
            </div>
            <div style={{border : "1px solid #ccc", padding : "1rem" , "width" : "200px"}}>
                <h3>Health Care</h3>
                <p>
                    <p>Provide health care for families</p>
                </p>
                <button>Donate Now</button>
            </div>

            <div style={{border : "1px solid #ccc", padding : "1rem" , "width" : "200px"}}>
                <h3>Foods</h3>
                <p>
                    <p>Provide food for the needy people</p>
                </p>
                <button>Donate Now</button>
            </div>
        </section>
    )
}

export default Donation;