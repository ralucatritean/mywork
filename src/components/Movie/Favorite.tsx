import NavBar from "./NavBar";
import "../../css//Movie.css"

function Favorite() {
        return (
            <div className="home">
                <NavBar />
                <div className="favorites-content">

                    <h2>Nici un film adaugat la favorite</h2>
                    <p>Incepe sa aduagi filme la favorite si vor aparea aici</p>
                </div>
            </div>

        );
}

export default Favorite;