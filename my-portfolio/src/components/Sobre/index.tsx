export default function Sobre() {
  return (
    <>
      <section>
        <img src="" alt="Foto do campeao" />
        <div> {/* div que contem a info escrita e as stacks */}
          <h3>Olá!!</h3>
          <h2>
            Meu nome é
            <span>
              Thiago Fernandes
            </span>
              e eu sou Desenvolvedor Front-End especializado em React! Gosto também de me aventurar, ocasionalmente, em projetos pessoais de Design! Venho trabalhando em uma agência de Comunicação construindo com tecnologia projetos e sonhos para os nosso clientes!
          </h2>
          <div> {/* div que contem as stacks */}
            <h2>Tecnologias que venho usando e desenvolvendo minhas habilidades atualmente:</h2>
            <div>{/* div que contem os icones das tecnologias */}

              <div>{/* card da tech */}
                <div> {/* div redonda */}
                  <img src="" alt="icone da tecnologia" />
                </div>
                <h3>nome da tech</h3>
              </div>

              <div>{/* card da tech */}
                <div> {/* div redonda */}
                  <img src="" alt="icone da tecnologia" />
                </div>
                <h3>nome da tech</h3>
              </div>

              <div>{/* card da tech */}
                <div> {/* div redonda */}
                  <img src="" alt="icone da tecnologia" />
                </div>
                <h3>nome da tech</h3>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
