
class ManageRegistersPreFilingPage {

    selectDirectorsRegister() {
        //Click Directors link and then change register location button
        cy.get(':nth-child(1) > .toggle-link').click();
        //Check after clicking the link
        cy.accessibilityCheck();
        cy.contains('Change location of this register').click();
    }

    selectDirectorsUraRegister() {
        //Click Directors link and then change register location button
        cy.get(':nth-child(3) > .toggle-link').click();
        //Check after clicking the link
        cy.accessibilityCheck();
        cy.get(':nth-child(3) > .hidden-text > .grid_4 > p > .button').click();
    }

    selectSecretariesRegister() {
        //Click Secretaries link and then change register location button
        cy.get(':nth-child(2) > .toggle-link').click();
        //Check after clicking the link
        cy.accessibilityCheck();
        cy.get(':nth-child(2) > .hidden-text > .grid_4 > p > .button').click();
    }


}

export default ManageRegistersPreFilingPage