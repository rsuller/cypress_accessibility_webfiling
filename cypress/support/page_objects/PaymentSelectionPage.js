class PaymentSelectionPage {

    confirmHeadingContains(text) {
        cy.get('h1').should('have.text', text);
        return this;
    }

    selectPaymentByAccount() {
        cy.get('#paytype_account').click();
        return this;

    }
        
    enterPresenterID(id) {
        cy.get('#presenterId').type(id);
        return this;
    }

    enterPresenterAuthcode(authcode) {
        cy.get('#presenterCode').type(authcode);
        return this;
    }


    continue() {
        cy.get('.button').click();
        return this;
    }

}

export default PaymentSelectionPage