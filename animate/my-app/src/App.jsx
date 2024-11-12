import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <h1 className="logo">scale</h1>
        <nav className="nav">
          <a href="#products">Products</a>
          <a href="#labs">Leaderboards</a>
          <a href="#enterprise">Enterprise</a>
          <a href="#customers">Governments</a>
          <a href="#customers">Customers</a>
          <a href="#resources">Resources</a>
        </nav>

        <button className="demo-button">Book a Demo →</button>
        <button className="build-button">Log in</button>
        <div className="navbar-menu">☰</div>
      </header>

      {/* Main Section */}
      <section className="hero">
        <h1>
          Power <span className="highlight">Government AI</span> <br />
          With Your Data
        </h1>
        <p className="hero-subtitle">
          Make the best models with the best data. Scale Data Engine powers
          every major foundation model, and our ecosystem of AI tools helps you
          leverage data to unlock the value of AI.
        </p>
        <div className="buttons">
          <button className="demo-button">Book a Demo →</button>
          <button className="build-button">Build AI →</button>
        </div>

        {/* <button className="cta-button">Talk to an Expert</button> */}

        <div>
          <p className="footer-text">
            Scale works with Generative AI Companies, U.S. Government Agencies &
            Enterprises
          </p>
        </div>
      </section>

      <section className="partners">
        <img
          src="https://scale.com/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fmicrosoft.png&w=256&q=100"
          alt="Microsoft"
        />
        <img
          src="https://scale.com/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fmeta.png&w=256&q=100"
          alt="Meta"
        />
        <img
          src="https://scale.com/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fcisco.png&w=256&q=100"
          alt="Cisco"
        />
        <img
          src="https://scale.com/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fbcg.png&w=256&q=100"
          alt="bcg"
        />
        <img
          src="https://scale.com/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Fgeneral-motors.png&w=96&q=100"
          alt="Cisco"
        />
        <img
          src="https://scale.com/_next/image?url=%2Fstatic%2Fimages%2Flogos%2Fcustomers%2Ftoyota.png&w=256&q=100"
          alt="Cisco"
        />
      </section>

      {/* Research Section */}
      <section className="research">
        <h2>Frontier AI Research</h2>
        <p>
          SEAL (Safety, Evaluation, and Alignment Lab) is our research
          initiative to improve model capabilities through challenging private
          evaluation and novel research.
        </p>
        <div className="research-cards">
          <div className="research-card">LLMs as Browser Agents</div>
          <div className="research-card">Multi-Turn Human Defenses</div>
          <div className="research-card">Mitigating Malicious Use</div>
          {/* Add more cards as needed */}
        </div>
      </section>

      {/* Generative AI Architecture Section */}
      <section className="architecture">
        <h3>AI for the Enterprise</h3>
        <h2>Generative AI Architecture</h2>
        <p>
          Whether you're building your own models or applying foundation models
          to your business, data remains the biggest bottleneck to AI.
        </p>
        <div>
          <button className="demo-button">Book a Demo →</button>
        </div>
      </section>

      <section className="rlhf-section">
        <div className="text-content">
          <h1 className="main-heading">Fine-Tuning and RLHF</h1>
          <p className="main-description">
            Adapt best-in-class foundation models to your business and your
            specific data to build sustainable, successful AI programs and data
            from your enterprise.
          </p>

          <div className="sub-sections">
            <div className="sub-section">
              <h2 className="sub-heading">Foundation Models</h2>
              <p className="sub-description">
                Scale partners or integrates with all of the leading AI models,
                from open-source to closed-source, including OpenAI, Google,
                Meta, Cohere, and more.
              </p>
            </div>

            <div className="sub-section">
              <h2 className="sub-heading">Enterprise Data</h2>
              <p className="sub-description">
                Scale's Data Engine enables you to integrate your enterprise
                data into the fold of these models, providing the base for
                long-term strategic differentiation.
              </p>
            </div>
          </div>
        </div>

        <div className="image-container">
          <img
            src="https://scale.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhole-model.1daa48ee.png&w=1920&q=100"
            alt="RLHF Chip"
            className="rlhf-image"
          />
        </div>
      </section>
      <section className="ai-partners">
        <h2 className="partners-heading">
          Generative AI Providers We Partner With:
        </h2>
        <div className="partners-logos">
          <button className="partner-logo">OpenAI</button>
          <button className="partner-logo">Adept</button>
          <button className="partner-logo">Meta</button>
          <button className="partner-logo">Cohere</button>
          <button className="partner-logo">Anthropic</button>
        </div>
      </section>

      <section className="data-engine">
        <button className="build-button">Build AI</button>
        <h1 className="data-engine-title">Scale Data Engine</h1>
        <p className="data-engine-description">
          For AI teams, Scale Data Engine improves your models by improving your
          data.
        </p>

        <div className="data-cards">
          <div className="data-card">
            <div className="card-header">
              <h2>RLHF</h2>
              <p>Powering the next generation of Generative AI</p>
            </div>
            <p className="card-content">
              Scale generative AI Data Engine powers the most advanced LLMs and
              Generative models in the world through workflows like RLHF, data
              synthesis, model evaluation, safety, and alignment.
            </p>
            <button className="card-button">Label My Data</button>
          </div>
        </div>
        <div className="data-cards">
          <div className="data-card">
            <div className="card-header">
              <h2>Data Labeling</h2>
              <p>The best quality data to fuel the best performing models</p>
            </div>
            <p className="card-content">
              Scale has pioneered in the data labeling industry by providing
              high-quality labeled data to industry leaders with an unmatched
              quality, scalability, and efficiency.
            </p>
            <button className="card-button">Label My Data</button>
          </div>
        </div>
        <section className="rlhf-section">
          <div className="text-content">
            <h1 className="main-heading">Data Curation</h1>
            <h3 className="main-heading">
              Unearth the most valuable data by intelligently managing your
              dataset
            </h3>
            <p className="main-description">
              Scale’s suite of dataset management, testing, model evaluation,
              and model comparison tools enable you to “label what matters.”
              Maximize the value of your labeling budget by identifying the
              highest value data to label, even without ground truth labels.
            </p>
            <button className="demo-button">Curate My Data →</button>
          </div>

          <div className="image-container">
            <img
              src="https://scale.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdata-curation.a2475705.png&w=1920&q=100"
              alt="RLHF Chip"
              className="rlhf-image"
            />
          </div>
        </section>

        <div className="text-content">
          <h4 className="main-heading">Apply AI</h4>
          <h1 className="main-heading">Generative AI Applications</h1>
          <p className="main-description">
            Easily Apply AI to your most challenging use cases with pre‑built
            applications that harness the power of customized LLMs.
          </p>
        </div>
        <div className="text-content">
          <h4 className="main-heading">
            LEARN HOW WE SERVE ENTERPRISES LARGE AND SMALL
          </h4>
          <h1 className="main-heading">Case Studies & Resources</h1>
          <p className="main-description">
            We've worked with the world's leading AI teams for years, and
            delivered more high-quality data than anybody else.
          </p>
        </div>
        <div className="text-content">
          <h4 className="main-heading">Customers</h4>
          <h1 className="main-heading">
            We have changed the game of AI Evaluations - hear it from Industry
            Leaders.
          </h1>
          <p className="main-description">
            Scale’s SEAL Leaderboards are bringing trust to AI; learn from
            experts why expert-driven private evaluations are so important.
          </p>
        </div>
        <div className="text-content">
          <p className="main-description">
            Scale is doing an amazing job providing high quality uncontaminated
            evals now with code and instruction following!
          </p>
          <h5 className="main-heading">NOAM BROWN</h5>
          <h6 className="main-heading">Member of Technical Staff,Open AI</h6>
        </div>
        <header className="header">
          <div className="header-content">
            <h1 >
              The future of your industry
              <span className="highlight"> starts here.</span> <br />
            </h1>

            <div className="buttons">
              <button className="demo-button">Book a Demo →</button>
              <button className="build-button">Build AI →</button>
            </div>
          </div>
        </header>
      </section>
      <footer className="footer">
        <div className="footer-columns">
          <div className="footer-column">
            <h3>Resources</h3>
            <ul>
              <li>Blog</li>
              <li>Contact Us</li>
              <li>Customers</li>
              <li>Events</li>
              <li>Open Datasets</li>
              <li>Documentation</li>
              <li>Guides</li>
              <li>Community</li>
              <li>AI Readiness Report 2024</li>
              <li>Research</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Guides</h3>
            <ul>
              <li>Data Labeling</li>
              <li>ML Model Training</li>
              <li>Diffusion Models</li>
              <li>Guide to AI for eCommerce</li>
              <li>Computer Vision Applications</li>
              <li>Large Language Models</li>
            </ul>
          </div>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons"></div>
        </div>
        <div className="footer-bottom">
          <p>Copyright © 2024 Scale AI, Inc. All rights reserved.</p>
          <p>Terms of Use & Privacy Policy</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
