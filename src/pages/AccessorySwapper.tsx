import { useState } from 'react'
import { AccessoryProps } from '../type/type';
import { accessoriesData, primaryProduct } from '../constant/data';

const AccessorySwapper = () => {
    const [selectedAccessories, setSelectedAccessories] = useState<AccessoryProps[]>([]);

    // Function to handle selecting accessories
  const toggleAccessory = (accessory:AccessoryProps) => {
    const isAlreadySelected = selectedAccessories.find((item:AccessoryProps) => item.id === accessory.id);

    if (isAlreadySelected) {
      // If already selected, remove it
      setSelectedAccessories(selectedAccessories.filter((item:AccessoryProps) => item.id !== accessory.id));
    } else {
      // Otherwise, add it
      setSelectedAccessories([...selectedAccessories, accessory]);
    }
  };
  const addToCart =()=>{
     alert("Added cart using shopify api!")
  }
    return (
        <div className="accessory-swapper">
        <h2>{primaryProduct.name}</h2>
        <img src={primaryProduct.image} alt={primaryProduct.name} style={{ width: '200px' }} />
        <p>Price: ${primaryProduct.price}</p>
  
        <h3>Select Accessories:</h3>
        <div className="accessory-list">
          {accessoriesData.map((accessory) => (
            <div key={accessory.id} style={{ marginBottom: '10px',marginLeft:10 }}>
              <img
                src={accessory.image}
                alt={accessory.name}
                style={{ width: '100px',height:'100px' }}
              />
              <p>{accessory.name} - ${accessory.price}</p>
              <button onClick={() => toggleAccessory(accessory)} style={{background:'green'}}>
                {selectedAccessories.find((item) => item.id === accessory.id) ? 'Remove' : 'Add'}
              </button>
            </div>
          ))}
        </div>
  
        <h3>Preview:</h3>
        <div className="preview">
          <img src={primaryProduct.image} alt="Primary Product" style={{ width: '150px' }} />
          {selectedAccessories.map((accessory) => (
            <img
              key={accessory.id}
              src={accessory.image}
              alt={accessory.name}
              style={{ width: '50px', marginLeft: '10px' }}
            />
          ))}
        </div>
  
        <button onClick={addToCart} style={{ marginTop: '20px',background:'green' }}>
          Add to Cart
        </button>
      </div>
    );
}

export default AccessorySwapper
