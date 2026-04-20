'use client'

import { useRouter } from 'next/navigation'

export default function Products() {
  const router = useRouter()
  const products = [
    {
      name: 'EduPro LMS Enterprise',
      description: 'Полнофункциональная система управления обучением для крупных организаций',
      features: ['React Server Components', 'Микросервисная архитектура', 'AI-рекомендации', 'Интеграция с 1C'],
      price: 'от 2 500 000 ₽'
    },
    {
      name: 'EduPro SDO Cloud',
      description: 'Облачная платформа дистанционного образования',
      features: ['Мультитенантность', 'SCORM совместимость', 'Мобильное приложение', 'Аналитика успеваемости'],
      price: 'от 500 ₽/пользователь/месяц'
    },
    {
      name: 'EduPro Academy',
      description: 'Готовая система для учебных заведений',
      features: ['Электронный журнал', 'Видеолекции', 'Тестирование', 'ЭЦП документов'],
      price: 'от 1 000 000 ₽'
    }
  ]

  const handleRequestDemo = () => {
    router.push('/contacts')
  }

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
      {/* Герой секция */}
      <section style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '4rem 2rem',
        borderRadius: '12px',
        marginBottom: '3rem',
        textAlign: 'center'
      }}>
        <h1 style={{ 
          fontSize: '3rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          textShadow: '0 2px 4px rgba(0,0,0,0.2)'
        }}>
          Наши продукты
        </h1>
        <p style={{ 
          fontSize: '1.25rem',
          opacity: 0.9,
          maxWidth: '800px',
          margin: '0 auto',
          lineHeight: 1.6
        }}>
          Комплексные решения для цифрового обучения, которые помогут трансформировать образовательный процесс
        </p>
      </section>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {products.map((product, index) => (
          <div key={index} style={{
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            padding: '2rem',
            background: '#f8fafc',
            display: 'flex',
            flexDirection: 'column',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}>
            <div style={{ flex: 1 }}>
              <h2 style={{ 
                color: '#1e3a8a', 
                marginBottom: '1rem',
                fontSize: '1.5rem',
                fontWeight: 'bold'
              }}>
                {product.name}
              </h2>
              <p style={{ 
                marginBottom: '1.5rem', 
                color: '#475569',
                fontSize: '1.1rem',
                lineHeight: 1.6
              }}>
                {product.description}
              </p>
              
              <ul style={{ 
                marginBottom: '1.5rem', 
                paddingLeft: '1.5rem',
                listStyleType: 'none'
              }}>
                {product.features.map((feature, i) => (
                  <li key={i} style={{ 
                    marginBottom: '0.75rem', 
                    color: '#475569',
                    display: 'flex',
                    alignItems: 'flex-start'
                  }}>
                    <span style={{
                      display: 'inline-block',
                      width: '8px',
                      height: '8px',
                      backgroundColor: '#1e3a8a',
                      borderRadius: '50%',
                      marginRight: '0.75rem',
                      marginTop: '0.5rem',
                      flexShrink: 0
                    }}></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '1.5rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid #e2e8f0'
            }}>
              <div style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#1e3a8a',
                marginBottom: '1rem',
                textAlign: 'center'
              }}>
                {product.price}
              </div>
              <button 
                onClick={handleRequestDemo}
                style={{
                  padding: '0.75rem 2rem',
                  background: '#1e3a8a',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  minWidth: '200px',
                  transition: 'all 0.3s ease',
                  fontSize: '1rem'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#1d4ed8'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(30, 58, 138, 0.3)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#1e3a8a'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                Запросить демо
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}