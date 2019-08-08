import React from 'react';
import styles from './userCard.module.scss';
import link from './../../assets/images/nopic.png';
import PropTypes from 'prop-types';

const UserCard = ({ name, surname, city, email, phone }) => {
  return (
    <div className={styles.container}>
      <img className={styles.userPic} src={link} alt="User pc" />
      <div className={styles.infoContainer}>
        <table>
          <tbody>
            <tr>
              <td>Name:</td>
              <td>{name}</td>
            </tr>
            <tr>
              <td>Surname:</td>
              <td>{surname}</td>
            </tr>
            <tr>
              <td>City:</td>
              <td>{city}</td>
            </tr>
            <tr>
              <td>E-mail:</td>
              <td>{email}</td>
            </tr>
            <tr>
              <td>Phone:</td>
              <td>{phone}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default UserCard;
