import '../index.css';
import {useContext} from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';

function Card({onCardClick, onCardLike, onCardDelete, card}) {
  const currentUser = useContext(CurrentUserContext);
  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = card.owner._id === currentUser._id;
  // Создаём переменную, которую после зададим в `className` для кнопки удаления
  const cardDeleteButtonClassName = (
      `element__delete_button ${isOwn ? 'element__delete_button opacity-buttons' : 'element__delete_button_hover'}`
  ); 
  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = (
      `element__vector ${isLiked ? 'element__vector_active' : 'element__vector_hover'}`
  );
    function handleClick() {
        onCardClick(card);
    }

    function handleLikeClick() {
      onCardLike(card);
  }

    function handleDeleteClick () {
        onCardDelete (card);
    }

    return (
        <article className="element">
        <img className="element__image" src={card.link} alt={card.alt} onClick={handleClick}/>
        {isOwn && <button onClick={handleDeleteClick} type="button" aria-label="Кнопка удалить" className={cardDeleteButtonClassName}></button>}
        <div className="element__inf">
          <h2 className="element__title">{card.name}</h2>
          <div className="element__vector-container">
            <button type="button" aria-label="Кнопка лайк" /*className="element__vector"*/ onClick={handleLikeClick} className = {cardLikeButtonClassName} />
            <span className="element__vector-counter">{card.likes.length}</span>
          </div>
        </div>
      </article>
    );
}

export default Card; 