import OfficerAppointment from "./OfficerAppointment";

class PscAppointment extends OfficerAppointment {

    selectNatureOfControl() {
        cy.get('#significant-influence-control').click();
        cy.get('#significant-influence-control-person').click();
        cy.get('#nature-of-control-container-continue').click();
    }

    selectTodayAsNotificationDate() {
        const dayElement = '#start-date-container > div.dateselector > .date-selector > :nth-child(2) > .selector-day';
        const monthElement = '#start-date-container > div.dateselector > .date-selector > :nth-child(3) > .selector-month';
        const yearElement = '#start-date-container > div.dateselector > .date-selector > :nth-child(4) > .selector-year';

        cy.selectTodaysDate(dayElement, monthElement, yearElement);
        cy.get('#start-date-container-continue').click();
    }

    selectTodayAsRegisterEntryDate() {
        const dayElement = '#register-entry-date-container > div.dateselector > .date-selector > :nth-child(2) > .selector-day';
        const monthElement = '#register-entry-date-container > div.dateselector > .date-selector > :nth-child(3) > .selector-month';
        const yearElement = '#register-entry-date-container > div.dateselector > .date-selector > :nth-child(4) > .selector-year';

        cy.selectTodaysDate(dayElement, monthElement, yearElement);
        cy.get('#register-entry-date-container-continue').click();
    }

}

export default PscAppointment