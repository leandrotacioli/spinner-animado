# Spinner Animado

Componente para carregamento de telas para melhorar a experiência do usuário - HTML, CSS e JavaScript puro.

----------------------------------------------------------------------------------

## Utilização

1) Inclua os arquivos CSS e JS na estrutura ***head*** do HTML:

```html
<link rel="stylesheet" href="css/spinner.css">

<script src="js/spinner.js"></script>
```

2) Crie o elemento no corpo do HTML:

```html
<div id="overlay" style="display: none;">
	<div class="spinner" id="spinner"></div>
	<br />
	<label class="spinner-message" id="spinnerMessage"></label>
</div>
```

3) Para habilitar o spinner, chame a função abaixo especificando um parâmetro que exibirá seu respectivo valor junto ao spinner:

```html
ShowSpinner("Carregando dados...");
```

4) Para desabilitar o spinner, chame a função:

```html
HideSpinner();
```

----------------------------------------------------------------------------------

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](/LICENSE) para mais detalhes.