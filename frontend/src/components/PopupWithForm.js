import '../index.css';

function PopupWithForm({name, title, isOpen, onClose, children, buttonText, onSubmit}) {
    return (
        <section className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`} aria-label={title}>
          <div className="popup__container">
            <button id="closeButton" type ="button" aria-label="close" onClick={onClose} className="popup__close-button popup__close-button_type_card"></button>
          <h3 className="popup__title">{title}</h3>
          <form className={`popup__form popup-${name}-form`} name={name} onSubmit={onSubmit}>
            {children}
          <button className={`popup__button popup__sumbit-button`} type="submit">{buttonText}</button>
          </form>
        </div>
      </section>
  )
}

export default PopupWithForm;