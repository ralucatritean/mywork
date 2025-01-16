import profile from '../../assets/profile.jpg'
function MyProfile(){
    return(
        <div className="myProfile">
            <img className='profile' src={profile} alt="CV Icon" />
            <div className="profileInfo">
                <p id="details"style={{ fontWeight: 'bold',fontSize: '18px' }}>Grama Raluca</p>
                <p id="details">Game Developer</p>
                <p id="details">Web Lover</p>
            </div>
        </div>
    )
}
export default MyProfile;