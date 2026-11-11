import React, { useState, useRef } from 'react';
import styles from './Profile.module.css';
import { useAuth } from '../hooks/useAuth';

export default function Profile() {
  const { logout } = useAuth();
  const fileInputRef = useRef(null);

  const [name, setName] = useState(localStorage.getItem('userName') || 'Sashka');
  const [avatar, setAvatar] = useState(localStorage.getItem('userAvatar') || null);
  const [isEditingName, setIsEditingName] = useState(false);
  const [tempName, setTempName] = useState(name);

  const [email, setEmail] = useState(
    localStorage.getItem('userEmail') || 'markinaoleksandra0@gmail.com'
  );
  const [phone, setPhone] = useState(localStorage.getItem('userPhone') || '+380 00 000 00 00');
  const [isEditingContacts, setIsEditingContacts] = useState(false);
  const [tempEmail, setTempEmail] = useState(email);
  const [tempPhone, setTempPhone] = useState(phone);

  const handleSaveName = () => {
    setName(tempName);
    localStorage.setItem('userName', tempName);
    setIsEditingName(false);
  };

  const handleSaveContacts = () => {
    setEmail(tempEmail);
    setPhone(tempPhone);
    localStorage.setItem('userEmail', tempEmail);
    localStorage.setItem('userPhone', tempPhone);
    setIsEditingContacts(false);
  };

  const handleAvatarUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
        localStorage.setItem('userAvatar', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className={styles.profileSection}>
      <div className={styles.headerCentered}>
        <div
          className={styles.avatarWrapper}
          onClick={() => fileInputRef.current.click()}
          title="Change photo"
        >
          {avatar ? (
            <img src={avatar} alt="Avatar" className={styles.avatarImg} />
          ) : (
            <div className={styles.avatarPlaceholder}>👤</div>
          )}
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleAvatarUpload}
          />
        </div>

        {isEditingName ? (
          <div className={styles.editNameBox}>
            <input
              type="text"
              value={tempName}
              onChange={(e) => setTempName(e.target.value)}
              className={styles.nameInput}
            />
            <button onClick={handleSaveName} className={styles.saveBtn}>
              Save
            </button>
          </div>
        ) : (
          <h1 className={styles.userName}>
            {name}
            <span onClick={() => setIsEditingName(true)} className={styles.editIcon}>
              ✏️
            </span>
          </h1>
        )}
        <p className={styles.status}>Status: experienced fish</p>
      </div>

      <div className={styles.contactCard}>
        {isEditingContacts ? (
          <div className={styles.editContactsBox}>
            <input type="email" value={tempEmail} onChange={(e) => setTempEmail(e.target.value)} />
            <input type="tel" value={tempPhone} onChange={(e) => setTempPhone(e.target.value)} />
            <button onClick={handleSaveContacts} className={styles.saveBtn}>
              Save info
            </button>
          </div>
        ) : (
          <>
            <p>
              Email: <strong>{email}</strong>
            </p>
            <p>
              Phone: <strong>{phone}</strong>
            </p>
            <button onClick={() => setIsEditingContacts(true)} className={styles.changeInfoText}>
              Change info
            </button>
          </>
        )}
      </div>

      <button onClick={logout} className={styles.logoutBtn}>
        Log out
      </button>
    </section>
  );
}
