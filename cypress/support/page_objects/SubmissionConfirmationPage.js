class SubmissionConfirmationPage {

    confirmHeadingContains(text) {
        cy.get('h1').should('have.text', text);
    }

}

export default SubmissionConfirmationPage