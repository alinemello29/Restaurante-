import styles from './SearchBox.module.css';
import Image from 'next/image';
import Lupa from '../../../public/assets/lupa.png';

export default function SearchBox (props) {
    return(
        <form className={styles.searchBox}>
            <Image src={Lupa} alt='lupa'/>
            <input className={styles.searchBox__field}
            type='text'
            placeholder='Pesquise aqui um de nossos pratos do nosso cardápio'
            value={props.value}
            onChange={props.onChange}
            />
        </form>
    )
}