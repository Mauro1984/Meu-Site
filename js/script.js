if (window.SimpleSlide) {
  new SimpleSlide({
    slide: "principal", // nome do atributo data-slide="principal"
    nav: false, // se deve ou não mostrar a navegação
    auto: true, // se o slide deve passar automaticamente
    time: 4000, // tempo de transição dos slides
    pauseOnHover: true, // pausa a transição automática
  });
}

if (window.SimpleAnime) {
  new SimpleAnime();
}

if (window.SimpleForm) {
  new SimpleForm({
    form: ".formphp", //seletor do formulário
    button: "#enviar", //seletor o botão
    erro:
      "<div id='form-erro'><h2> Erro no envio! </h2><p> Um erro ocoreu, tente para o e-mail: contato@mauroborgesjunior.com.br</p></div> ",
    sucesso:
      "<div id='form-sucesso'><h2> Formulario enviado com sucesso</h2><p> Em breve entro em contato com você.</p></div> ",
  });
}
