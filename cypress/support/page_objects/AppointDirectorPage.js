import OfficerAppointment from "./generic/OfficerAppointment";

class AppointDirectorPage extends OfficerAppointment {


    selectDateOfBirth(day, month, year) {
        cy.get('#dob-container > div.dateselector > .date-selector > :nth-child(2) > .selector-day').select(day);
        cy.get('#dob-container > div.dateselector > .date-selector > :nth-child(3) > .selector-month').select(month);
        cy.get('#dob-container > div.dateselector > .date-selector > :nth-child(4) > .selector-year').select(year);
        cy.get('#dob-container-continue').click();
    }

    enterOccupation(occupation) {
        cy.get('#Occupation').type(occupation + '{enter}');
    }

    selectTodayAsAppointmentDate() {
        const dayElement = "#appt-date-container > div.dateselector > .date-selector > :nth-child(2) > .selector-day";
        const monthElement = "#appt-date-container > div.dateselector > .date-selector > :nth-child(3) > .selector-month";
        const yearElement = "#appt-date-container > div.dateselector > .date-selector > :nth-child(4) > .selector-year";

        cy.selectTodaysDate(dayElement, monthElement, yearElement);
        cy.get('#appt-date-container-continue').click();
    }

    consentToAct() {
        cy.get('#socta-statement').check();
        cy.get('#statement-of-consent-to-act-container-continue').click();
    }

}

export default AppointDirectorPage