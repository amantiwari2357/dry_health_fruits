import React, { useEffect } from "react";
import "./about.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const About = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <>
      <Helmet>
        <title>About Us - Goyat Trading. Co</title>
        <meta
          name="description"
          content="Learn about Shri Godham Mahatirtha Pathmeda, a revolutionary initiative for Gomata protection, Ayurveda medicine, and cultural preservation in India."
        />
        <meta
          name="keywords"
          content="Gomata, Gomata protection, Goseva Mahabhiyan, Ayurveda medicine, Vedalakshana Gomata, Shri Godham Mahatirtha Pathmeda, Gomata ashrams, environmental refinement, Indian culture, Goseva, Dhenu conservation, sustainable development"
        />
        <meta name="author" content="Shri Godham Mahatirtha" />
      </Helmet>
      <section className="breadcrumb">
        <div className="breadcrumb-overlay">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 col-6">
                <Link
                  to="/"
                  className="back-icon text-decoration-none text-white d-flex align-items-center gap-2"
                >
                  <i className="bi bi-arrow-left"></i> Back to category
                </Link>
              </div>
              <div className="col-md-6 col-6 text-end">
                <div className="breadcrumb-nav text-white align-items-center d-flex justify-content-end gap-2">
                  <Link className="text-white" to="/">
                    <i className="bi bi-house"></i>
                  </Link>
                  /
                  <Link className="text-white terms-link" to="/about-us">
                    About Us
                  </Link>
                </div>
              </div>
            </div>
            <h1 className="text-white mt-3">About Us</h1>
            <p className="text-white mt-3 mb-0">Support 24 × 7</p>
          </div>
        </div>
      </section>
      <section className="aboutUs">
        <div className="container">
          <div className="about_content">
            <div className="heading">
              <h2>About Us – Goyat Trading.Co</h2>
            </div>
            <p>
              At Goyat Trading Co., we specialize in the import and distribution
              of high-quality products ranging from industrial materials to
              consumer goods. Our commitment to excellence, reliability, and
              customer satisfaction drives everything we do. With an unwavering
              focus on quality and service, we ensure that our products meet the
              highest standards to fulfill the diverse needs of our clients
              worldwide.
            </p>
            <p>{/* write more */}</p>
            <p>{/* write more */}</p>
          </div>
        </div>
      </section>
      <section className="about-core-values">
        <div className="container">
          <div className="about_content">
            <div className="heading">
              <h2>Our Journey</h2>
            </div>
            <p>
              Founded in 2010, Goyat Trading.Co started as a small trading firm
              with a vision to become a global leader in the supply of premium
              goods. Over the years, we have expanded our operations to include
              a vast network of suppliers and partners, enabling us to deliver
              exceptional products to various industries across the globe. Our
              dedication to building strong relationships with both our
              customers and suppliers has been the cornerstone of our success.
            </p>
          </div>
        </div>
      </section>
      <section className="about-our-work">
        <div className="container">
          <div className="about_content">
            <div className="heading">
              <h2>What We Stand For</h2>
            </div>
            <p>
              At Goyat Trading.Co, quality is our promise, and integrity is our
              principle. Every product we offer is carefully selected,
              processed, and packaged to retain its natural taste, nutrition,
              and richness. We are committed to: Providing pure, nutritious, and
              high-grade dry fruits, nuts, and spices.Practicing ethical
              sourcing and promoting sustainable farming practices.Upholding
              transparency, honesty, and eco-consciousness in all our
              operations.Encouraging healthy living and well-being through
              natural, wholesome foods.Our vision is not just about business —
              it is about building healthier lifestyles and supporting the
              environment with every step we take.
            </p>
          </div>
        </div>
      </section>

      <section className="about-core-values">
        <div className="container">
          <div className="about_content">
            <div className="heading">
              <h2>Core Values</h2>
            </div>
            <p>
              Purity: Bringing natural products without artificial
              additives.Compassion: Respect for nature, farmers, and customers
              alike.Sustainability: Promoting eco-friendly and ethical
              practices.Integrity: Ensuring honesty and transparency in every
              interaction.Health & Wellness: Helping people live healthier, more
              balanced lives.
            </p>
          </div>
        </div>
      </section>

      <section className="about-our-work">
        <div className="container">
          <div className="about_content">
            <div className="heading">
              <h2>Our Mission</h2>
            </div>
            <p>
              We aim to be India’s most trusted brand for dry fruits, nuts, and
              spices by offering authentic, healthy, and ethically sourced
              products.AtGoyat Trading.Co, we believe that by staying true to our
              roots and values, we can deliver excellence to every home while
              making a positive impact on the world around us.{" "}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
