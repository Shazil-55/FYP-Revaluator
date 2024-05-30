import { useState } from 'react';
import styles from '@/app/styles/toggleButton.css';

const ToggleButton = ({ onChange }) => {
  const [pricing, setPricing] = useState('monthly');

  const handleToggle = (e) => {
    const value = e.target.value;
    setPricing(value);
    onChange(value); // Call the onChange function with the selected value
  };

  return (
    <>
      <div className="pricing-toggle">
        <input
          type="radio"
          id="pricing-toggle-monthly"
          name="pricing"
          value="monthly"
          checked={pricing === 'monthly'}
          onChange={handleToggle}
        />
        <label className="radio-button" htmlFor="pricing-toggle-monthly">
          Monthly
        </label>
        <input
          type="radio"
          id="pricing-toggle-annually"
          name="pricing"
          value="annually"
          checked={pricing === 'annually'}
          onChange={handleToggle}
        />
        <label className="radio-button" htmlFor="pricing-toggle-annually">
          Annually
        </label>
      </div>
    </>
  );
};

export default ToggleButton;
