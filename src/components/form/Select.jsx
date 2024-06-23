import styles from './css/Select.module.css'

const Select = ({text, name, options, handleOnChange, value}) => {
    return (
    <div className={styles.form_control}>
        <label htmlFor={name}>{text}</label>
        <select 
        name={name} 
        onChange={handleOnChange} 
        value={value}>
            <option disabled selected>Selecione uma opção</option>
        </select>
    </div>
    )
}

export default Select;

