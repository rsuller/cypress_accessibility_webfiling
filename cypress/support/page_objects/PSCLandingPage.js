class PSCLandingPage {

    appointPsc01() {
        cy.get('#addIndividual').click();
    }

    appointPsc02() {
        cy.get('#addCorporate').click();
    }

}

export default PSCLandingPage