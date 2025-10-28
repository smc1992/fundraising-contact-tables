
import React from 'react';

const DatenschutzPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center py-4 gap-4">
            <div className="flex items-center">
              <img 
                src="/images/logo.webp" 
                alt="Contact Tables Logo" 
                className="h-10 sm:h-12 mr-4"
              />
            </div>
            <nav>
              <button 
                onClick={() => window.REACT_APP_NAVIGATE('/')}
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer whitespace-nowrap text-sm sm:text-base"
              >
                Zurück zur Startseite
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Datenschutzerklärung</h1>
          
          <div className="prose prose-lg max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Datenschutz auf einen Blick</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Allgemeine Hinweise</h3>
              <p className="text-gray-700 mb-4">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
                passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie 
                persönlich identifiziert werden können.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Datenerfassung auf dieser Website</h3>
              <p className="text-gray-700 mb-4">
                <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
              </p>
              <p className="text-gray-700 mb-4">
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
                können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
              </p>

              <p className="text-gray-700 mb-4">
                <strong>Wie erfassen wir Ihre Daten?</strong>
              </p>
              <p className="text-gray-700 mb-4">
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich 
                z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Hosting</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Externes Hosting</h3>
              <p className="text-gray-700 mb-4">
                Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, 
                die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert.
              </p>
              <p className="text-gray-700 mb-4">
                Das Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden 
                Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten 
                Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Datenschutz</h3>
              <p className="text-gray-700 mb-4">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln 
                Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften 
                sowie dieser Datenschutzerklärung.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Hinweis zur verantwortlichen Stelle</h3>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <p className="text-gray-700 mb-2">
                  <strong>Contact-tables LLC</strong>
                </p>
                <p className="text-gray-700 mb-2">
                  1209 Mountain Rd Pl NE<br />
                  Albuquerque, NM87110, USA
                </p>
                <p className="text-gray-700 mb-2">
                  Telefon: +49 1567 9640069
                </p>
                <p className="text-gray-700">
                  E-Mail: datenschutz@contact-tables.org
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Speicherdauer</h3>
              <p className="text-gray-700 mb-4">
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, 
                verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Datenerfassung auf dieser Website</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Cookies</h3>
              <p className="text-gray-700 mb-4">
                Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Datenpakete und richten 
                auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung 
                (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Server-Log-Dateien</h3>
              <p className="text-gray-700 mb-4">
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, 
                die Ihr Browser automatisch an uns übermittelt. Dies sind:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                <li>Browsertyp und Browserversion</li>
                <li>verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Ihre Rechte</h2>
              <p className="text-gray-700 mb-4">
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer 
                gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung 
                oder Löschung dieser Daten zu verlangen.
              </p>
              <p className="text-gray-700 mb-4">
                Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung 
                jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen 
                die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Kontakt</h2>
              <p className="text-gray-700 mb-4">
                Bei Fragen zum Datenschutz wenden Sie sich bitte an:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>E-Mail:</strong> 
                  <a href="mailto:datenschutz@contact-tables.org" className="text-blue-600 hover:text-blue-800 ml-1">
                    datenschutz@contact-tables.org
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="mb-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 inline-block">
                  <img 
                    src="/images/logo.webp" 
                    alt="Contact Tables Logo" 
                    className="h-16"
                  />
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Verbindet Menschen anonym am Restauranttisch für authentische Gespräche und neue Begegnungen.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Rechtliches</h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => window.REACT_APP_NAVIGATE('/impressum')}
                    className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                  >
                    Impressum
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => window.REACT_APP_NAVIGATE('/datenschutz')}
                    className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                  >
                    Datenschutz
                  </button>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Contact Tables. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DatenschutzPage;
