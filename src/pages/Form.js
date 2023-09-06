import React, { useState } from 'react';
import { addClub } from '../services/clubs.js';
import NotFound from './NotFound.js';
import Loading from '../components/Loading.js';
import Success from '../components/Success.js';

function Form() {
  const [status, setStatus] = useState('form');

  function handleSubmit(e){
    e.preventDefault();
    setStatus('loading');
    const formData = new FormData(e.target);
    addClub(formData)
      .then((res) => {setStatus('success');})
      .catch((err) => {setStatus('');});
  }

  const form =(
    <form className="form-new-club mb-5 p-3" encType="multipart/form-data" onSubmit={handleSubmit}>
      <h1 className="text-center">Add/Edit your club</h1>
      <div style={{width:"70%", margin:"0 auto"}}>
        <div className="mb-3">
          <label htmlFor="clubName" className="form-label">Club name</label>
          <input required type="text" className="form-control" id="clubName" name="name" placeholder="Boca Juniors" />
        </div>

        <div className="mb-3">
          <label htmlFor="shortClubName" className="form-label">Short name</label>
          <input required type="text" className="form-control" id="shortClubName" name="shortName" placeholder="Boca" />
        </div>

        <div className="mb-3">
          <label htmlFor="tlaClubName" className="form-label">Three-letter acronym</label>
          <input required type="text" className="form-control disabled" id="tlaClubName" name="tla" placeholder="BOC" />
        </div>

        <div className="mb-3">
          <label htmlFor="clubLogo" className="form-label">Club Logo</label>
          <input required className="form-control" type="file" id="clubLogo" name="logo_file"/>
        </div>

        <div className="mb-3">
          <label htmlFor="clubCountry" className="form-label">Country (location)</label>
          <input required type="text" className="form-control" id="clubCountry" name="country" placeholder="Argentina" />
        </div>
        
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input required type="email" className="form-control" id="email" name="email" placeholder="myteam@example.com" />
        </div>

        <div className="mb-3">
          <label htmlFor="clubAddress" className="form-label">Address</label>
          <input required type="text" className="form-control" id="clubAddress" name="address" placeholder="Brandsen 805" />
        </div>

        <div className="mb-3">
          <label htmlFor="clubWebsite" className="form-label">Website</label>
          <input required type="text" className="form-control" id="clubWebsite" name="website" placeholder="www.bocajuniors.com" /> 
        </div>

        <div className="mb-3">
          <label htmlFor="clubPhone" className="form-label">Phone number</label>
          <input required type="text" className="form-control" id="clubPhone" name="phone" placeholder="45681234" />
        </div>

        <div className="mb-3">
          <label htmlFor="clubFoundation" className="form-label">Foundation year</label>
          <input required type="number" className="form-control" id="clubFoundation" name="founded" placeholder="1920" />
        </div>

        <div className="row">
          <div className="col mb-3">
            <label htmlFor="clubColor1" className="form-label">Color 1</label>
            <input required type="text" className="form-control" id="clubColor1" name="color1" placeholder="Blue"/>
          </div>
          <div className="col mb-3">
            <label htmlFor="clubColor2" className="form-label">Color 2</label>
            <input required type="text" className="form-control" id="clubColor2" name="color2" placeholder="Yellow"/>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="clubVenue" className="form-label">Venue</label>
          <input required type="text" className="form-control" id="clubVenue" name="venue" placeholder="La Bombonera" />
        </div>
      </div>
        
      <button className="btn btn-warning ms-5" type="submit">Add/Edit Club</button>
    </form>
  );

  if (status === 'form') return form;
  if (status === 'loading') return <Loading />;
  if (status === 'success') return <Success />;
  else return <NotFound />;




}

export default Form;
