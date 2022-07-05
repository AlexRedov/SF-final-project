import { useContext } from 'react';
import { LoadingContext } from '../../context';
import css from './popup-sign.module.css';
import img_loading from './icon-loading.png';

export default function PopupSign(props) {
    const {close, children} = props

    const {imgLoading, badDataMessage} = useContext(LoadingContext)
    
    return (
        <div className={css.popup_sign}>
            <button onClick={close} className={css.button_close}>x</button>
            {children}
            {imgLoading && (
                <img src={img_loading} alt='Загрузка' className={css.img_loading}/>
            )}
            {badDataMessage && (
                <p className={css.bad_data}>Пожалуйста проверьте введенные данные</p>
            )}
        </div>
    );
}