class PSCLandingPage {

    appointPsc01() {
        cy.get('#addIndividual').click();
    }

    appointPsc02() {
        cy.get('#addCorporate').click();
    }

    appointPsc03() {
        cy.get('#addLegalPerson').click();
    }

    addPscStatement() {
        cy.get('#addStatement').click();
    }

}

export default PSCLandingPage