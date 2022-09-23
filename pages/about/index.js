import { MainLayouts } from '../../components/Layouts/Main'

export default function About() {
  return (
    <MainLayouts>
      <h1 className={'title'}>
        <span>About</span> Page
      </h1>

      <p className={'description'}>
        You&apos;re here:{' '}
        <code className={'code'}>pages/about.js</code>
      </p>
    </MainLayouts>
  )
}