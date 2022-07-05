import { useState, useContext } from 'react';
import { RESPONSIBLE_OFFICER_TYPES, RESPONSIBLE_OFFICER_COPY } from '../../config';
import { LoadingContext } from '../../context';
import css from './form-authorization.module.css';

export default function FormAuthorization(props) {
    const {requestSignIn} = props

    const {setImgLoading, setBadDataMessage} = useContext(LoadingContext)

    const [values, setValues] = useState({
        [RESPONSIBLE_OFFICER_TYPES.EMAIL]: '',
        [RESPONSIBLE_OFFICER_TYPES.PASSWORD]: ''
    })

    
    const handleChange = (e) => {
        const fieldName = e.target.name
        setValues({...values, [fieldName]: e.target.value})
    }
    
    const handleSubmit = (e) => {
        e.preventDefault() 
        setBadDataMessage(false)
        requestSignIn(values)
        setImgLoading(true)
    }

    return (
        <div className={css.form_sign}>
            <p>Авторизация</p>
            <form onSubmit={handleSubmit}>
                <label>{RESPONSIBLE_OFFICER_COPY[RESPONSIBLE_OFFICER_TYPES.EMAIL]}<input type='email' id='signUpMail' name={[RESPONSIBLE_OFFICER_TYPES.EMAIL]}  value={values[RESPONSIBLE_OFFICER_TYPES.EMAIL]} onChange={handleChange} required/></label>
                <label>{RESPONSIBLE_OFFICER_COPY[RESPONSIBLE_OFFICER_TYPES.PASSWORD]}<input type='password' id='signUpPassword' name={[RESPONSIBLE_OFFICER_TYPES.PASSWORD]} value={values[RESPONSIBLE_OFFICER_TYPES.PASSWORD]} onChange={handleChange} required/></label>
                <button type='submit'>Войти</button>
            </form>
        </div>
    );
}