import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="container-planetas">
          {planets.map((el) => (
            <PlanetCard key={ el.name } planetName={ el.name } planetImage={ el.image } />
          ))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
