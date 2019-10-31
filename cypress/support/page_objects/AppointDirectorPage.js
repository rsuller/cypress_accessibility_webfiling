class AppointDirectorPage {

    enterName(title, firstName, middleName, lastName) {
        cy.get('#Title').type(title);
        cy.get('#Forename').type(firstName);
        cy.get('#OtherForenames').type(middleName);
        cy.get('#Surname').type(lastName);
        cy.get('#name-container-continue').click();
    }

    selectDateOfBirth(day, month, year) {
        cy.get('#dob-container > div.dateselector > .date-selector > :nth-child(2) > .selector-day').select(day);
        cy.get('#dob-container > div.dateselector > .date-selector > :nth-child(3) > .selector-month').select(month);
        cy.get('#dob-container > div.dateselector > .date-selector > :nth-child(4) > .selector-year').select(year);
        cy.get('#dob-container-continue').click();
    }

    enterNationality(nationality) {
        cy.get('#nationality1').type(nationality);
        cy.get('#nationality-container-continue').click();
    }

    enterOccupation(occupation) {
        cy.get('#Occupation').type(occupation + '{enter}');
    }

    selectROasCorrespondenceAddress() {
        cy.get('#correspondence-address-choice-ro-label').click();
        cy.get('#service-address-sameAsLinkConf').check();
        cy.get('#service-address-container-continue').click();
    }

    enterHomeAddress(propertyNumber, postcode) {
        cy.get('#home-address-choice-manual-label').click();
        cy.get('#residential-address-premise').type(propertyNumber);
        cy.get('#residential-address-postcode').type(postcode);
        cy.get('#residential-address-postcode-Lookup').wait(2000).click();
        cy.get('#residential-address-container-continue').wait(2000).click();
    }

    checkCountryOfResidenceContains(country) {
        cy.get('#CountryOfResidence').should('have.value', country);
        cy.get('#country-of-residence-container-continue').click();
    }

    selectTodayAsAppointmentDate() {
        const day = Cypress.moment().format('DD');
        const month = Cypress.moment().format('MMMM');
        const year = Cypress.moment().format('YYYY');

        cy.get('#appt-date-container > div.dateselector > .date-selector > :nth-child(2) > .selector-day').select(day);
        cy.get('#appt-date-container > div.dateselector > .date-selector > :nth-child(3) > .selector-month').select(month);
        cy.get('#appt-date-container > div.dateselector > .date-selector > :nth-child(4) > .selector-year').select(year);
        cy.get('#appt-date-container-continue').click();
    }

    consentToAct() {
        cy.get('#socta-statement').check();
        cy.get('#statement-of-consent-to-act-container-continue').click();
    }

}

export default AppointDirectorPage