import styles from './CSSModule.module.css';
const CSSModule1 = () => {
  return (
    <div className={styles.wrapper}>
      안녕하세요, 저는 <span className='something'>CSS Modle</span>
    </div>
  )
}

export default CSSModule1;