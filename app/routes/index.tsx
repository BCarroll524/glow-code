import { useState } from "react";

export default function Index() {
  const [isLegal, setIsLegal] = useState(false);
  return (
    <main className="min-h-full h-full">
      {!isLegal ? (
        <AreYouLegal onClick={() => setIsLegal(true)} />
      ) : (
        <>
          <AboveTheFold />
          <CrackedTheCode />
          <TrialImage />
          <TrialBenefits />
          <FollowSteps />
          <GlowCodeBenefits />
          <Review />
          <Survey />
        </>
      )}
    </main>
  );
}

const AreYouLegal = ({ onClick }: { onClick: () => void }) => {
  return (
    <section className="h-full flex flex-col justify-center items-center gradient4">
      <img src="images/icon.png" alt="Glow Code" className="w-20 h-20 mb-12" />
      <h1
        style={{ fontFamily: "system-ui" }}
        className="text-[32px] px-3 text-white text-center mb-8 leading-tight font-bold"
      >
        YOU'VE GOTTA BE 21+ TO GET INTO THIS PARTY
      </h1>
      <button
        onClick={onClick}
        className="my-[10px] w-11/12 bg-black rounded-[4px] text-inter text-sm text-white uppercase font-semibold py-3"
      >
        i am. let me in!
      </button>
      <button className="my-[10px] w-11/12 bg-black rounded-[4px] text-inter text-sm text-white uppercase font-semibold py-3">
        not yet. sorry
      </button>
      <p className="py-[10px] text-xs text-black text-center">
        You must be 21 or older to enter. Please drink responsibly
      </p>
    </section>
  );
};

const AboveTheFold = () => {
  return (
    <section className="relative">
      <img
        src="/images/above-the-fold-background.png"
        className="h-[372px] w-full object-cover"
        alt="Above the fold background"
      />
      <div className="absolute inset-0 pt-2 flex flex-col items-center justify-center gap-3">
        <h1 className="font-nicky text-white text-[64px] leading-[110%]">
          Glow
          <br />
          Code
        </h1>
        <CTA />
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <button
      className="rounded-full w-[234px] px-2 py-2 bg-light-blue font-inter text-xl shadow-lg"
      onClick={() => {
        const element = document.getElementById("survey");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }}
    >
      Try it for Free
    </button>
  );
};

const CrackedTheCode = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-2 gradient1 text-center py-[60px]">
      <div className="flex flex-col gap-4 pb-3">
        <h2 className="font-nicky text-white whitespace-pre-wrap text-4xl">{`We Cracked the\nCode`}</h2>
        <p className="font-inter text-white text-base">
          Try Glow Code to prevent alcohol flush
        </p>
      </div>
      <CTA />
      <p className="font-inter text-white text-base">
        and a chance to win $1000 cash
      </p>
    </section>
  );
};

const TrialImage = () => {
  return (
    <section className="relative">
      <img
        src="images/2-easy-steps.png"
        alt="Trial has 3 fun and easy steps"
        className="object-cover w-full h-full brightness-75"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
        <h2 className="font-nicky text-white whitespace-pre-wrap text-4xl leading-tight text-center">{`Trial has\n3 fun & easy\nsteps`}</h2>
        <CTA />
      </div>
    </section>
  );
};

const TrialBenefits = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-6 gradient2 text-center py-[60px]">
      <h2 className="font-nicky text-slate-900 whitespace-pre-wrap text-4xl leading-tight">
        Trial Benefits
      </h2>
      <div className="grid grid-cols-2 max-w-[331px] gap-y-3 gap-x-2">
        {benefits.map((benefit, index) => (
          <Benefit key={index} {...benefit} />
        ))}
      </div>
      <CTA />
    </section>
  );
};

const benefits = [
  {
    step: 1,
    label: "First 500 participants get entered to win $1000 cash",
  },
  {
    step: 2,
    label: "Lifetime product discount",
  },
  {
    step: 3,
    label: "Free bottle of product at launch",
  },
  {
    step: 4,
    label: "Chance to be a brand ambassador",
  },
];

