import React from 'react'
import Button from '../../components/Button';
import batomEnergia from '../../img/batom-energia.jpg';
import esmalteBemEstar from '../../img/esmalte-bem-estar.jpg';

export default function Energia() {
  return (
    <section id='lipstick' className='section-base section-lipstick centered'>
      <div className='section-container'>
        <div className='your-red'>
          <p><span className='bold'>Lilian, </span>
            <br />seu vermelho é o </p>
          <p className='your-red-handwritten'>energia</p>
        </div>

        <div className='lipstick-wrap'>
          <img className='lipstick-img' src={batomEnergia} alt='Batom energia'></img>
          <article className='lipstick-info'>
            <p className='lipstick-title'>Batom Marmorizado Una</p>
            <p className='lipstick-description'>Mistura entre cor e balm. Vegano. Acabamento cremoso. Alta pigmentação e hidratação por 24 horas.</p>
            <a
              className='button-buy' target='_blank' rel='noreferrer'
              href='https://www.natura.com.br/p/batom-marmorizado-natura-una-3,5g/7096?color=Vermelho%20Energia'
            >Compre agora</a>
          </article>
        </div>

        <div className='nail-polish-wrap'>
          <article className='nail-polish-info'>
            <p className='nail-polish-title'>Esmalte Una Bem-Estar</p>
            <a
              className='button-buy' target='_blank' rel='noreferrer'
              href='https://www.natura.com.br/p/esmalte-para-unhas-natura-una-8ml/7098?color=Bem-Estar'
            >Compre agora</a>
          </article>
          <img className='nail-polish-img' src={esmalteBemEstar} alt='Esmalte Bem-Estar'></img>
        </div>

        <Button
          buttonLink='#section-lipstick'
          buttonClass='nav-button'
          buttonTextClass='nav-button-text'
          buttonText='Veja o tutorial'
          iconClass='icon-arrow-down fas fa-chevron-down'
        />
      </div>
    </section>
  );
};
