import { createEvent, fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "../src/App";

describe("appointment contract", () => {
  it("collects only the defined appointment details in memory and never submits them", () => {
    const { container } = render(<App />);

    const form = screen.getByRole("form", { name: /cuando lo desees/i });
    const name = screen.getByRole("textbox", { name: /nombre/i });
    const contact = screen.getByRole("textbox", { name: /contacto preferido/i });
    const message = screen.getByRole("textbox", { name: /mensaje breve/i });
    const submit = screen.getByRole("button", { name: /envío no disponible/i });

    expect(name).toBeRequired();
    expect(contact).toBeRequired();
    expect(message).not.toBeRequired();
    expect(submit).toBeDisabled();
    expect(form).not.toHaveAttribute("action");
    expect(screen.getByText(/no incluyas antecedentes clínicos, diagnósticos, medicamentos ni situaciones urgentes/i)).toBeInTheDocument();
    expect(screen.getByText(/cuando se configure el canal de contacto/i)).toBeInTheDocument();

    fireEvent.change(name, { target: { value: "Ana" } });
    fireEvent.change(contact, { target: { value: "ana@example.com" } });
    expect(name).toHaveValue("Ana");
    expect(contact).toHaveValue("ana@example.com");

    const submitEvent = createEvent.submit(form);
    fireEvent(form, submitEvent);
    expect(submitEvent.defaultPrevented).toBe(true);

    expect(container.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp"]')).toHaveLength(0);
    expect(container.querySelectorAll('input[type="hidden"]')).toHaveLength(0);
  });

  it("allows choosing the requested modality without activating a delivery channel", () => {
    render(<App />);

    const online = screen.getAllByRole("radio", { name: /^online$/i })[0];
    const inPerson = screen.getAllByRole("radio", { name: /^presencial$/i })[0];

    expect(online).toBeRequired();
    expect(inPerson).not.toBeChecked();

    fireEvent.click(inPerson);
    expect(inPerson).toBeChecked();

    fireEvent.click(online);
    expect(online).toBeChecked();
  });
});
