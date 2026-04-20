import type { Metadata } from 'next'
import './globals.css'
import Navbar from './navbar'  // Импортируем Navbar

export const metadata: Metadata = {
  title: 'EduPro Technologies - Разработка LMS систем',
  description: 'Ведущий разработчик систем дистанционного обучения',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body style={{
        margin: 0,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        minHeight: '100vh'
      }}>
        <Navbar />  {/* Добавляем навигацию */}
        <main style={{ padding: '2rem' }}>
          {children}
        </main>
        <footer style={{
          background: '#1e3a8a',
          color: 'white',
          textAlign: 'center',
          padding: '1rem',
          marginTop: 'auto'
        }}>
          <p>© 2024 EduPro Technologies. Все права защищены.</p>
        </footer>
      </body>
    </html>
  )
}