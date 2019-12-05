class BasePage {

    expandAll() {
        cy.contains('Expand all').click();
    }

    submitForm() {
        cy.get("input[value^='Submit']").click();
    }

    openCompanyOverview() {
        cy.get(':nth-child(5) > .headerClick');
    }

}

export default BasePage