
import React from 'react';

const ImpressumPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center py-4 gap-4">
            <div className="flex items-center">
              <img 
                src="https://contact-tables.org/images/logo/logo/Contact%20Tables%20RGB%20transparent.webp" 
                alt="Contact Tables Logo" 
                className="h-10 sm:h-12 mr-4"
              />
            </div>
            <nav>
              <a 
                href="/" 
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer whitespace-nowrap text-sm sm:text-base"
              >
                Zurück zur Startseite
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Impressum</h1>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Rechtliches</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Impressum</h3>
            <p className="text-gray-700 mb-6">
              Pflichtangaben nach § 5 TMG für contact-tables.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Kontakt</h3>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="text-gray-700 mb-2">
                <strong>Contact-tables LLC</strong>
              </p>
              <p className="text-gray-700 mb-2">
                Registriert im US-Bundesstaat New Mexico unter der Registrierungsnummer 8048467
              </p>
              <p className="text-gray-700 mb-4">
                Mit Sitz in 1209 Mountain Rd Pl NE, Albuquerque, NM87110, USA
              </p>
              
              <div className="space-y-2">
                <p className="text-gray-700">
                  <strong>Telefon:</strong> +49 1567 9640069
                </p>
                <p className="text-gray-700">
                  <strong>E-Mail:</strong> 
                  <a href="mailto:datenschutz@contact-tables.org" className="text-blue-600 hover:text-blue-800 ml-1">
                    datenschutz@contact-tables.org
                  </a>
                </p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Verbraucherstreitbeilegung / Universalschlichtungsstelle
            </h3>
            <p className="text-gray-700 mb-6">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
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
                    src="https://contact-tables.org/images/logo/logo/Contact%20Tables%20RGB%20transparent.webp" 
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
                  <a href="/impressum" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                    Impressum
                  </a>
                </li>
                <li>
                  <a href="/datenschutz" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                    Datenschutz
                  </a>
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

export default ImpressumPage;
