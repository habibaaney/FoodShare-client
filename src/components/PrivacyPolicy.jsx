import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="max-w-5xl mx-auto bg-white rounded-lg shadow-md p-8 my-12 text-gray-800">
      <h1 className="text-4xl font-extrabold text-green-700 mb-6">
        Privacy Policy
      </h1>
      <p className="mb-4">
        Last updated: <strong>{new Date().toLocaleDateString()}</strong>
      </p>

      <p className="mb-6">
        At <strong>Food Share</strong>, your privacy is important to us. This
        Privacy Policy explains how we collect, use, and protect your
        information when you use our platform to share and receive food.
      </p>

      <h2 className="text-2xl font-bold text-orange-500 mt-6 mb-3">
        Information We Collect
      </h2>
      <ul className="list-disc pl-6 mb-6">
        <li>
          <strong>Account Information:</strong> Name, email, and any details you
          provide when creating an account.
        </li>
        <li>
          <strong>Food Listings:</strong> Photos, descriptions, and location
          details you share when offering or requesting food.
        </li>
        <li>
          <strong>Contact Messages:</strong> Information you send us through our
          contact form or customer support.
        </li>
        <li>
          <strong>Automatic Data:</strong> IP address, browser type, and basic
          usage statistics collected for analytics and security.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-orange-500 mt-6 mb-3">
        How We Use Your Information
      </h2>
      <ul className="list-disc pl-6 mb-6">
        <li>To provide and improve our services.</li>
        <li>To connect food donors and recipients securely.</li>
        <li>To respond to your inquiries and support requests.</li>
        <li>To send important updates about our service.</li>
      </ul>

      <h2 className="text-2xl font-bold text-orange-500 mt-6 mb-3">
        Cookies & Analytics
      </h2>
      <p className="mb-6">
        We may use cookies and third-party analytics tools to improve user
        experience and monitor website performance. You can disable cookies in
        your browser settings, but some features may not work properly.
      </p>

      <h2 className="text-2xl font-bold text-orange-500 mt-6 mb-3">
        Data Security
      </h2>
      <p className="mb-6">
        We take reasonable measures to protect your personal information from
        unauthorized access, loss, or misuse. However, no internet transmission
        is 100% secure, so we cannot guarantee absolute security.
      </p>

      <h2 className="text-2xl font-bold text-orange-500 mt-6 mb-3">
        Sharing of Information
      </h2>
      <p className="mb-6">
        We do not sell or rent your personal information. We may share it with
        trusted partners or service providers who help operate our platform, but
        only when necessary and under confidentiality agreements.
      </p>

      <h2 className="text-2xl font-bold text-orange-500 mt-6 mb-3">
        Your Rights
      </h2>
      <ul className="list-disc pl-6 mb-6">
        <li>Access the personal data we hold about you.</li>
        <li>Request corrections to your personal data.</li>
        <li>Request deletion of your account and associated data.</li>
      </ul>

      <h2 className="text-2xl font-bold text-orange-500 mt-6 mb-3">
        Changes to This Policy
      </h2>
      <p className="mb-6">
        We may update this Privacy Policy from time to time. Changes will be
        posted here with an updated date.
      </p>

      <h2 className="text-2xl font-bold text-orange-500 mt-6 mb-3">
        Contact Us
      </h2>
      <p>
        If you have any questions about this Privacy Policy or how we handle
        your data, please contact us at:{" "}
        <a
          href="mailto:support@foodshare.com"
          className="text-green-700 underline"
        >
          support@foodshare.com
        </a>
      </p>
    </section>
  );
};

export default PrivacyPolicy;
