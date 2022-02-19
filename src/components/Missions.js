import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {missions.map((el) => (
          <MissionCard
            key={ el.index }
            name={ el.name }
            year={ el.year }
            country={ el.country }
            destination={ el.destination }
          />
        ))}
      </div>
    );
  }
}

export default Missions;
