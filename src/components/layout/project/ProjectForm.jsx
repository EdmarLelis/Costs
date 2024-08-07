import { useEffect, useState } from 'react';

import styles from './css/ProjectForm.module.css'
import Input from '../../form/Input';
import Select from '../../form/Select';
import SubmitButton from '../../form/SubmitButton';
import Card from '../../form/Card';

const ProjectForm = ({btnText}) => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/categories", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setCategories(data);
        })
        .catch((err) => console.log(err));
    }, []);

    const [selectedOption, setSelectedOption] = useState('');
    const [errorMenssage, setErrorMenssage] = useState('');

    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
        setErrorMenssage('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedOption === 'defaultOption') {
            setErrorMenssage('Escolha uma opção valida!');
            return;
        }else{

            console.log('Formulario enviado com sucesso!');
        }

    };

    
    return(
        <form className={styles.form} onSubmit={handleSubmit}>
            <Input type="text"
            text='Nome do projeto' 
            name='name'
            placeholder="Insira o nome do projeto..."/>

            <Input type="number" 
            text='Orçamento do projeto' 
            name='budget'
            placeholder="Insira o orçamento total..."/>

            <Select 
            name='category_id'
            text='Selecione a categoria'
            options={categories}
            value={selectedOption}
            handleOnChange={handleSelectChange}
        />

        
            {errorMenssage && <Card type="error" tone="light" text={errorMenssage} />}

            <SubmitButton text={btnText}/>
        </form>
    );
}

export default ProjectForm;