import React, { useState } from 'react';

const DealerProfilePage = () => {
  // Temporary dealers array with dummy data
  const [dealers] = useState([
    {
      id: 1,
      username: 'Abdul Moiz',
      email: 'abdulmoiz@gmail.com',
      password: 'password',
      type: 'Dealer',
      phone: '123-456-7890',
      address: '123 Main St',
      city: 'City',
      country: 'Country',
      dealership: 'XYZ Motors',
      registration: '12345678',
    },
    
  ]);

  // State to manage dealer profile edit mode
  const [editMode, setEditMode] = useState(false);
  // State to store edited dealer profile data
  const [editedDealer, setEditedDealer] = useState({});

  // Function to handle edit button click
  const handleEditClick = () => {
    setEditMode(true);
    // Initialize edited dealer profile data with the current dealer's data
    setEditedDealer(dealers[0]);
  };

  // Function to handle form field changes
  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    // Update the edited dealer profile data
    setEditedDealer((prevDealer) => ({
      ...prevDealer,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Update dealer's profile data in the temporary array
    // (In a real application, you would typically send a request to update the data on the server)
    // Here, we'll just log the updated data to the console
    console.log('Updated Dealer Profile:', editedDealer);
    // Exit edit mode
    setEditMode(false);
  };

  return (
    <div className="container">
      <h1 className="mt-4 mb-3">Dealer Profile</h1>
      {dealers.map((dealer) => (
        <div key={dealer.id}>
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Dealer Information</h5>
              <div className="row">
                <div className="col-md-6">
                  <p className="card-text"><strong>Username:</strong> {dealer.username}</p>
                  <p className="card-text"><strong>Email:</strong> {dealer.email}</p>
                  <p className="card-text"><strong>Phone:</strong> {dealer.phone}</p>
                  <p className="card-text"><strong>Address:</strong> {dealer.address}, {dealer.city}, {dealer.country}</p>
                </div>
                <div className="col-md-6">
                  <p className="card-text"><strong>Dealership:</strong> {dealer.dealership}</p>
                  <p className="card-text"><strong>Registration:</strong> {dealer.registration}</p>
                </div>
              </div>
              {!editMode ? (
                <button className="btn btn-primary" onClick={handleEditClick}>Edit Profile</button>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input
                          type="text"
                          id="username"
                          name="username"
                          value={editedDealer.username}
                          onChange={handleFieldChange}
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={editedDealer.email}
                          onChange={handleFieldChange}
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="phone">Phone:</label>
                        <input
                          type="text"
                          id="phone"
                          name="phone"
                          value={editedDealer.phone}
                          onChange={handleFieldChange}
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="address">Address:</label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          value={editedDealer.address}
                          onChange={handleFieldChange}
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="city">City:</label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={editedDealer.city}
                          onChange={handleFieldChange}
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="country">Country:</label>
                        <input
                          type="text"
                          id="country"
                          name="country"
                          value={editedDealer.country}
                          onChange={handleFieldChange}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="dealership">Dealership:</label>
                        <input
                          type="text"
                          id="dealership"
                          name="dealership"
                          value={editedDealer.dealership}
                          onChange={handleFieldChange}
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="registration">Registration:</label>
                        <input
                          type="text"
                          id="registration"
                          name="registration"
                          value={editedDealer.registration}
                          onChange={handleFieldChange}
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary">Save Changes</button>
                </form>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DealerProfilePage;
