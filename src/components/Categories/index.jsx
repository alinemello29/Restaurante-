import styles from './Categories.module.css';
import Image from 'next/image';
import Entrada from '../../../public/assets/entrada.png';
import Massa from '../../../public/assets/massa.png';
import Carne from '../../../public/assets/carne.png';
import Bebidas from '../../../public/assets/bebidas.png';
import Salada from '../../../public/assets/salada.png';
import Sobremesa from '../../../public/assets/sobremesa.png';


export default function Categories (props) {
    const handleSelectedBtn = (category) => props.selectedBtn == category && 
    styles.selectedBtn;

    return(
        <section className={styles.categories}>
            <button onClick={props.onClickEntradas} 
            className={`${styles.btn} ${handleSelectedBtn('Entradas')}`}>
                <Image src={Entrada} alt='prato-de-entrada'/>
                <span>Entradas</span>
            </button>
            <button onClick={props.onClickMassas}
            className={`${styles.btn} ${handleSelectedBtn('Massas')}`}>
                <Image src={Massa} alt='prato-de-macarrao'/>
                <span>Massas</span>
            </button>
            <button onClick={props.onClickCarnes}
            className={`${styles.btn} ${handleSelectedBtn('Carnes')}`}>
                <Image src={Carne} alt='bife'/>
                <span>Carnes</span>
            </button>
            <button onClick={props.onClickBebidas}
            className={`${styles.btn} ${handleSelectedBtn('Bebidas')}`}>
                <Image src={Bebidas} alt='copos-de-cerveja'/>
                <span>Bebidas</span>
            </button>
            <button onClick={props.onClickSaladas}
            className={`${styles.btn} ${handleSelectedBtn('Saladas')}`}>
                <Image src={Salada} alt='prato-de-salada'/>
                <span>Saladas</span>
            </button>
            <button onClick={props.onClickSobremesas}
            className={`${styles.btn} ${handleSelectedBtn('Sobremesas')}`}>
                <Image src={Sobremesa} alt='taca-de-sorvete'/>
                <span>Sobremesas</span>
            </button>
        </section>
    )
}