describe('Prova', () => {
  beforeEach(() => {

    // Acessar o site da Verity - verity.com.br
    cy.visit("https://verity.com.br");

    // Verifica se o elemento pop-up da neuroma está presente na página, se estiver iremos fechar
    cy.get('#bgLayers_comp-lf9pv6k5 > [data-testid="colorUnderlay"]').should('exist').then(($elemento1) => {
      if ($elemento1.length > 0) {

        // Realiza o clique para sair do pop up
        cy.get('svg[data-bbox="26 26 148 148"]').click({ force: true });
      }
    })
  })


  it('Realizar a validação dos títulos', () => {

    //usamos body para acessar o conteudo de texto que tem na pagina 
    cy.get('body').then(($body) => {

      // Realizar a validação e verificar se os Culture e Tech será encontrado
      if ($body.text().includes('Culture e Tech')) {
        cy.contains('Culture e Tech').should('exist');
      } else {
        cy.log('O elemento de texto "Culture e Tech" não foi encontrado');
      }


      // Realizar a validação e verificar se os Nossas soluções será encontrado
      if ($body.text().includes('Nossas soluções')) {
        cy.contains('Nossas soluções').should('exist');
      } else {
        cy.log('O elemento de texto "Nossas soluções" não foi encontrado');
      }

    });
  })


  it.only('Preencher formulário de contato', () => {

    // Verificar se existe o menu "Contato" e clicar nele
    cy.get('#comp-kevyodnk6label').should('exist').click();

    // Verificar se existe o menu "Vamos conversar"
    cy.contains('Vamos conversar');


    // Preencher os campos do formulário
    cy.get('input[name="nome"]').type('Julia Carneiro de Andrade')
    cy.get('input[name="email"]').type('julia.andrade@verity.com.br')
    cy.get('input[name="phone"]').type('(35) 99970-1403')
    cy.get('#textarea_comp-kwz6tqfr').type('Meu desafio é escrever um script de teste automatizado na linguagem JavaScript na ferramenta Cypress')


    // Selecionar no checkbox “Aceito receber mensagens da Verity”; 
    cy.get('[data-testid="checkbox"]').click({ force: true });

    //Clicar no botão [Enviar]
    cy.get('[data-testid="buttonElement"]').contains('Enviar').click()

  })
})



