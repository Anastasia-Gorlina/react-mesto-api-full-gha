import PopupWithForm from './PopupWithForm';
import {useContext, useEffect, useState} from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';

function EditProfilePopup({isOpen, onClose, onUpdateUser, buttonText}) {
      // Подписка на контекст
      const currentUser = useContext(CurrentUserContext);
      // Стейт, в котором содержится значение инпута - name, description
      const [name, setName] = useState('');
      const [description, setDescription] = useState('');
  
      // Обработчики изменения инпута обновляет стейт
      function handleChangeName(e) {
          setName(e.target.value);
      }
  
      function handleChangeDescription(e) {
          setDescription(e.target.value);
      }
  
      // После загрузки текущего пользователя из API
      // его данные будут использованы в управляемых компонентах.
      useEffect(() => {
          setName(currentUser.name);
          setDescription(currentUser.about);
      }, [currentUser, isOpen]); 
  
      function handleSubmit(e) {
          // Запрещаем браузеру переходить по адресу формы
          e.preventDefault();
  
          // Передаём значения управляемых компонентов во внешний обработчик
          onUpdateUser({
              name,
              about: description,
          });
      }

return (
  <PopupWithForm 
      name = {'edit'} title = {'Редактировать профиль'}
      isOpen = {isOpen} onClose = {onClose}
      buttonText = {buttonText} onSubmit={handleSubmit}>
        <div className="popup__container">
          <input
            value={name || ''}
            onChange={handleChangeName}
            type="text"
            name="popup__appellation"
            placeholder="Введите имя"
            minLength="2"
            maxLength="40"
            required
            className="popup__profile popup__profile_name"
            id="profile-edit-name">
            </input>
            <span className="popup__error"></span>
          </div>
          <div className="popup__container">
          <input
            value={description || ''} 
            onChange={handleChangeDescription}
            type="text"
            name="popup__inf"
            placeholder="Введите описание"
            minLength="2"
            maxLength="200"
            required
            className="popup__profile popup__profile_status"
            id="profile-edit-information"></input>
          <span className="popup__error"></span>
        </div>
    </PopupWithForm>
   );
}


export default EditProfilePopup;