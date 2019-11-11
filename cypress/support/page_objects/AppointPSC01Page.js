import PscAppointment from "./generic/PscAppointment";

class AppointPSC01Page extends PscAppointment {

    selectDateOfBirth(day, month, year) {
        cy.get('#dob-container > div.dateselector > .date-selector > :nth-child(2) > .selector-day').select(day);
        cy.get('#dob-container > div.dateselector > .date-selector > :nth-child(3) > .selector-month').select(month);
        cy.get('#dob-container > div.dateselector > .date-selector > :nth-child(4) > .selector-year').select(year);
        cy.get('#dummy-dob-continue').click();
    }
  
}

export default AppointPSC01Page