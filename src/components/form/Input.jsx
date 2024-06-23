import styles from './css/Input.module.css'

const Input = ({type, text, name, placeholder, handleOnChange, value}) => {
    return (
    <div className={styles.form_control}>
        <label htmlFor={name}>{text}</label>
        <input type={type} placeholder={placeholder} name={name} onChange={handleOnChange} value={value}/>
    </div>
    )
}

export default Input;

