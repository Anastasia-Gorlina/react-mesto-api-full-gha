function ImagePopup({card, isOpen, onClose}) {
    
    return(
        <div className={`popup popup_type_image ${card && isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__figure-container">
            <figure className="popup__figure">
                <button onClick={onClose} type="button" aria-label="Кнопка закрыть попап" className="popup__close-button popup__close-button_image"></button>
                <img className="popup__image" 
                src={card ? card.link : ''}
                alt= {card ? card.alt : ''} />
                <figcaption className="popup-image-status">{card? card.name : ''}</figcaption>
                </figure>
            </div>
        </div>
    )
}

export default ImagePopup; 