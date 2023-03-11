// Import the functions you need from the SDKs you need
import { db, auth, app } from './firebase.js';
import { useAuthState } from 'react-firebase-hooks/auth';
import React, { useState } from 'react';
import OrganizeCheckboxDo from './OrganizeCheckboxDo.js';
import OrganizeCheckboxDue from './OrganizeCheckboxDue.js';

export default function OrganizeCheckbox() {
  const [user, loading, error] = useAuthState(auth);

  return (
    <div className="displayType">
      <label className="container-radio">
        Do Date
        <input type="radio" name="radio" defaultChecked="checked" id="organizeCheckboxDo" />
        <span
          className="checkmark"
          onClick={(e) => {
            e.persist();
            OrganizeCheckboxDue(user);
          }}
        ></span>
      </label>
      <br />
      {/* THIS RADIO BUTTON IS CLICKABLE!!! */}
      <label className="container-radio">
        Due Date
        <input type="radio" name="radio" id="organizeCheckboxDue" />
        <span
          className="checkmark"
          onClick={(e) => {
            e.persist();
            OrganizeCheckboxDo(user);
          }}
        ></span>
      </label>
    </div>
  );
}
