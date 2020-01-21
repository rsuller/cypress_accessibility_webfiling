import PscAppointment from "./generic/PscAppointment";

class PscStatmentPage extends PscAppointment {

    selectReason() {
        cy.get('#reason-no-details-label').click();
    }

    selectReasonContinue() {
        cy.get('#statement-reason-container-continue').click();
    }

    selectStatement() {
        cy.get('#psc-identified-label').click();
    }

    selectStatementContinue() {
        cy.get('#psc-statement-container-continue').click();
    }

    selectRegisterEntryDateContinue() {
        cy.get('#statement-date-container-continue').click();
    }

    selectTodayAsRegisterEntryDate() {
        const dayElement = '#day-select-1';
        const monthElement = '#month-select-1';
        const yearElement = '#year-select-1';
        cy.selectTodaysDate(dayElement, monthElement, yearElement);

    }

    submitStatment() {
        cy.get(':nth-child(7) > div > .button').click();
        cy.checkPageHeadingIs('Confirmation of Submission');
        // Navigate back to company overview page
        cy.get('.positive').click();
        cy.get('.margin-top-20 > a').click();
    }

}

export default PscStatmentPage