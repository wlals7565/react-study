import styles from './CSSModule.module.css';
const CSSModule2 = () => {
  return (
    <div className={`${styles.wrapper} ${styles.inverted}`}>
      안녕하세요, 저는 <span className='something'>CSS Modle</span>
    </div>
  )
}

export default CSSModule2;