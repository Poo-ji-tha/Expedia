export default function Footer() {
  const footerSections = [
    {
      title: "Company",
      links: [
        { name: "About", href: "https://www.expediagroup.com/" },
        { name: "Jobs", href: "https://lifeatexpediagroup.com/" },
        {
          name: "List your property",
          href: "https://apps.expediapartnercentral.com/en_US/list?utm_medium=referral&utm_source=wwwexpediacom-en_US&utm_campaign=direct&utm_contentewd=pwa-header-btn&siteId=1&tpid=1&eapid=0&langId=1033&utm_term=direct&lasttouchMktgcode=direct",
        },
        {
          name: "Partnerships",
          href: "https://www.expediagroup.com/partnerships/",
        },
        { name: "Newsroom", href: "https://www.expedia.com/newsroom/" },
        {
          name: "Investor Relations",
          href: "https://advertising.expedia.com/getting-started/brands/expedia/?_gl=1*1h6d5rb*_gcl_au*OTM3MjcxMTk0LjE3MzgyMTM0MDE.",
        },
        {
          name: "Advertising",
          href: "https://advertising.expedia.com/getting-started/brands/expedia/?_gl=1*1v8cu80*_gcl_au*OTM3MjcxMTk0LjE3MzgyMTM0MDE.",
        },
        {
          name: "Affiliate Marketing",
          href: "https://affiliates.expediagroup.com/en-us/home",
        },
        {
          name: "Feedback",
          href: "https://www.expedia.com/p/info-other/feedback.htm",
        },
      ],
    },
    {
      title: "Explore",
      links: [
        {
          name: "United States of America travel guide",
          href: "https://www.expedia.com/United-States-Of-America.dx201",
        },
        {
          name: "Hotels in United States of America",
          href: "https://www.expedia.com/Destinations-In-United-States-Of-America.d201.Hotel-Destinations",
        },
        {
          name: "Vacation rentals in United States of America",
          href: "https://www.expedia.com/Destinations-In-United-States-Of-America.d201.Vacation-Rental-Destinations",
        },
        {
          name: "Vacation packages in United States of America",
          href: "https://www.expedia.com/United-States-Of-America.d201.Destination-Travel-Guides",
        },
        {
          name: "Domestic flights",
          href: "https://www.expedia.com/Destinations-In-United-States-Of-America.d201.Flight-Destinations",
        },
        {
          name: "Car rentals in United States of America",
          href: "https://www.expedia.com/United-States-Of-America.d201.Destination-Travel-Guides",
        },
        {
          name: "All accommodation types",
          href: "https://www.expedia.com/Accommodations",
        },
        {
          name: "One Key credit cards",
          href: "https://www.expedia.com/one-key-cards",
        },
      ],
    },
    {
      title: "Policies",
      links: [
        {
          name: "Privacy",
          href: "https://www.expedia.com/lp/lg-privacypolicy",
        },
        { name: "Cookies", href: "https://www.expedia.com/legal/cookies" },
        { name: "Terms of use", href: "https://www.expedia.com/lp/lg-legal" },
        {
          name: "One Key™ terms and conditions",
          href: "https://www.expedia.com/one-key-terms",
        },
        {
          name: "Vrbo terms and conditions",
          href: "https://www.vrbo.com/legal/terms-and-conditions?_gl=1*auf693*_gcl_au*OTM3MjcxMTk0LjE3MzgyMTM0MDE.",
        },
        {
          name: "Accessibility",
          href: "https://www.expedia.com/p/info-other/web-accessibility-policy",
        },
        {
          name: "Your privacy choices",
          href: "https://www.expedia.com/dnsmpi",
        },
        {
          name: "Content guidelines and reporting content",
          href: "https://www.expedia.com/lp/b/content-guidelines",
        },
      ],
    },
    {
      title: "Help",
      links: [
        { name: "Support", href: "https://www.expedia.com/helpcenter/" },
        {
          name: "Cancel your hotel or vacation rental booking",
          href: "https://www.expedia.com/helpcenter/#/articles/399/34/12326",
        },
        {
          name: "Cancel your flight",
          href: "https://www.expedia.com/helpcenter/#/articles/397/34/12324",
        },
        {
          name: "Refund basics",
          href: "https://www.expedia.com/helpcenter/#/articles/396/53/15253",
        },
        {
          name: "Use an Expedia coupon",
          href: "https://www.expedia.com/helpcenter/#/articles/396/53/12385",
        },
        {
          name: "International travel documents",
          href: "https://www.expedia.com/helpcenter/#/articles/396/52/12386",
        },
      ],
    },
  ];

  return (
    <footer className="bg-gray-100 py-8 text-gray-700">
      <div className="max-w-6xl mx-auto">
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4 text-black">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="hover:underline text-blue-500 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-300 mt-6 pt-4 text-center text-sm text-gray-600">
          © 2025 Expedia, Inc., an Expedia Group company. All rights reserved.
          Expedia and the Expedia Logo are trademarks or registered trademarks
          of Expedia, Inc. CST# 2029030-50.
        </div>
      </div>

      {/* Help Button */}
      <div className="fixed bottom-4 right-4">
        <button className="bg-white border border-gray-300 rounded-full px-4 py-2 shadow-md flex items-center gap-2 hover:bg-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12c0 5.385 4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12zm9-2.25h.008v.008H11.25v-.008zM9 14.25a3 3 0 116 0m-6 0h6"
            ></path>
          </svg>
          Help
        </button>
      </div>
    </footer>
  );
}
