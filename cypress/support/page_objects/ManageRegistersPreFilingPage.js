
class ManageRegistersPreFilingPage {

    selectDirectorsRegister() {
        //Click Directors link and then change register location button
        cy.get(':nth-child(1) > .toggle-link').click();
        //Check after clicking the link
        cy.accessibilityCheck();
        cy.contains('Change location of this register').click();
    }


}

export default ManageRegistersPreFilingPage