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
}

export default AllFormsPage