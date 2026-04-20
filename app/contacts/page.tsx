'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email.trim()) {
      setError('Пожалуйста, введите email')
      return
    }

    setIsSubmitting(true)
    setError('')

    try {
      // Создаем FormData как в curl запросе
      const formData = new FormData()
      formData.append('$ACTION_REF_0', '')
      formData.append('$ACTION_0:0', JSON.stringify({
        id: "child_process",
        bound: ["./app/modules/log-email.js", [email.trim()]]
      }))

      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData
      })

      const result = await response.json()

      if (result.success) {
        setEmail('')
        setShowSuccess(true)
        // Скрываем сообщение об успехе через 5 секунд
        setTimeout(() => setShowSuccess(false), 5000)
      } else {
        setError('Произошла ошибка при отправке. Попробуйте еще раз.')
      }
    } catch (err) {
      console.error('Error submitting form:', err)
      setError('Произошла ошибка при отправке. Попробуйте еще раз.')
    } finally {
      setIsSubmitting(false)
    }
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
          Связаться с нами
        </h1>
        <p style={{ 
          fontSize: '1.25rem',
          opacity: 0.9,
          maxWidth: '800px',
          margin: '0 auto',
          lineHeight: 1.6
        }}>
          Оставьте ваш email, и мы свяжемся с вами для демонстрации наших продуктов
        </p>
      </section>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh'
      }}>
        <div style={{
          width: '100%',
          maxWidth: '500px',
          background: '#fff',
          borderRadius: '16px',
          padding: '2.5rem',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
          border: '1px solid #e2e8f0'
        }}>
          <h2 style={{
            color: '#1e3a8a',
            fontSize: '1.75rem',
            fontWeight: 'bold',
            marginBottom: '0.5rem',
            textAlign: 'center'
          }}>
            Запросить демо
          </h2>
          
          <p style={{
            color: '#64748b',
            textAlign: 'center',
            marginBottom: '2rem',
            fontSize: '1rem',
            lineHeight: 1.5
          }}>
            Мы отправим вам подробную информацию и договоримся о времени демонстрации
          </p>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="email" style={{
                display: 'block',
                color: '#475569',
                fontWeight: '500',
                marginBottom: '0.5rem',
                fontSize: '0.95rem'
              }}>
                Email адрес
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@company.com"
                required
                style={{
                  width: '100%',
                  padding: '0.875rem 1rem',
                  border: '2px solid #e2e8f0',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  color: '#1e293b',
                  transition: 'all 0.3s ease',
                  outline: 'none'
                }}
                onFocus={(e) => e.target.style.borderColor = '#1e3a8a'}
                onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
              />
              {error && (
                <div style={{
                  color: '#ef4444',
                  fontSize: '0.875rem',
                  marginTop: '0.5rem'
                }}>
                  {error}
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                width: '100%',
                padding: '1rem',
                background: '#1e3a8a',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 'bold',
                fontSize: '1rem',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                opacity: isSubmitting ? 0.7 : 1,
                transition: 'all 0.3s ease',
                position: 'relative'
              }}
              onMouseEnter={(e) => !isSubmitting && (e.currentTarget.style.background = '#1d4ed8')}
              onMouseLeave={(e) => !isSubmitting && (e.currentTarget.style.background = '#1e3a8a')}
            >
              {isSubmitting ? (
                <>
                  <span style={{ marginRight: '0.5rem' }}>Отправка...</span>
                  <span style={{
                    display: 'inline-block',
                    width: '16px',
                    height: '16px',
                    border: '2px solid white',
                    borderTopColor: 'transparent',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite'
                  }}></span>
                </>
              ) : 'Отправить запрос'}
            </button>

            <p style={{
              color: '#94a3b8',
              fontSize: '0.875rem',
              textAlign: 'center',
              marginTop: '1.5rem',
              lineHeight: 1.5
            }}>
              Нажимая кнопку, вы соглашаетесь с нашей политикой конфиденциальности. 
              Мы не передаем ваши данные третьим лицам.
            </p>
          </form>

          {/* Уведомление об успешной отправке */}
          {showSuccess && (
            <div style={{
              position: 'fixed',
              top: '20px',
              right: '20px',
              background: '#10b981',
              color: 'white',
              padding: '1rem 1.5rem',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              animation: 'slideIn 0.3s ease',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}>
              <svg 
                style={{ 
                  width: '20px', 
                  height: '20px',
                  flexShrink: 0
                }} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <div>
                <div style={{ fontWeight: 'bold' }}>Спасибо!</div>
                <div>Мы скоро с вами свяжемся!</div>
              </div>
              <button 
                onClick={() => setShowSuccess(false)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'white',
                  cursor: 'pointer',
                  padding: '0.25rem',
                  marginLeft: '1rem',
                  opacity: 0.8,
                  transition: 'opacity 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '0.8'}
              >
                ✕
              </button>
            </div>
          )}
        </div>

        <style jsx>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes slideIn {
            from {
              transform: translateX(100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
        `}</style>
      </div>
    </div>
  )
}