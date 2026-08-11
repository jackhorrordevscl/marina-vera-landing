const valueFromEnvironment = (name) => (import.meta.env[name] || "").trim();

const registration = "829352";

export const publicSite = Object.freeze({
  practice: Object.freeze({
    name: "Marina Vera Guzmán",
    role: "Psicóloga Clínica",
    registration,
    registrationLabel: `Registro SIS N° ${registration}`,
    approach: "Enfoque sistémico-funcional y transgeneracional",
  }),
  navigation: Object.freeze([
    { label: "Inicio", href: "#inicio" },
    { label: "Acompañamiento", href: "#acompanamiento" },
    { label: "Modalidades", href: "#modalidades" },
    { label: "Sobre mí", href: "#sobre-mi" },
    { label: "Solicitar cita", href: "#contacto" },
  ]),
  external: Object.freeze({
    email: valueFromEnvironment("VITE_EMAIL"),
    clinicalControl: "https://control-fichas.vercel.app/login",
    social: Object.freeze([
      {
        label: "Instagram",
        url:
          valueFromEnvironment("VITE_INSTAGRAM_URL") ||
          "https://www.instagram.com/psico_marinade_colores",
      },
      {
        label: "TikTok",
        url:
          valueFromEnvironment("VITE_TIKTOK_URL") ||
          "https://www.tiktok.com/@marinna_decolores",
      },
      {
        label: "YouTube",
        url: "https://www.youtube.com/@Psico_marinadecolores",
      },
      {
        label: "Facebook",
        url:
          "https://www.facebook.com/people/Marinna-de-Colores/61582718874848/?rdid=QcPIbYoyISqzSYDX&share_url=https%253A%252F%252Fwww.facebook.com%252Fshare%252F17zMTNjsaz%252F",
      },
    ]),
  }),
});
