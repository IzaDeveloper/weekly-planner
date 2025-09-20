describe("Planner Semanal", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5050");
  });

  it("Deve criar uma nova tarefa", () => {
    cy.window().then((win) => {
      cy.stub(win, "prompt").returns("Nova tarefa Cypress");
      cy.contains("+ Nova Tarefa").click();
    });

    cy.contains("Nova tarefa Cypress").should("exist");
  });

  it("Deve mover a tarefa para outro dia", () => {
    // 1. Criar a tarefa
    cy.window().then((win) => {
      cy.stub(win, "prompt").returns("Mover tarefa");
      cy.contains("+ Nova Tarefa").click();
    });

    // 2. Criar um objeto DataTransfer
    const dataTransfer = new DataTransfer();

    // 3. Simular drag and drop com dataTransfer
    cy.contains("Mover tarefa")
      .trigger("dragstart", { dataTransfer });

    cy.contains("Sex")
      .trigger("dragover", { dataTransfer })
      .trigger("drop", { dataTransfer });

    // 4. Verifica se a tarefa foi movida para a coluna de sexta
    cy.contains("Sex")
      .parent()
      .should("contain", "Mover tarefa");
  });
});
