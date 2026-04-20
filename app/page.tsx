export default function Home() {
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
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          Инновационные системы обучения
        </h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
          Разрабатываем передовые LMS/SDO платформы для корпоративного и академического образования
        </p>
      </section>

      {/* О компании */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ color: '#1e3a8a', marginBottom: '1.5rem' }}>О компании</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem' 
        }}>
          <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '8px' }}>
            <h3 style={{ color: '#1e3a8a' }}>📊 15+ лет опыта</h3>
            <p>Более 15 лет разрабатываем системы дистанционного обучения для крупнейших компаний</p>
          </div>
          <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '8px' }}>
            <h3 style={{ color: '#1e3a8a' }}>🏢 200+ клиентов</h3>
            <p>Внедрили наши решения в более чем 200 организациях по всему миру</p>
          </div>
          <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '8px' }}>
            <h3 style={{ color: '#1e3a8a' }}>🚀 Инновации</h3>
            <p>Используем React Server Components и современные технологии</p>
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ color: '#1e3a8a', marginBottom: '1.5rem' }}>Наши услуги</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ padding: '1rem', background: '#f1f5f9', marginBottom: '0.5rem', borderRadius: '6px' }}>
            ✅ Разработка корпоративных LMS систем
          </li>
          <li style={{ padding: '1rem', background: '#f1f5f9', marginBottom: '0.5rem', borderRadius: '6px' }}>
            ✅ Внедрение систем дистанционного образования (SDO)
          </li>
          <li style={{ padding: '1rem', background: '#f1f5f9', marginBottom: '0.5rem', borderRadius: '6px' }}>
            ✅ Интеграция с HR системами и BI-аналитика
          </li>
          <li style={{ padding: '1rem', background: '#f1f5f9', marginBottom: '0.5rem', borderRadius: '6px' }}>
            ✅ Техническая поддержка и консалтинг
          </li>
        </ul>
      </section>
    </div>
  );
}