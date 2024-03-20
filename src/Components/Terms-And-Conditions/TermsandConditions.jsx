/* eslint-disable react/no-unescaped-entities */

import "./TermsandConditions.css";

const TermsandConditions = () => {
  return (
    <>
      <div className="TermsandConditions-total-div">
        <div className="TermsandConditions-hero-section-div">
          <h1>Terms & Conditions</h1>
          <p>
            Welcome to the RobosCorp Taxi Booking App ("App"), operated by
            RobosCorp Private Limited ("RobosCorp," "we," "us," or "our"). These
            Terms and Conditions govern your use of our App and services.
          </p>
        </div>
        <div className="TermsandConditions-content-section-div">
          <div className="TermsandConditions-content-section-div-inner-div">
            <h1>1. Acceptance of Terms</h1>
            <p>
              By accessing or using the App, you agree to be bound by these
              Terms and Conditions and our Privacy Policy.
            </p>
          </div>
          <div className="TermsandConditions-content-section-div-inner-div">
            <h1>2. Use of the App</h1>
            <div className="TermsandConditions-content-section-div-inner-div-inner-div">
              <h2>Eligibility:</h2>
              <p>You must be at least 18 years old to use the App.</p>
            </div>
            <div className="TermsandConditions-content-section-div-inner-div-inner-div">
              <h2>Account Registration:</h2>
              <p>
                You must register for an account to access most features of the
                App.
              </p>
            </div >
            <div className="TermsandConditions-content-section-div-inner-div-inner-div">
              <h2>User Responsibilities:</h2>
              <p>
                You are responsible for all activities under your account and
                for keeping your password confidential.
              </p>
            </div >
            <div className="TermsandConditions-content-section-div-inner-div-inner-div">
              <h2>Prohibited Conduct:</h2>
              <p>
                You may not use the App for any unlawful purpose, to solicit
                others to perform or participate in any unlawful acts, or in a
                way that infringes on the rights of others.
              </p>
            </div>
          </div>
          <div className="TermsandConditions-content-section-div-inner-div">
            <h1>3. Services</h1>
            <p>
              RobosCorp provides a platform to connect passengers with
              independent third-party drivers. We are not a transportation
              provider.
            </p>
          </div>{" "}
          <div className="TermsandConditions-content-section-div-inner-div">
            <h1>4. Payments</h1>
            <div className="TermsandConditions-content-section-div-inner-div-inner-div">
              <h2>Fees:</h2>
              <p>
                You agree to pay all fees for services obtained through the App.
              </p>
            </div>
            <div className="TermsandConditions-content-section-div-inner-div-inner-div">
              <h2>Payment Method:</h2>
              <p>A valid payment method must be on file to request rides.</p>
            </div>
            <div className="TermsandConditions-content-section-div-inner-div-inner-div">
              <h2>Refunds:</h2>
              <p>Refunds are processed according to our Refund Policy.</p>
            </div>
            <div className="PrivacyandPolicy-content-section-div-inner-div">
                <h1>5. Intellectual Property</h1>
                <p>All intellectual property rights in the App and its content are owned by or licensed to RobosCorp.</p>
            </div>
            <div className="PrivacyandPolicy-content-section-div-inner-div">
                <h1>6. Disclaimers</h1>
                <p>The App and its services are provided "as is" and "as available" without any warranties, express or implied.</p>
            </div>
            <div className="PrivacyandPolicy-content-section-div-inner-div">
                <h1>7. Limitation of Liability</h1>
                <p>RobosCorp shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or other intangibles.</p>
            </div>
            <div className="PrivacyandPolicy-content-section-div-inner-div">
                <h1>8. Indemnification</h1>
                <p>You agree to indemnify and hold harmless RobosCorp and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses arising from your use of the App.</p>
            </div>
            <div className="PrivacyandPolicy-content-section-div-inner-div">
                <h1>9. Changes to Terms</h1>
                <p>We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on the App.</p>
            </div>
            <div className="PrivacyandPolicy-content-section-div-inner-div">
                <h1>10. Contact Us</h1>
                <p>For any questions or concerns about these Terms, please contact us at <span>support@roboscorp.com.</span></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsandConditions;