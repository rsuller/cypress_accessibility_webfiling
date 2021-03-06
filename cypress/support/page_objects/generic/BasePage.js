class BasePage {

    expandAll() {
        cy.contains('Expand all').click({force: true});
    }

    submitForm() {
        cy.get("input[value^='Submit']").click();
    }

}

export default BasePage
