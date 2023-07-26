import PopupWithForm from './PopupWithForm';
import {useState, useEffect} from 'react';

function AddPlacePopup({isOpen, onClose, onAddPlace, buttonText}) {
    // Стейт, в котором содержится значение инпута - name, link
    const [name, setName] = useState('');
    const [link, setLink] = useState('');

    // Обработчики изменения инпута обновляет стейт
    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeLink(e) {
        setLink(e.target.value);
    }

    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();

        // Передаём значения управляемых компонентов во внешний обработчик
        const dataCard = {};
        dataCard.name = name;
        dataCard.link = link;
        onAddPlace(dataCard);
    }

    useEffect(() => {
      if (isOpen) {
          setName('');
          setLink('')
      }
  }, [isOpen])



  return (
    <PopupWithForm 
            name = {'add-card'} title = {'Новое место'}
            isOpen = {isOpen} onClose = {onClose}
            buttonText = {buttonText} onSubmit={handleSubmit}
        >
      <div className="popup__container">
        <input
          value={name || ''} 
          onChange={handleChangeName}
          type="text"
          name="popup__name"
          placeholder="Введите название"
          minLength="2"
          maxLength="30"
          className="popup__profile popup__profile_img-name"
          id="profile-add-img-name"
          required></input>
        <span className="popup__error"></span>
      </div>
          <div className="popup__container">
          <input
            value={link || ''} 
            onChange={handleChangeLink}
            required
            type="url"
            name="popup__link"
            placeholder="Ссылка на картинку"
            className="popup__profile popup__profile_img-link"></input>
          <span className="popup__error"></span>
        </div>
        </PopupWithForm>
  );
}

export default AddPlacePopup;