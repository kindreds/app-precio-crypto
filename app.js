
const API_KEY = '6b248752350c2a641e016cc4b283268ff0c666e9e747e5266d8821c97330e405';

const listaCrypto = document.querySelector('#crypto');
const listaFiat = document.querySelector('#fiat');
const button = document.querySelector('button');
const resultado = document.querySelector('#resultado');

const cotizar = async (from , to )=> {
  const url   = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${from}&tsyms=${to}&api_key=${API_KEY}`;
  const solicitud = await fetch( url ).then( resp=> resp.json() );
  const precio = solicitud[from][to];
  imprimir( from , to , precio);
}

const consulta = ()=> {
  const posicionF = listaFiat.options.selectedIndex;
  const opcionF = listaFiat.options[posicionF].value;

  const posicionC = listaCrypto.options.selectedIndex;
  const opcionC = listaCrypto.options[posicionC].value;

  cotizar( opcionC, opcionF, );
}

const imprimir = (c, f, r)=> {
  const usFormat = new Intl.NumberFormat('en-US', {
    style: 'currency', 
    currency: f,
  });
  let html = `
  <div class="notificacion terceario">
    <p>El valor de ${c} en ${f} es:</p>
    <p>${usFormat.format(r)}</p>
  </div>`;
  resultado.innerHTML = html;
}

button.addEventListener( 'click', consulta )



