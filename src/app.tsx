// import { useState } from 'preact/hooks'
import './app.css'
import Header from './components/Header'
import Pricings from './components/Pricings'

export function App() {

  return (
    <>
      <Header />
      <main>
        <Pricings />
      </main>
    </>
  )
}
