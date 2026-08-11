import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Header from "../src/components/Header";
import Specialties from "../src/components/Specialties";

describe("public navigation", () => {
  it("preserves the especialidades fragment destination", () => {
    const { container } = render(<Specialties />);

    expect(container.querySelector("#especialidades")).toBeInTheDocument();
  });

  it("moves focus to the destination before closing the mobile menu", () => {
    render(
      <>
        <Header />
        <main>
          <section id="inicio">Inicio</section>
        </main>
      </>,
    );

    fireEvent.click(screen.getByRole("button", { name: "Abrir menú" }));
    const mobileMenu = document.getElementById("mobile-menu");
    fireEvent.click(within(mobileMenu).getByRole("link", { name: "Inicio" }));

    expect(document.querySelector("#inicio")).toHaveFocus();
    expect(document.getElementById("mobile-menu")).not.toBeInTheDocument();
  });
});
