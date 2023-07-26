import PopupWithForm from './PopupWithForm';
import { useRef, useEffect} from 'react';

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar, buttonText}) {
  const avatarRef = useRef(null); 

    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();

        // Передаём значения управляемых компонентов во внешний обработчик
        onUpdateAvatar({
            avatar: avatarRef.current.value,
        });
        //e.target.reset();
    }
    
    useEffect(() => {
      if (isOpen) {
          avatarRef.current.value = '';
      }
  }, [isOpen])

    return (
        <PopupWithForm 
            name = {'change-avatar'} title = {'Обновить аватар'}
            isOpen = {isOpen} onClose = {onClose}
            buttonText = {buttonText} onSubmit={handleSubmit}>
            <div className="popup__container">
              <input 
                ref={avatarRef}
                type="url"
                name="popup__avatar-link"
                placeholder="Ссылка на картинку"
                className="popup__profile popup__profile_type_avatar"
                required = "">
              </input>
              <span className="popup__error"></span>
              </div>
        </PopupWithForm>

    );
}

export default EditAvatarPopup;