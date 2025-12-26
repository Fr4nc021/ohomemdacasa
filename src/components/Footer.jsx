import Logo from '../assets/logo.png'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <div className={styles.logoBox}>
            <img src={Logo} alt="Logo O Homem da Casa" className={styles.logo} />
          </div>
          <span className={styles.logoText}>O Homem da Casa</span>
        </div>
        <p className={styles.copyright}>
          © 2025 O Homem da Casa. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer