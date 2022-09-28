const buttonForm = document.getElementById("button-form");

function formulario() {
  buttonForm.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("button-form").style.display = "none";
    const form = (document.getElementById("form").innerHTML = `
        <div class="form">
        <div class="form-icon">
      <img class="botonCerrar" src="/img/icon-close.svg" alt="Icono de Cerrar Formulario">
      </div>
        <div class="form-content">
        <div class="form-title">
      <h2>Contacto</h2>
      <p>Llena el Formulario y te estare contactando en la brevedad posible.</p>
      </div>
      </div>

      <form action="">
        <label for="">Nombre</label>
        <input type="text" id="name" name="nombre" placeholder="Nombre" />

        <label for="">Apellido</label>
        <input
          type="text"
          id="lastName"
          name="apellido"
          placeholder="Apellido"
        />

        <label for="">Correo</label>
        <input type="email" id="email" name="email" placeholder="E-mail" />

        <label for="">Mensaje</label>
        <textarea name="" id="" cols="30" rows="10"></textarea>

        <input type="submit" value="Enviar" id="send" />
      </form>
    </div>
        `);
    const buttonSend = document.getElementById("send");
    buttonSend.addEventListener("click", (e) => {
      e.preventDefault();
    });

    const botonCerrarx = document.querySelector(".botonCerrar");
    botonCerrarx.addEventListener('click', () =>{
        const form = (document.getElementById("form").innerHTML = ``);
        document.getElementById("button-form").style.display= 'block';
    })
    

  });
}

function formPage() {
  formulario();
}

formPage();
