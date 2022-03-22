import Link from 'next/link'
import { DarkLayout } from '../components/layouts/DarkLayout'
import { MainLayout } from '../components/layouts/MainLayout'

export default function AboutPage() {
  return (  
      <>
          <h1>ABOUT PAGE</h1>
          <h1 className={'title'}>
            {/* Ir a <a href="/">Home</a> */}
            Ir a <Link href="/">Index</Link>

          </h1>

          <p className={'description'}>
            Estoy en About{' '}
            <code className={'code'}>pages/about.js</code>
          </p>
      </>
  )
}

AboutPage.getLayout = function gerLayout( page: JSX.Element ) {
  return (
    <MainLayout>
          <DarkLayout>
              { page }
          </DarkLayout>
      </MainLayout>
  )
}
