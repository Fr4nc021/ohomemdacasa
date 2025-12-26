import { useEffect, useRef, useState } from 'react'
import { MessageCircle, Calendar, CheckCircle } from 'lucide-react'
import Logo from '../assets/logo.png'
import styles from './HowItWorks.module.css'

const HowItWorks = () => {
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

  const steps = [
    {
      step: '01',
      icon: <MessageCircle />,
      title: 'Entre em Contato',
      description: 'Chame no WhatsApp e descreva o que precisa ser feito.'
    },
    {
      step: '02',
      icon: <Calendar />,
      title: 'Agende a Visita',
      description: 'Combinamos o melhor dia e horário para você.'
    },
    {
      step: '03',
      icon: <CheckCircle />,
      title: 'Serviço Resolvido',
      description: 'Fazemos o trabalho com qualidade e você aprova.'
    }
  ]

  return (
    <section ref={sectionRef} className={styles.howItWorks}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Como <span className={styles.highlight}>funciona</span>
        </h2>
        <p className={styles.subtitle}>
          Simples, rápido e sem complicação
        </p>

        <div className={`${styles.stepsContainer} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.connectingLine}></div>
          {steps.map((step, index) => (
            <div 
              key={index}
              className={styles.step}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={styles.iconWrapper}>
                {step.icon}
              </div>
              <div className={styles.stepNumber}>Passo {step.step}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.logoSection}>
          <div className={styles.logoBox}>
            <img src={Logo} alt="Logo O Homem da Casa" className={styles.logo} />
            <p className={styles.logoText}>O HOMEM DA CASA</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks


