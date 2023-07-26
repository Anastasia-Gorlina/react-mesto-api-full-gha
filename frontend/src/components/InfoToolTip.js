function InfoToolTip({isOpen, onClose, info}) {

    return ( 
        <section className={`popup ${isOpen ? 'popup_opened' : ''}`} >
            <div className="popup__container">
                <button id="closeButton" type ="button" aria-label="close" onClick={onClose} className="popup__close-button popup__close-button_type_card"></button>
                    <div >
                        <img
                            className='popup__infoToolTip_image'
                            src={info.image}
                            alt={info.text}
                        />
                    <p className='popup__infoToolTip_text'>{info.text}</p>
                </div>
            </div>
        </section>
        );
    }
export default InfoToolTip;