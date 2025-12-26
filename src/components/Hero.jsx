import { useEffect, useRef, useState } from 'react'
import { MessageCircle, Phone } from 'lucide-react'
import Logo from '../assets/logo.png'
import styles from './Hero.module.css'

const Hero = () => {
  const textRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger animation after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const handleWhatsApp = () => {
    const phone = '555492199212'
    const message = 'Olá! Gostaria de solicitar um orçamento.'
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank')
  }

  const handleCall = () => {
    const phone = '+555492199212' 
    window.open(`tel:${phone}`, '_self')
  }

  return (
    <section className={styles.hero}>
      <div className={styles.logoContainer}>
        <img src={Logo} alt="Logo O Homem da Casa" className={styles.logo} />
        <div 
          ref={textRef}
          className={`${styles.logoText} ${isVisible ? styles.visible : ''}`}
        >
          O HOMEM DA CASA
        </div>
      </div>

      <h1 className={styles.headline}>
        Sua casa em <span className={styles.highlight}>boas mãos</span>
      </h1>

      <p className={styles.subtext}>
        Serviços de manutenção e reparos residenciais com rapidez, qualidade e preço justo.
        Do chuveiro ao móvel, a gente resolve!
      </p>

      <div className={styles.buttons}>
        <button 
          className={`${styles.button} ${styles.primary}`}
          onClick={handleWhatsApp}
        >
          <MessageCircle className={styles.icon} />
          Chamar no WhatsApp
        </button>

        <button 
          className={`${styles.button} ${styles.secondary}`}
          onClick={handleCall}
        >
          <Phone className={styles.icon} />
          Ligar Agora
        </button>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.scrollLine}></div>
      </div>
    </section>
  )
}

export default Hero

