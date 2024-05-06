function limparCNPJ(cnpj) {
    return cnpj.replace(/\D/g, '');
  }
  
  function validarCNPJ(cnpj) {
    cnpj = limparCNPJ(cnpj);
    return cnpj.length === 14;
  }
  
  function consultarCNPJ() {
    var cnpj = document.getElementById('cnpj').value;
  
    if (!validarCNPJ(cnpj)) {
      alert('CNPJ inválido. Por favor, insira um CNPJ válido.');
      return;
    }
  
    var url = 'https://api-publica.speedio.com.br/buscarcnpj?cnpj=' + limparCNPJ(cnpj);
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        var formattedOutput = '';
        for (var key in data) {
          if (data.hasOwnProperty(key)) {
            formattedOutput += '<strong>' + key + ':</strong> ' + data[key] + '<br>';
          }
        }
        document.getElementById('resultado').innerHTML = formattedOutput;
      })
      .catch(error => {
        console.error('Erro:', error);
        document.getElementById('resultado').innerHTML = 'Erro ao consultar o CNPJ.';
      });
  }
  