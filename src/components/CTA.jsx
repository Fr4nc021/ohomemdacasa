import { useEffect, useRef, useState } from 'react'
import { MessageCircle, Clock, MapPin, Shield } from 'lucide-react'
import styles from './CTA.module.css'

const CTA = () => {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const handleWhatsApp = () => {
    const phone = '555492199212'
    const message = 'Olá! Gostaria de solicitar um orçamento grátis.'
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank')
  }

  const features = [
    {
      icon: <Clock />,
      title: 'Atendimento Rápido',
      description: 'Segunda a Sábado'
    },
    {
      icon: <MapPin />,
      title: 'Atendimento a Domicílio',
      description: 'Vamos até você'
    },
    {
      icon: <Shield />,
      title: 'Serviço Garantido',
      description: 'Qualidade assegurada'
    }
  ]

  return (
    <section ref={sectionRef} className={styles.cta}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Precisa de <span className={styles.highlight}>ajuda?</span>
        </h2>
        <p className={styles.subtitle}>
          Estamos prontos para resolver qualquer problema na sua casa
        </p>

        <div className={`${styles.features} ${isVisible ? styles.visible : ''}`}>
          {features.map((feature, index) => (
            <div 
              key={index}
              className={styles.feature}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={styles.featureIcon}>
                {feature.icon}
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.buttonWrapper}>
          <button 
            className={styles.ctaButton}
            onClick={handleWhatsApp}
          >
            <MessageCircle className={styles.buttonIcon} />
            Solicitar Orçamento Grátis
          </button>
          <p className={styles.buttonNote}>
            Responderemos você com rapidez e transparência
          </p>
        </div>
      </div>
    </section>
  )
}

export default CTA


