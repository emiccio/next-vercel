import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'

export default function ContactPage() {
  return (
    
      <MainLayout>

          <h1>CONTACT PAGE</h1>
          <h1 className={'title'}>
            {/* Ir a <a href="/">Home</a> */}
            Ir a <Link href="/">Index</Link>

          </h1>

          <p className={'description'}>
            Estoy en Contact{' '}
            <code className={'code'}>pages/contact.js</code>
          </p>

      </MainLayout>
  )
}
