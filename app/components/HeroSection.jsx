import HeroImage from "./HeroImage";

export default function HeroSection() {
  return (
    <>
      <section className="grid items-center min-h-[calc(100vh-104px)] w-full grid-cols-2">
        <HeroImage />
        <div></div>
        <p className="max-w-lg justify-self-end">
          Dette er første prosjekt i nextjs. Prosjektet går til å lage en
          portfolio side som viser hvem jeg er og hva jeg kan. Jeg lager denne
          portfolioen for å trene videre på design og webutvikling. Styling blir
          gjort for det meste i tailwind og litt css.
        </p>
      </section>
    </>
  );
}
