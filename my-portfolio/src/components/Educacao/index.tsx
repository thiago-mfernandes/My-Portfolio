import styles from './Educacao.module.scss';
import { useState } from 'react';
import Acordeao from './Acordeao';

export default function Educacao() {

  const [cardAnaliseState, setCardAnaliseState] = useState(false);
  const [cardBiologiaState, setCardBiologiaState] = useState(false);  
  const [cardHTMLCSSState, setCardHTMLCSSState] = useState(false);  
  const [cardHTTPState, setCardHTTPState] = useState(false);
  const [cardJavascriptState, setCardJavascriptState] = useState(false);
  const [cardReactState, setCardReactState] = useState(false);

  return (
    <>
      <section className={styles.educacao}>
        <hr className={styles.educacao__line}/>
        <div className={styles.educacao__box}>
          <h3 className={styles.educacao__box___subtitle}>Educação</h3>
          <h2 className={styles.educacao__box___title}>Formação Acadêmica</h2>

          <Acordeao 
            state={cardAnaliseState}
            setState={setCardAnaliseState}
            titulo='Curso Superior em Tecnologia de Análise e Desenvolvimento de Sistemas'
            descricao='Ínicio em 02/2023 e Previsão de Término em 06/2023.'
          />

          <Acordeao 
            state={cardBiologiaState}
            setState={setCardBiologiaState}
            titulo='Bacharelado em Ciências Biológicas'
            descricao='Ínicio em 02/2010 e Previsão de Término em 12/2013. *OBS: Curso Não concluído.'
          />   
          
          <h2 className={styles.educacao__box___title}>Cursos</h2>
          
          <Acordeao 
            state={cardHTMLCSSState}
            setState={setCardHTMLCSSState}
            titulo='HTML5 E CSS3'
            descricao='HTML5 e CSS3: A primeira página da Web;'
            d1='HTML5 e CSS3: Posicionamento, listas e navegação;'
            d2='HTML5 e CSS3: Trabalhando com formulários e tabelas;'
            d3='Responsividade: Trabalhando com layouts mobile;'
            d4='Guia de Estilos: Montando páginas com componentes;'
            d5='Front-end UI: Paralaxe e Carrosel;'
            d6='Flexbox: Posicione elementos na tela;'
            d7='Front-end UI: Paralaxe e Carrossel'
            d8='Arquitetura CSS: Descomplicando problemas;'
            d9='Acessibilidade Web: Introdução a designs inclusivos'
          />

          <Acordeao 
            state={cardHTTPState}
            setState={setCardHTTPState}
            titulo='HTTP, DevTools, SASS'
            descricao='HTTP: Entendendo a Web por baixo dos panos;'
            d1='Chrome DevTools: Analise, inspecione e depure suas páginas Web;'
            d2='SASS: o CSS com Superpoderes'
            d3='SASS: CSS sintaticamente espetacular'
          />

          <Acordeao 
            state={cardJavascriptState}
            setState={setCardJavascriptState}
            titulo='JavaScript'
            descricao='JavaScript: explorando a linguagem;'
            d1='JavaScript: programando na linguagemda web;'
            d2='JavaScript: POO'
            d3='JavaScript: INterfaces e Herança em OO'
            d4='Expressões Regulares: capturando textos de forma mágica;'
            d5='JavaScript para Web: Crie páginas dinâmicas;'
            d6='Typescript: Evoluindo seu JavaScript;'
          />

          <Acordeao 
            state={cardReactState}
            setState={setCardReactState}
            titulo='React.JS'
            descricao='React: Entendendo como a biblioteca funciona;'
            d1='React: abstraindo seu CSS com Styled-Componentes;'
            d2='React: lidando com arquivos estáticos;'
            d3='React: gerenciamento de estados globais com ContextAPI;'
            d4='React: conhecendo a biblioteca React-Router;'
            d5='React: integrando seu projeto React com APIs;'
            d6='React: otimizando a performance;'
            d7='React: escrevendo em Typescript;'
          />

        </div>
      </section>
    </>
  );
}
