import React from 'react';
import './App.css';

export default function App() {

  const [selectedDropdown, setSelectedDropdown] = React.useState(); // state variable

  const handleSelect = (event) => {

    setSelectedDropdown(event.target.value);

  }
  const renderInputBoxes = (field1, field2) => {
    return (
      <div style={{ display: 'grid', margin: '1rem', width: '10rem' }}>
        <input name={field1} type="text" placeholder={field1} style={{ marginBottom: '1rem' }} />
        <input name={field2} type="text" placeholder={field2} />
      </div >
    )
  }

  return (
    <div>
      <select onChange={(event) => handleSelect(event)}>
        <option value="chooseDevice">Choose Device</option>
        <option value="sensor">Sensor</option>
        <option value="motor">Motor</option>
        <option value="relay">Relay</option>
      </select>
      {selectedDropdown === 'sensor' && (
        renderInputBoxes('Sensor Id', 'Sensor'))}
      {selectedDropdown === 'motor' && (
        renderInputBoxes('Motor Id', 'Motor Name'))}
      {selectedDropdown === 'relay' && (
        renderInputBoxes('Relay Id', 'Relay'))
      }

    </div>
  )
}
