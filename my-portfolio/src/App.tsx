import './App.css';

function App() {
  return (
    <div className="App">
      
      {/* inicio da secao home com o portfolio */}
      <section>
        <aside>
          <h1>
            <a href="">&lt;p&gt;Bem Vindo&lt;p/&gt;</a>
          </h1>
          <p>Thiago Fernandes</p>
          <p>Desenvolvedor Front-End</p>
          <nav>
            <ul>
              <li>&lt;Home/&gt;</li>
              <li>&lt;Sobre/&gt;</li>
              <li>&lt;Portfolio/&gt;</li>
              <li>&lt;Educação/&gt;</li>
              <li>&lt;Experiencia/&gt;</li>
              <li>&lt;Contato/&gt;</li>
            </ul>
          </nav>
          <button>Baixar Currículo</button>
          <button>Contratar</button>
        </aside>
        <section> {/* secao que engloba todos os projetos */}
          <div>{/* a div que contem a imagem e o card */}
            <img src="" alt="Imagem do site" />
            <div>{/* div card */}
              <span>subtitulo referente ao tipo de trabalho: Aplicativo, site</span>
              <h2>Site da Maria</h2>
              <div>{/* div que contem a barrinha amarela lateral */}
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est fugit facere tenetur? Hic dicta quidem vero accusamus provident? Eligendi soluta assumenda cupiditate adipisci qui quos ad ex doloremque odio ullam.</p>
              </div>
              <button>Ver Portfolio</button>
            </div>
          </div>
          <div>{/* a div que contem a imagem e o card */}
            <img src="" alt="Imagem do site" />
            <div>{/* div card */}
              <span>subtitulo referente ao tipo de trabalho: Aplicativo, site</span>
              <h2>Site da Maria</h2>
              <div>{/* div que contem a barrinha amarela lateral */}
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est fugit facere tenetur? Hic dicta quidem vero accusamus provident? Eligendi soluta assumenda cupiditate adipisci qui quos ad ex doloremque odio ullam.</p>
              </div>
              <button>Ver Portfolio</button>
            </div>
          </div>
          <div>{/* a div que contem a imagem e o card */}
            <img src="" alt="Imagem do site" />
            <div>{/* div card */}
              <span>subtitulo referente ao tipo de trabalho: Aplicativo, site</span>
              <h2>Site da Maria</h2>
              <div>{/* div que contem a barrinha amarela lateral */}
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est fugit facere tenetur? Hic dicta quidem vero accusamus provident? Eligendi soluta assumenda cupiditate adipisci qui quos ad ex doloremque odio ullam.</p>
              </div>
              <button>Ver Portfolio</button>
            </div>
          </div>
        </section>
      </section>
      {/* fim da secao home com o portfolio */}

      {/* inicio da secao sobre */}
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
      {/* fim da secao sobre */}

      {/* inicio da secao educacao */}
      <section>
        <div>{/* div que contem todas as outras divs*/}

          <div>{/* div especifica */}
            <div>{/* fica sempre visivel */}
              <h3>Analise e Desenvolvimento de Sistemas</h3>
              <img src="" alt="icone +" />
            </div>
            <div>{/* fica fechada e abre no clique */}
              <p>as informacoes a respeito do curso</p>
            </div>
          </div>
          <div>{/* div especifica */}
            <div>{/* fica sempre visivel */}
              <h3>Analise e Desenvolvimento de Sistemas</h3>
              <img src="" alt="icone +" />
            </div>
            <div>{/* fica fechada e abre no clique */}
              <p>as informacoes a respeito do curso</p>
            </div>
          </div>
          <div>{/* div especifica */}
            <div>{/* fica sempre visivel */}
              <h3>Analise e Desenvolvimento de Sistemas</h3>
              <img src="" alt="icone +" />
            </div>
            <div>{/* fica fechada e abre no clique */}
              <p>as informacoes a respeito do curso</p>
            </div>
          </div>
          <div>{/* div especifica */}
            <div>{/* fica sempre visivel */}
              <h3>Analise e Desenvolvimento de Sistemas</h3>
              <img src="" alt="icone +" />
            </div>
            <div>{/* fica fechada e abre no clique */}
              <p>as informacoes a respeito do curso</p>
            </div>
          </div>

        </div>
      </section>
      {/* fim da secao educacao */}

      {/* inicio da secao experiencia */}
      <section>
        <div>{/* contem o titulo e subtitulo */}
          <span>Experiencia</span>
          <h2>Experiencias de Trabalho</h2>
        </div>

        <div>{/* container que contem todas as experiencias */}

          <article>{/* experiencia individual */}
            <div>{/* div que contem o icone decorativo e a linha */}
              <i>icone ilustrativo</i>
            </div>
            <div>{/* div que contem a descricao da experiencia individual */}
              <h2>Desenvolvedor Front-End 
                <span>2021-2022</span>
              </h2>
              <p>Atualmente trabalhando numa agencia de Publicidade e Propaganda.</p>
            </div>
          </article>
          <article>{/* experiencia individual */}
            <div>{/* div que contem o icone decorativo e a linha */}
              <i>icone ilustrativo</i>
            </div>
            <div>{/* div que contem a descricao da experiencia individual */}
              <h2>Desenvolvedor Front-End 
                <span>2021-2022</span>
              </h2>
              <p>Atualmente trabalhando numa agencia de Publicidade e Propaganda.</p>
            </div>
          </article>
          <article>{/* experiencia individual */}
            <div>{/* div que contem o icone decorativo e a linha */}
              <i>icone ilustrativo</i>
            </div>
            <div>{/* div que contem a descricao da experiencia individual */}
              <h2>Desenvolvedor Front-End 
                <span>2021-2022</span>
              </h2>
              <p>Atualmente trabalhando numa agencia de Publicidade e Propaganda.</p>
            </div>
          </article>

        </div>
      </section>
      {/* fim da secao experiencia */}

      {/* inicio da secao contato */}
      <section>
        <div>{/* container amarelo */}
          <h2>Fale comigo, agora.</h2>
          <p>Aqui ao lado tem um formulário, você já sabe como funciona: só preencher tudo e em breve respondeirei seu contato!</p>
          <div>
            <div>{/* div redonda para icone */}
              <i>icone ilustrativo</i>
            </div>
            <div>{/*div com o texto */}
              <span>Localização</span>
              <p>Piracicaba - SP - Brazil</p>
            </div>
          </div>
          <div>
            <div>{/* div redonda para icone */}
              <i>icone ilustrativo</i>
            </div>
            <div>{/*div com o texto */}
              <span>Localização</span>
              <p>Piracicaba - SP - Brazil</p>
            </div>
          </div>
          <div>
            <div>{/* div redonda para icone */}
              <i>icone ilustrativo</i>
            </div>
            <div>{/*div com o texto */}
              <span>Localização</span>
              <p>Piracicaba - SP - Brazil</p>
            </div>
          </div><div>
            <div>{/* div redonda para icone */}
              <i>icone ilustrativo</i>
            </div>
            <div>{/*div com o texto */}
              <span>Localização</span>
              <p>Piracicaba - SP - Brazil</p>
            </div>
          </div>
        </div>
        <div>        
          <div>{/* container do form */}
            <h2>Entre em Contato</h2>
            <form action="">
              <div>{/* agrupa os labels e inputs */}
                <div>{/* label/input individual */}
                  <label htmlFor="">Name</label>
                  <input type="text" placeholder='Nome..'/>
                </div>
                <div>{/* label/input individual */}
                  <label htmlFor="">Name</label>
                  <input type="text" placeholder='Nome..'/>
                </div>
                <div>{/* label/input individual */}
                  <label htmlFor="">Name</label>
                  <input type="text" placeholder='Nome..'/>
                </div>
                <div>{/* label/input individual */}
                  <label htmlFor="">Name</label>
                  <textarea name="" id="" cols={30} rows={10}></textarea>
                </div>
                <input type="submit" value='Enviar'/>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* fim da secao contato */}

    </div>
  );
}

export default App;
