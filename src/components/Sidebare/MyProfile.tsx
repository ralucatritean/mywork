import { useNavigate } from 'react-router-dom';
import profile from '../../assets/profile.jpg'
function MyProfile() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    }
    return (
        <button className='btn-profile'
            onClick={handleClick}>
            <div className="myProfile">
                <img className='profile' src={profile} alt="CV Icon" />
                <div className="profileInfo sidebar-text">
                    <p id="details" style={{ fontWeight: 'bold', fontSize: '18px' }}>Grama Raluca</p>
                    <p id="details">Game Developer</p>
                    <p id="details">Web Lover</p>
                </div>
            </div></button>
    )
}
export default MyProfile;