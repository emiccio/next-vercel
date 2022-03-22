import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'

export default function HomePage() {
  return (
    <MainLayout>
      <h1>PRICING PAGE</h1>

      <h1 className={'title'}>
        {/* Ir a <a href="/pricing">pricing</a> */}
        Ir a <Link href="/pricing">Pricing</Link>

      </h1>

      <p className={'description'}>
        Este es el Pricing{' '}
        <code className={'code'}>pages/pricing/index.js</code>
      </p>
    </MainLayout>
  )
}
