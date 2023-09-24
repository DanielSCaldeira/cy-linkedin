import { Elemento } from "./elements"

describe('', () => {
	it('', () => {

	});
});

describe('Entrando na pagina do Linkedin', () => {
	it('Entrando na pagina...', () => {
		cy.wait(500)
		cy.visit('https://www.linkedin.com/')
		cy.get('#session_key').type('soarescaldeira@outlook.com')
		cy.get('#session_password').type('201251925')
		cy.get('button[type=submit]').click()

		cy.xpath(Elemento.BotaoMenuVagas).click()

		cy.pause();
		cy.get(Elemento.CampoDeTexto).click();
		cy.get(Elemento.CampoDeTexto).type('Analista de Sistema C# Sernior {enter}')

		// BotaoFiltro
		cy.xpath(Elemento.BotaoFiltro).click()
		// VagasCandidaturaSimple
		cy.xpath('/html/body/div[4]/div/div/div[2]/ul/li[9]/fieldset/div').click()
		// BotãoExibirResultados
		cy.xpath('/html/body/div[4]/div/div/div[3]/div/button[2]').click()


		cy.get('#main > div > div.scaffold-layout__list > div > ul > li').each(($el, index, $list) => {
			if ($el.someMethod() === 'something') {
				// Clica no elemento
				cy.wrap($el).click()
				// ClicaParaCandidatarse
				cy.xpath('/html/body/div[5]/div[3]/div[4]/div/div/main/div/div[2]/div/div[2]/div[1]/div/div[1]/div/div[1]/div[1]/div[4]/div/div/div/button').click()
			}
		})
	})
	// it.only('Realizando pesquisa da vaga, Entrando na pagina...', () => {
	// 	// BotãoMenuVagas
	// 	cy.xpath('/html/body/div[5]/header/div/nav/ul/li[3]/a').click()
	// 	//Campo de Texto
	// 	cy.xpath('/html/body/div[5]/header/div/div/div/div[2]/div[1]/div/div/input[3]').type('Analista de Sistema C# Sernior {enter}')
	// })

	// it('Aplicando Filtro da Vaga', () => {
	// 	// BotaoFiltro
	// 	cy.xpath('/html/body/div[5]/div[3]/div[4]/section/div/section/div/div/div/div/div/button').click()
	// 	// VagasCandidaturaSimple
	// 	cy.xpath('/html/body/div[4]/div/div/div[2]/ul/li[9]/fieldset/div').click()
	// 	// BotãoExibirResultados
	// 	cy.xpath('/html/body/div[4]/div/div/div[3]/div/button[2]').click()
	// })

	// it('Percorrendo Vagas e Se Candidatando', () => {
	// 	cy.get('#main > div > div.scaffold-layout__list > div > ul > li').each(($el, index, $list) => {
	// 		if ($el.someMethod() === 'something') {
	// 			// Clica no elemento
	// 			cy.wrap($el).click()
	// 			// ClicaParaCandidatarse
	// 			cy.xpath('/html/body/div[5]/div[3]/div[4]/div/div/main/div/div[2]/div/div[2]/div[1]/div/div[1]/div/div[1]/div[1]/div[4]/div/div/div/button').click()
	// 		}
	// 	})
	// })
})



// describe('Entrando na pagina do Linkedin', () => {
// 	it('Entrando na pagina...', () => {
// 		cy.visit('https://www.claeo.com/')
// 		cy.xpath('/html/body/div[1]/header/div[2]/div[3]/div[2]/div[2]/div[3]/a').click();
// 	})
// })

// describe('My First Test', () => {
//   it('Does not do much!', () => {
//     expect(true).to.equal(true)
//   })
// })
// describe('My First Test', () => {
//   it('Does not do much!', () => {
//     expect(true).to.equal(false)
//   })
// })


// usuario : soarescaldeira@outlook.com
// senha: 201251925


//*
