class AllFormsPage {

    selectDirectorAndSecretaries() {
        cy.contains('Directors and secretaries').click();
        return this;
    }

    selectTM01() {
        cy.contains('Termination of appointment of director - TM01').click();
    }

    selectCH01() {
        cy.contains('Change of director\'s details - CH01').click();
    }

    selectCH03() {
        cy.contains('Change of secretary\'s details - CH03').click();
    }

    selectCH04() {
        cy.contains('Change of corporate secretary\'s details - CH04').click();
    }

    selectPscs() {
        cy.contains('Persons with significant control').click();
        return this;
    }

    selectPsc01() {
        cy.contains('Notification of a person with significant control (PSC) - PSC01').click();
        return this;
    }

    selectPsc04() {
        cy.get('#psc04-form-link').click();
        return this;
    }

    selectPsc05() {
        cy.get('#psc05-form-link').click();
        return this;
    }
    
    selectPsc07() {
        cy.get('#psc07-form-link').click();
        return this;
    }

    selectPsc09() {
        cy.get('#psc09-form-link').click();
        return this;
    }

    selectStrikeOffAndDissolution() {
        cy.contains('Strike off and dissolution').click();
        return this;
    }

    selectDs02() {
        cy.contains('Withdrawal of application to strike off - DS02').click();
    }

    selectChangeRoAndCompanyRecords() {
        cy.contains('Change registered office and location of company records').click();
        return this;
    }

    selectEh01() {
        cy.contains("Provide your directors' information on the public register - EH01").click();
    }

    selectMortgageForms() {
        cy.get('#mortgage-forms').click();
        return this;
    }

    selectMr01() {
        cy.contains("Register a charge - MR01").click();
    }

    selectMr02() {
        cy.contains('Register an acquisition - MR02').click();
    }

    selectMr04() {
        cy.contains('Satisfy a charge - MR04').click();
    }

}

export default AllFormsPage