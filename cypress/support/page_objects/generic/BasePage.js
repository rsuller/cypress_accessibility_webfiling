class BasePage {

    expandAll() {
        cy.contains('Expand all').click();
    }

    submitForm() {
        cy.get("input[value^='Submit']").click();
    }

}
