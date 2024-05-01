import React, { useEffect, useState } from 'react';

const OrderDetails = () => {
  const [swimmingPoolFormData, setSwimmingPoolFormData] = useState({});
  const [equipmentState, setEquipmentState] = useState({});

  useEffect(() => {
    const savedSwimmingPoolFormData = localStorage.getItem('swimmingPoolEntryFormData');
    if (savedSwimmingPoolFormData) {
      setSwimmingPoolFormData(JSON.parse(savedSwimmingPoolFormData));
    }

    const savedEquipmentState = localStorage.getItem('equipmentState');
    if (savedEquipmentState) {
      setEquipmentState(JSON.parse(savedEquipmentState));
    }
  }, []);

  return (
    <div>
      <h2>Swimming Pool Entry Details</h2>
      <ul>
        <li>First Name: {swimmingPoolFormData.firstName}</li>
        <li>Last Name: {swimmingPoolFormData.lastName}</li>
        <li>Email: {swimmingPoolFormData.email}</li>
        <li>Phone Number: {swimmingPoolFormData.phoneNumber}</li>
        <li>Education Stream: {swimmingPoolFormData.educationStream}</li>
      </ul>

      <h2>Equipment Order Details</h2>
      <ul>
        <li>Equipment: {equipmentState.equipment}</li>
        <li>Student Name: {equipmentState.studentName}</li>
        <li>Equipment Issued: {equipmentState.isEquipmentIssued ? 'Yes' : 'No'}</li>
      </ul>
    </div>
  );
};

export default OrderDetails;
