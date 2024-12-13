import React from 'react';
import './App.css';

function App() {
  const goaImg = process.env.PUBLIC_URL + '/images/goa.jpg';
  const rajasthanImg = process.env.PUBLIC_URL + '/images/rajasthan.jpg';

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Travelling Website</h1>
        <nav>
          <ul>
            <li><a href="/goa">Goa</a></li>
            <li><a href="/rajasthan">Rajasthan</a></li>
          </ul>
        </nav>
      </header>
      <main>
        {/* Goa Section */}
        <div className="destination">
          <h2>Discover Goa</h2>
          <div className="destination-content">
            <img src={goaImg} alt="Goa" className="destination-image" />
            <p className="destination-description">
              Goa is a state in western India known for its stunning beaches, vibrant nightlife, Portuguese heritage, and delicious seafood. 
              It is a favorite destination for both domestic and international travelers. Visit iconic beaches like Baga, Anjuna, and Palolem, 
              and explore the beautiful churches of Old Goa.
            </p>
          </div>
        </div>
        {/* Rajasthan Section */}
        <div className="destination">
          <h2>Explore Rajasthan</h2>
          <div className="destination-content">
            <img src={rajasthanImg} alt="Rajasthan" className="destination-image" />
            <p className="destination-description">
              Rajasthan, the "Land of Kings," is known for its royal palaces, majestic forts, and rich cultural heritage. 
              Famous attractions include Jaipur's Hawa Mahal, Udaipur's lakes, Jaisalmer's sand dunes, and Jodhpur's Mehrangarh Fort. 
              Experience the traditional folk music, dance, and exquisite Rajasthani cuisine.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
