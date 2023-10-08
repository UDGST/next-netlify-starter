import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Sploited Nello</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Köszöntelek!" />
        <p className="description">
          Ismersz?</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
