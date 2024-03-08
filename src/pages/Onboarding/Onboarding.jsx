import "./Onboarding.css";

const Onboarding = () => {
  return (
    <section className="onboarding">
      <div className="onboarding__pics">
        <img src="public/images/splash-line2.svg" alt="" />
        <img src="public/images/boarding-logo.png" alt="Onboarding-pic" />
        <img src="public/images/splash-line3.svg" alt="" />
      </div>

      <div className="onboarding__allRecipe">
        <h1>All recipe you needed</h1>
        <p>5000+ healthy recipes made by people for your healthy life</p>
        <a href="">Get Started</a>
      </div>
    </section>
  );
};

export default Onboarding;
