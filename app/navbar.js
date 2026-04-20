'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  
  return (
    <nav style={{
      background: '#1e3a8a',
      color: 'white',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{ fontSize: '24px' }}>🚀</div>
        <h1 style={{ margin: 0 }}>EduPro Technologies</h1>
      </div>
      
      <div style={{ display: 'flex', gap: '2rem' }}>
        <Link 
          href="/" 
          style={{ 
            color: pathname === '/' ? '#93c5fd' : 'white',
            textDecoration: 'none',
            fontWeight: pathname === '/' ? 'bold' : 'normal'
          }}
        >
          Главная
        </Link>
        <Link 
          href="/products" 
          style={{ 
            color: pathname === '/products' ? '#93c5fd' : 'white',
            textDecoration: 'none',
            fontWeight: pathname === '/products' ? 'bold' : 'normal'
          }}
        >
          Продукты
        </Link>
        <Link 
          href="/contacts" 
          style={{ 
            color: pathname === '/contacts' ? '#93c5fd' : 'white',
            textDecoration: 'none',
            fontWeight: pathname === '/contacts' ? 'bold' : 'normal'
          }}
        >
          Контакты
        </Link>
      </div>
    </nav>
  )
}