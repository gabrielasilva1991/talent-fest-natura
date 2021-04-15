import React, { useEffect } from 'react'
import { useHistory } from 'react-router';
import Button from '../../components/Button';
import batomEnergia from '../../img/batom-energia.jpg';
import batomIntensidade from '../../img/batom-intensidade.jpg'
import batomEntusiasmo from '../../img/batom-entusiasmo.jpg'
import esmalteBemEstar from '../../img/esmalte-bem-estar.jpg';
import esmalteEntrega from '../../img/esmalte-entrega.jpg';
import esmalteSuaVerdade from '../../img/esmalte-sua-verdade.jpg';

export default function Entusiasmo() {
  const history = useHistory()

  const one = localStorage.getItem('responseOne')
  const two = localStorage.getItem('responseTwo')
  const three = localStorage.getItem('responseThree')

  function response() {
    if (one) {
      history.push('/tutorial2')
    } else if (two) {
      history.push('/tutorial1')
    } else if (three) {
      history.push('/tutorial3')
    }

    localStorage.clear();
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <section id='#' className='section-base section-lipstick centered'>
        <div className='section-container'>
          <div className='your-red'>
            <p><span className='bold'>{localStorage.getItem('userClient')}, </span>
              <br />seu vermelho é o </p>
            <p className='your-red-handwritten'>entusiasmo</p>
          </div>

          <div className='products-container'>
            <div className='lipstick-wrap'>
              <img className='lipstick-img' src={batomEntusiasmo} alt='Batom Entusiasmo'></img>
              <article className='lipstick-info'>
                <p className='bold'>Batom Marmorizado Una</p>
                <p className='lipstick-description'>Mistura entre cor e balm. Vegano. Acabamento cremoso. Alta pigmentação e hidratação por 24 horas.</p>
                <a
                  className='button-buy' target='_blank' rel='noreferrer'
                  href='https://www.natura.com.br/p/batom-marmorizado-natura-una-3,5g/7096?color=Vinho%20Entusiasmo'
                >Compre agora</a>
              </article>
            </div>

            <div className='nail-polish-wrap'>
              <article className='nail-polish-info'>
                <p className='nail-polish-description'>Combinação perfeita:</p>
                <p className='bold'>Esmalte Una Entrega</p>
                <a
                  className='button-buy' target='_blank' rel='noreferrer'
                  href='https://www.natura.com.br/p/esmalte-para-unhas-natura-una-8ml/7098?color=Entrega'
                >Compre agora</a>
              </article>
              <img className='nail-polish-img' src={esmalteEntrega} alt='Esmalte Entrega'></img>
            </div>
          </div>

          <Button
            buttonLink='#energia'
            buttonClass='nav-button'
            buttonTextClass='nav-button-text'
            buttonText='Veja outro vermelho'
            iconClass='icon-arrow-down fas fa-chevron-down'
          />
        </div>
      </section>

      <section id='energia' className='section-base section-lipstick centered'>
        <div className='section-container'>
          <Button
            buttonLink='#'
            buttonClass='nav-button'
            buttonTextClass='nav-button-text'
            iconClass='icon-arrow-up fas fa-chevron-up'
          />

          <p className='your-red your-red-handwritten'>energia</p>

          <div class='products-container'>
            <div className='lipstick-wrap'>
              <img className='lipstick-img' src={batomEnergia} alt='Batom Energia'></img>
              <article className='lipstick-info'>
                <p className='bold'>Batom Marmorizado Una</p>
                <p className='lipstick-description'>Mistura entre cor e balm. Vegano. Acabamento cremoso. Alta pigmentação e hidratação por 24 horas.</p>
                <a
                  className='button-buy' target='_blank' rel='noreferrer'
                  href='https://www.natura.com.br/p/batom-marmorizado-natura-una-3,5g/7096?color=Vermelho%20Energia'
                >Compre agora</a>
              </article>
            </div>

            <div className='nail-polish-wrap'>
              <article className='nail-polish-info'>
                <p className='nail-polish-description'>Combinação perfeita:</p>
                <p className='bold'>Esmalte Una Bem-Estar</p>
                <a
                  className='button-buy' target='_blank' rel='noreferrer'
                  href='https://www.natura.com.br/p/esmalte-para-unhas-natura-una-8ml/7098?color=Bem-Estar'
                >Compre agora</a>
              </article>
              <img className='nail-polish-img' src={esmalteBemEstar} alt='Esmalte Bem-Estar'></img>
            </div>
          </div>

          <Button
            buttonLink='#intensidade'
            buttonClass='nav-button'
            buttonTextClass='nav-button-text'
            buttonText='Veja outro vermelho'
            iconClass='icon-arrow-down fas fa-chevron-down'
          />
        </div>
      </section>

      <section id='intensidade' className='section-base section-lipstick centered'>
        <div className='section-container'>
          <Button
            buttonLink='#energia'
            buttonClass='nav-button'
            buttonTextClass='nav-button-text'
            iconClass='icon-arrow-up fas fa-chevron-up'
          />

          <p className='your-red your-red-handwritten'>intensidade</p>

          <div className='products-container'>
            <div className='lipstick-wrap'>
              <img className='lipstick-img' src={batomIntensidade} alt='Batom Intensidade'></img>
              <article className='lipstick-info'>
                <p className='bold'>Batom Marmorizado Una</p>
                <p className='lipstick-description'>Mistura entre cor e balm. Vegano. Acabamento cremoso. Alta pigmentação e hidratação por 24 horas.</p>
                <a
                  className='button-buy' target='_blank' rel='noreferrer'
                  href='https://www.natura.com.br/p/batom-marmorizado-natura-una-3,5g/7096?color=Vermelho%20Intensidade'
                >Compre agora</a>
              </article>
            </div>

            <div className='nail-polish-wrap'>
              <article className='nail-polish-info'>
                <p className='nail-polish-description'>Combinação perfeita:</p>
                <p className='bold'>Esmalte Una Sua Verdade</p>
                <a
                  className='button-buy' target='_blank' rel='noreferrer'
                  href='https://www.natura.com.br/p/esmalte-para-unhas-natura-una-8ml/7098?color=Sua%20Verdade'
                >Compre agora</a>
              </article>
              <img className='nail-polish-img' src={esmalteSuaVerdade} alt='Esmalte Sua Verdade'></img>
            </div>
          </div>

          <Button
            buttonClass='nav-button'
            buttonTextClass='nav-button-text'
            buttonText='Tutorial'
            iconClass='icon-arrow-down fas fa-chevron-down'
            buttonOnClick={() => response()}
          />
        </div>
      </section>
    </>
  );
};
