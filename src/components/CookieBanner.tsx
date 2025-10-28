import React, { useState, useEffect } from 'react';

const CookieBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    // Prüfe, ob der Benutzer bereits eine Entscheidung getroffen hat
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptAllCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('analyticsCookies', 'true');
    localStorage.setItem('marketingCookies', 'true');
    setShowBanner(false);
    // Hier können Sie Google Analytics oder andere Tracking-Scripts aktivieren
  };

  const acceptEssentialOnly = () => {
    localStorage.setItem('cookieConsent', 'essential-only');
    localStorage.setItem('analyticsCookies', 'false');
    localStorage.setItem('marketingCookies', 'false');
    setShowBanner(false);
  };

  const saveSettings = () => {
    localStorage.setItem('cookieConsent', 'custom');
    // Speichere individuelle Einstellungen
    setShowBanner(false);
    setShowSettings(false);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg p-4 md:p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                🍪 Cookie-Einstellungen
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern.
                Mit Ihrer Zustimmung helfen Sie uns, unsere Services zu optimieren.
              </p>
              <div className="text-xs text-gray-500 mb-4">
                <a href="/datenschutz" className="underline hover:text-gray-700">
                  Datenschutz
                </a>
                {' • '}
                <a href="/impressum" className="underline hover:text-gray-700">
                  Impressum
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 lg:gap-3">
              <button
                onClick={() => setShowSettings(true)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                Einstellungen
              </button>
              <button
                onClick={acceptEssentialOnly}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                Nur essentielle Cookies
              </button>
              <button
                onClick={acceptAllCookies}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                Alle akzeptieren
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Cookie Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Cookie-Einstellungen
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-2">
                    Essentielle Cookies
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Diese Cookies sind für den Betrieb der Website erforderlich und können nicht deaktiviert werden.
                  </p>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={true}
                      disabled={true}
                      className="h-4 w-4 text-blue-600 rounded"
                    />
                    <label className="ml-2 text-sm text-gray-700">
                      Essentielle Cookies (immer aktiv)
                    </label>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-2">
                    Analyse-Cookies
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Helfen uns zu verstehen, wie Besucher unsere Website nutzen.
                  </p>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="analytics"
                      className="h-4 w-4 text-blue-600 rounded"
                    />
                    <label htmlFor="analytics" className="ml-2 text-sm text-gray-700">
                      Google Analytics
                    </label>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-2">
                    Marketing-Cookies
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Werden verwendet, um Besucher über Websites hinweg zu verfolgen.
                  </p>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="marketing"
                      className="h-4 w-4 text-blue-600 rounded"
                    />
                    <label htmlFor="marketing" className="ml-2 text-sm text-gray-700">
                      Marketing-Cookies
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-4 border-t border-gray-200">
                <button
                  onClick={acceptEssentialOnly}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  Nur essentielle Cookies
                </button>
                <button
                  onClick={saveSettings}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  Einstellungen speichern
                </button>
                <button
                  onClick={acceptAllCookies}
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                >
                  Alle akzeptieren
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieBanner;
