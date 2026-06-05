import Script from 'next/script';
import "./globals.css";
// Load the template main stylesheet
import "../public/assets/css/main.css";
// Load the new dark theme stylesheet
import "../public/assets/css/dark-theme.css";
import DarkModeToggle from '../components/DarkModeToggle';

export const metadata = {
  title: "Nio Host - Modern Web Hosting",
  description: "Web Hosting Template converted to Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
          <link rel="icon" href="/assets/img/favicon.png" type="image/png" sizes="16x16" />
          {/* Global Template Scripts */}
          <Script src="/assets/js/vendors/jquery-3.6.0.min.js" strategy="beforeInteractive" />
          <Script src="/assets/js/vendors/bootstrap.bundle.min.js" strategy="beforeInteractive" />
          <Script src="/assets/js/vendors/bootstrap-slider.min.js" strategy="beforeInteractive" />
          <Script src="/assets/js/vendors/swiper-bundle.min.js" strategy="beforeInteractive" />
          <Script src="/assets/js/vendors/magnific-popup.min.js" strategy="beforeInteractive" />
          <Script src="/assets/js/vendors/validator.min.js" strategy="beforeInteractive" />
          <Script src="/assets/js/vendors/hs.megamenu.js" strategy="beforeInteractive" />
          <Script src="/assets/js/app.js" strategy="beforeInteractive" />
      </head>
      <body>
        <DarkModeToggle />
        {children}
      </body>
    </html>
  );
}
