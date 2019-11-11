import PscAppointment from "./generic/PscAppointment";

class AppointPSC02Page extends PscAppointment {

    enterCorporateName(corporateName) {
        cy.get('#corporate-name').type(corporateName);
        cy.get('#corporate-name-container-continue').click();
    }

    enterEntityDetails(legalForm, lawGoverned) {
        cy.get('#legal-form').type(legalForm);
        cy.get('#law-governed').type(lawGoverned);
        cy.get('#psc-eea-container-continue').click();
    }

}

export default AppointPSC02Page