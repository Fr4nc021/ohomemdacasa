import { useEffect, useRef, useState } from 'react'
import { ShowerHead, Sofa, Frame, Lightbulb, PaintBucket, Wrench } from 'lucide-react'
import styles from './Services.module.css'

const Services = () => {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
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

  const services = [
    {
      icon: <ShowerHead />,
      title: 'Instalações Hidráulicas',
      description: 'Troca de chuveiros, torneiras, sifões e pequenos reparos hidráulicos.'
    },
    {
      icon: <Sofa />,
      title: 'Montagem de Móveis',
      description: 'Montamos e desmontamos qualquer móvel com agilidade e cuidado.'
    },
    {
      icon: <Frame />,
      title: 'Quadros e Prateleiras',
      description: 'Instalação de quadros, espelhos, prateleiras e nichos.'
    },
    {
      icon: <Lightbulb />,
      title: 'Elétrica Básica',
      description: 'Troca de lâmpadas, tomadas, interruptores e instalação de lustres.'
    },
    {
      icon: <PaintBucket />,
      title: 'Pinturas internas',
      description: 'Retoques e pinturas pontuais para deixar tudo impecável.'
    },
    {
      icon: <Wrench />,
      title: 'Reparos em Geral',
      description: 'Fechaduras, dobradiças, vedações e tudo mais que precisar.'
    }
  ]

  return (
    <section ref={sectionRef} className={styles.services}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          O que <span className={styles.highlight}>fazemos</span>
        </h2>
        <p className={styles.subtitle}>
          Serviços completos para manter sua casa funcionando perfeitamente
        </p>

        <div className={`${styles.grid} ${isVisible ? styles.visible : ''}`}>
          {services.map((service, index) => (
            <div 
              key={index}
              className={styles.card}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.iconContainer}>
                {service.icon}
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services


