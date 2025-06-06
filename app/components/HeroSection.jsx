import HeroImage from "./HeroImage";

export default function HeroSection() {
  return (
    <>
      <section className="grid items-center min-h-[calc(100vh-104px)] w-full grid-cols-2">
        <HeroImage />
        <div></div>
        <p className="max-w-lg justify-self-end">
          Dette er mitt første prosjekt i Nextjs. Prosjektet går til å lage en
          portfolio side som viser hvem jeg er og hva jeg kan. Jeg lager denne
          portfolioen for å trene videre på design og webutvikling. Styling blir
          gjort i tailwind og css.
        </p>
        {/* <div className="flex justify-center items-center absolute left-80 top-2/4 md:left-260 md:top-2/6">
          <img src="/profilBilde-removebg-preview (1).png" alt="" />
        </div> */}
      </section>
    </>
  );
}
