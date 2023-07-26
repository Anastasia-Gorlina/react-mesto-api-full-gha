import '../index.css';
import Card from './Card';
import CurrentUserContext from '../contexts/CurrentUserContext';
import {useContext} from 'react';

function Main(
  {handleEditAvatarClick, handleEditProfileClick,
  handleAddPlaceClick, onCardClick, onCardLike, onCardDelete, cards}) {

    const currentUser = useContext(CurrentUserContext);

  return (
    <main className="main">
      <section className="profile">
        <button
          className="profile__edit-avatar-button"
          onClick={handleEditAvatarClick}
          type="button"
        >
          <img
            className="profile__avatar"
            src={currentUser.avatar}
            alt="Avatar"
          />
        </button>
        <div className="profile__info">
          <div className="profile__title">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button
              type="button"
              onClick={handleEditProfileClick}
              className="profile__edit-button"
            ></button>
          </div>
          <p className="profile__status">{currentUser.about}</p>
        </div>
        <button
          type="button"
          onClick={handleAddPlaceClick}
          className="profile__button"
        ></button>
      </section>
      <section className="elements">
      {cards.map (card => {
        return <Card 
          onCardClick = {onCardClick} onCardLike = {onCardLike}
          onCardDelete = {onCardDelete} card = {card} key = {card._id}/>
        })}
      </section>
    </main>
  );
}

export default Main;