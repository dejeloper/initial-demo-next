import { MainLayouts } from '../components/Layouts/Main'

export default function Home() {
  return (
    <>
      <h1 className={'title'}>
        <span>Home</span> Page
      </h1>

      <p className={'description'}>
        You&apos;re here:{' '}
        <code className={'code'}>pages/home.js</code>
      </p>
    </>
  )
}


Home.getLayout = function getLayout(page) {
  return (

    <MainLayouts>
      {page}
    </MainLayouts>
  );
}