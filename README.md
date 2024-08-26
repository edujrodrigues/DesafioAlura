# Decodificador e Codificador de Texto

Este projeto é uma aplicação web simples para criptografar e descriptografar textos usando uma codificação básica, proposto no Desafio Alura.
O aplicativo permite que o usuário insira um texto, criptografe ou descriptografe, e copie o resultado para a área de transferência.

## Funcionalidades

- **Criptografia e Descriptografia:** Converte letras minúsculas de acordo com uma tabela de substituições.
- **Validação de Entrada:** Aceita apenas letras minúsculas e sem acento.
- **Interface Interativa:** Mostra/oculta elementos com base na ação do usuário.
- **Copiar para Área de Transferência:** Permite copiar o texto criptografado/descriptografado para a área de transferência.

## Desafios e Pontos Interessantes

- **Criptografia Simples:** Implementa uma criptografia básica substituindo letras específicas com strings alternativas.
- **Validação de Entrada:** Usa a normalização de texto e regex para garantir que apenas letras minúsculas sem acento sejam aceitas.
- **Gerenciamento de Visibilidade:** Usa JavaScript para mostrar e ocultar elementos na página com base na interação do usuário.
- **Integração com o Clipboard:** Utiliza a API de Clipboard para copiar texto para a área de transferência.
