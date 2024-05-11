import { TShirt } from '../components/TShirt';
import { TShirtSetup } from '../components/TShirtSetup';
import './style.css';
import { useState } from 'react';

export const HomePage = () => {
  const [type, setType] = useState('normalNoSleeve');
  const [color, setColor] = useState('yellow');
  const [print, setPrint] = useState('Ahoj světe');

  const handlePrint = (value) => {
    setPrint(value)
  };

  const handleColor = (value) => {
    setColor(value)
  };

  const handleType = (value) => {
    setType(value);
  }
 
  return (
    <div className="container">
      <div className="tshirt-panel">
        <div className="tshirt-panel__tshirt">
          <TShirt type={type} color={color} print={print}/>
        </div>
        <div className="tshirt-panel__setup">
          <h2>Možnosti:</h2>
          <TShirtSetup onSetPrint={handlePrint} onSetColor={handleColor} onSetType={handleType}/>
        </div>
      </div>
    </div>
  );
};
