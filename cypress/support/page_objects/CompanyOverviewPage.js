class CompanyOverviewPage  {
    
    selectAllForms() {
        cy.get('#tabFormListing').click();
        return this;
    }

    selectLinkWithText(linkText) {
        cy.contains(linkText).click();
        return this;
    }

}

export default CompanyOverviewPage;