import React from 'react';
import styles from './Home.module.css';
import Cabecalho from '../layout/Cabecalho';
import AbreviaInstrutor from '../TabelaAulas/AbreviaInstrutor';


function Home() {
  return (
    <>
    <Cabecalho/>
    <TabelaAulas/>
    <AbreviaInstrutor/>
    
    </>
  )
}

export default Home;