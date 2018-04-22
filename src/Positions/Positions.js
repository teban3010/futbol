import Position from './Position';
import PropTypes from 'prop-types';
import React from 'react';
import * as styles from './Positions.module.css';

const Positions = ({ positions }) => {
  const topScore = Math.max(...positions.map((position) => position.Puntos));

  return (
    <div className="mv4 mv5-ns">
      <h2 className="f4 f3-ns mb4 mb5-ns mt0 normal tc">Tabla de posiciones</h2>
      <div className="f7 flex items-center justify-end mb3 mt0">
        <span className="b">Ordenado por:</span>
        <span className="ml2">PT, PG, PJ y Nombre</span>
      </div>
      <div className="b b--black-20 bg-black-10 bl br bt flex">
        <div className={`b--black-20 bb br ${styles.cellNumber} flex justify-end pa1 pa2-ns`}>
          <span>#</span>
        </div>
        <div className={`b--black-20 bb br ${styles.cellName} pa1 pa2-ns`}>
          <span>Nombre</span>
        </div>
        <div className={`b--black-20 bb br ${styles.cellNumber} flex justify-end pa1 pa2-ns`}>
          <span>PJ</span>
        </div>
        <div className={`b--black-20 bb br ${styles.cellNumber} flex justify-end pa1 pa2-ns`}>
          <span>PG</span>
        </div>
        <div className={`b--black-20 bb br ${styles.cellNumber} flex justify-end pa1 pa2-ns`}>
          <span>PE</span>
        </div>
        <div className={`b--black-20 bb br ${styles.cellNumber} flex justify-end pa1 pa2-ns`}>
          <span>PP</span>
        </div>
        <div className={`b--black-20 bb ${styles.cellNumber} flex justify-end pa1 pa2-ns`}>
          <span>PT</span>
        </div>
      </div>
      <div className="b--black-20 bl">
        {positions.map((position, index) => (
          <Position
            key={position['Jugador/a']}
            position={position}
            index={index}
            totalPlayers={positions.length}
            topScore={topScore}
          />
        ))}
      </div>
    </div>
  );
};

Positions.propTypes = {
  positions: PropTypes.arrayOf(Position.propTypes.position)
};

export default Positions;
