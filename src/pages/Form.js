import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { addClub, getClub, editClub } from '../services/clubs.js';
import NotFound from './NotFound.js';
import Loading from '../components/Loading.js';
import Success from '../components/Success.js';
import ActionButton from '../components/ActionButton.js';


function Form(props) {
  const { clubTla } = useParams();
  const [status, setStatus] = useState('form');

  const [name, setName] = useState('');
  const [shortName, setShortName] = useState('');
  const [tla, setTla] = useState('');
  const [country, setCountry] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [webiste, setWebsite] = useState('');
  const [email, setEmail] = useState('');
  const [founded, setFounded] = useState('');
  const [clubColor1, setClubColor1] = useState('');
  const [clubColor2, setClubColor2] = useState('');
  const [venue, setVenue] = useState('');

  function handleAdd(e) {
    e.preventDefault();
    setStatus('loading');
    const formData = new FormData(e.target);
    addClub(formData)
      .then((res) => {setStatus('success');})
      .catch((err) => {setStatus('');});
  }

  function handleEdit(e) {
    e.preventDefault();
    setStatus('loading');
    const formData = new FormData(e.target);
    editClub(clubTla, formData)
      .then((res) => {setStatus('success')})
      .catch((err) => {setStatus('');});
  }

  useEffect(() => {
    if(clubTla) {
      getClub(clubTla).then((clubArr) => {
        const club = clubArr[0];
        setName(club.name || '');
        setShortName(club.shortName || '');
        setTla(club.tla || '');
        setCountry(club.area.name || '');
        setAddress(club.address || '');
        setPhone(club.phone || '');
        setWebsite(club.website || '');
        setEmail(club.email || '');
        setFounded(club.founded || '');
        setClubColor1(club.clubColors.split('/')[0].trim() || '');
        setClubColor2(club.clubColors.split('/')[1].trim() || '');
        setVenue(club.venue || '');
      });
    }

  },[clubTla]);

  const form =(
    <form className="form-new-club mb-5 p-2" encType="multipart/form-data" onSubmit={props.action === 'Add' ? handleAdd: handleEdit}>
      <h1 className="text-center">{props.action === 'Add' && `Add club`}</h1>
      <h1 className="text-center">{props.action === 'Edit' && `Edit club`}</h1>
      <div style={{width:"70%", margin:"0 auto"}}>
        <div className="mb-3">
          <label htmlFor="clubName" className="form-label">Club name</label>
          <input required type="text" className="form-control" id="clubName" name="name" value={name} 
            onChange={e => setName(e.target.value)} placeholder="Boca Juniors"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="shortClubName" className="form-label">Short name</label>
          <input required type="text" className="form-control" id="shortClubName" name="shortName" value={shortName}
            onChange={e => setShortName(e.target.value)} placeholder="Boca"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tlaClubName" className="form-label">Three-letter acronym  <span style={{color: 'white'}}>(capital letters)</span></label>
          <input required type="text" className="form-control disabled" id="tlaClubName" name="tla" pattern='[A-Z]{3}'
            placeholder="BOC" value={tla} onChange={e => setTla(e.target.value)} readOnly={props.action === 'Edit' && true}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="clubLogo" className="form-label">Club Logo</label>
          <input required className="form-control" type="file" id="clubLogo" name="logo_file"/>
        </div>

        <div className="mb-3">
          <label htmlFor="clubCountry" className="form-label">Country (location)</label>
          <input required type="text" className="form-control" id="clubCountry" name="country" placeholder="Argentina" value={country}
            onChange={e => setCountry(e.target.value)}
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input required type="email" className="form-control" id="email" name="email" placeholder="myteam@example.com" value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="clubAddress" className="form-label">Address</label>
          <input required type="text" className="form-control" id="clubAddress" name="address" placeholder="Brandsen 805" value={address}
            onChange={e => setAddress(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="clubWebsite" className="form-label">Website</label>
          <input required type="text" className="form-control" id="clubWebsite" name="website" placeholder="www.bocajuniors.com" 
            value={webiste} onChange={e => setWebsite(e.target.value)}
          /> 
        </div>

        <div className="mb-3">
          <label htmlFor="clubPhone" className="form-label">Phone number</label>
          <input required type="text" className="form-control" id="clubPhone" name="phone" placeholder="45681234" value={phone}
            onChange={e => setPhone(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="clubFoundation" className="form-label">Foundation year</label>
          <input required type="number" className="form-control" id="clubFoundation" name="founded" placeholder="1920" value={founded}
            onChange={e => setFounded(e.target.value)}
          />
        </div>

        <div className="row">
          <div className="col mb-3">
            <label htmlFor="clubColor1" className="form-label">Color 1</label>
            <input required type="text" className="form-control" id="clubColor1" name="color1" placeholder="Blue"
              value={clubColor1} onChange={e => setClubColor1(e.target.value)}
            />
          </div>
          <div className="col mb-3">
            <label htmlFor="clubColor2" className="form-label">Color 2</label>
            <input required type="text" className="form-control" id="clubColor2" name="color2" placeholder="Yellow"
              value={clubColor2} onChange={e => setClubColor2(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="clubVenue" className="form-label">Venue</label>
          <input required type="text" className="form-control" id="clubVenue" name="venue" placeholder="La Bombonera" 
            value={venue} onChange={e => setVenue(e.target.value)}
          />
        </div>
      </div>

      <div className="text-center mt-1">
        {props.action === 'Add' && <ActionButton type="submit" text="Add Club"></ActionButton>}
        {props.action === 'Edit' && <ActionButton type="submit" text="Edit Club"></ActionButton>}
      </div>


    </form>
  );

  if (status === 'form') return form;
  if (status === 'loading') return <Loading />;
  if (status === 'success') return <Success />;
  else return <NotFound />;
}

export default Form;