const Benefit = ({ step, label }: { step: number; label: string }) => {
  return (
    <div>
      <img
        src={`/images/step${step}.png`}
        alt={`Step ${step}`}
        className="w-16 h-16 mx-auto"
      />

      <p className="font-inter text-black pt-3">{label}</p>
    </div>
  );
};

const FollowSteps = () => {
  return (
    <section className="relative">
      <div className="absolute inset-0">
        <img
          src="images/follow-these-steps.png"
          alt="Follow these steps to try"
          className="absolute object-cover w-full h-full brightness-75"
        />
      </div>
      <div className="relative flex flex-col items-center justify-center gap-6 px-6 py-[60px]">
        <h2 className="font-nicky text-white whitespace-pre-wrap text-4xl text-center leading-tight">
          {`Follow these\nsteps to try`}
        </h2>
        <div className="space-y-10">
          <div className="flex gap-3 items-center">
            <p className="font-nicky text-white text-4xl">1.</p>
            <p className="font-inter text-white text-lg">
              Answer a few questions about yourself
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <p className="font-nicky text-white text-4xl">2.</p>
            <p className="font-inter text-white text-lg">
              Take glow code along with you on a night out and snap some pics
              along the way
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <p className="font-nicky text-white text-4xl">3.</p>
            <p className="font-inter text-white text-lg">
              Tell us how it went!
            </p>
          </div>
        </div>
        <CTA />
      </div>
    </section>
  );
};

const GlowCodeBenefits = () => {
  return (
    <section className="flex flex-col items-center justify-center px-6 bg-dark-blue text-center py-[60px]">
      <h2 className="font-nicky text-white whitespace-pre-wrap text-4xl pb-5 leading-tight">{`Benefits of\n#GlowCode`}</h2>
      <p className="font-inter text-white text-lg pb-10">
        A remedy made up of natural extracts to keep the flush away all night
        long
      </p>
      <div className="flex flex-col gap-6 pb-8">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-lg border border-dashed border-white" />
          <p className="font-inter font-semibold text-white text-lg">
            Developed by scientists
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-lg border border-dashed border-white" />
          <p className="font-inter font-semibold text-white text-lg">
            All natural detoxifier
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-lg border border-dashed border-white" />
          <p className="font-inter font-semibold text-white text-lg">
            Immediate results
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-lg border border-dashed border-white" />
          <p className="font-inter font-semibold text-white text-lg">
            Glow Guard + hangover remedy
          </p>
        </div>
      </div>
      <CTA />
    </section>
  );
};

const Review = () => {
  return (
    <section className="flex flex-col items-center justify-center px-6 gap-6 gradient3 text-center py-[60px]">
      <h2 className="font-nicky text-red-600 whitespace-pre-wrap text-4xl leading-tight">
        8% of People Suffer from Alcohol Flush
      </h2>
      <p className="font-inter text-red-600 text-lg">
        &#8220;I have been suffering from alcohol flush for over a decade and
        after trying Glow Code my redness diminished SIGNIFICANTLY&#8221;
      </p>
      <div className="flex gap-3 items-center pb-8">
        <img
          src="images/cate.png"
          alt="Cate Evans"
          className="w-16 h-16 rounded-full object-cover"
        />
        <p className="font-inter text-left text-red-600 text-lg whitespace-pre-wrap leading-tight">{`Cate Evans\na #GlowCode user`}</p>
      </div>
      <CTA />
    </section>
  );
};

const Survey = () => {
  return (
    <section
      id="survey"
      className="flex items-center justify-center px-6 bg-light-pink py-[60px]"
    >
      <iframe
        title="Glow Code Survey"
        src="https://docs.google.com/forms/d/e/1FAIpQLSepMsdeHD1ks37YBzbBDIf7brh9RrQf6F6dTc85FSRGuL5MDw/viewform?embedded=true"
        width="330"
        height="1000"
      >
        Loading…
      </iframe>
    </section>
  );
};
