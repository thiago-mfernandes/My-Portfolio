export default function Contato() {
  return (
    <>
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
    </>
  );
}
