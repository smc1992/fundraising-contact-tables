
import React from 'react';

const DankePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
              <img 
                src="/images/logo.webp" 
                alt="Contact Tables Logo" 
                className="h-10 sm:h-12 cursor-pointer"
                onClick={() => window.REACT_APP_NAVIGATE('/')}
              />
            </div>
            <button 
              onClick={() => window.REACT_APP_NAVIGATE('/')}
              className="text-black font-bold py-2 px-6 rounded-full text-sm sm:text-base transition-all transform hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer"
              style={{backgroundColor: '#d3d800'}}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#b8c100'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#d3d800'}
            >
              Zurück zur Startseite
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/images/Restaurant-Dankeseite.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div className="absolute inset-0 z-10 bg-black/40" />
        
        <div className="container mx-auto px-4 relative z-20 text-center text-white">
          <div className="max-w-4xl mx-auto">
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Herzlichen Dank!
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
              Deine Unterstützung bedeutet uns unglaublich viel.<br />
              Du bist jetzt Teil einer Bewegung, die echte Begegnungen möglich macht!
            </p>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 text-black max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-4" style={{color: '#d3d800'}}>
                Was passiert als nächstes?
              </h2>
              <p className="text-lg leading-relaxed">
                Du erhältst in Kürze eine Bestätigungs-E-Mail mit allen Details zu deiner Spende. 
                Wir halten dich über unsere Fortschritte auf dem Laufenden und zeigen dir, 
                wie dein Beitrag Contact-tables wachsen lässt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Warum Digistore24 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Warum läuft die Unterstützung über Digistore24?
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Damit alles rechtlich und steuerlich sauber abläuft, wickeln wir die Beiträge über Digistore24 ab – eine deutsche Plattform, die sich um die korrekte Abrechnung, Zahlungsabwicklung und die gesetzlich vorgeschriebene Umsatzsteuer kümmert.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Da Digistore24 nur „digitale Produkte“ verwalten kann, erhältst du symbolisch unser kleines Unterstützer:innen-Paket als Dankeschön – bestehend aus einem digitalen PDF-Gruß und einem Einblick hinter die Kulissen von Contact-tables.
            </p>
          </div>
        </div>
      </section>

      {/* Deine Wirkung */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">
              Deine Wirkung
            </h2>
            
            <p className="text-xl text-gray-600 mb-16">
              Mit deiner Spende hilfst du mit,<br />
              dass mehr Menschen erleben dürfen, wie schön es ist,<br />
              gemeinsam zu essen !
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#d3d800'}}>
                  <i className="ri-megaphone-line text-2xl text-black"></i>
                </div>
                <h3 className="text-lg font-semibold mb-2">Mehr Sichtbarkeit</h3>
                <p className="text-gray-600">Gezielte Werbung erreicht Menschen, die unsere Idee brauchen</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#d3d800'}}>
                  <i className="ri-restaurant-line text-2xl text-black"></i>
                </div>
                <h3 className="text-lg font-semibold mb-2">Neue Restaurants</h3>
                <p className="text-gray-600">Mehr Partner bedeuten mehr Möglichkeiten für Begegnungen</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#d3d800'}}>
                  <i className="ri-group-line text-2xl text-black"></i>
                </div>
                <h3 className="text-lg font-semibold mb-2">Wachsende Community</h3>
                <p className="text-gray-600">Jedes neue Mitglied macht die Idee stärker</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#d3d800'}}>
                  <i className="ri-chat-1-line text-2xl text-black"></i>
                </div>
                <h3 className="text-lg font-semibold mb-2">Echte Begegnungen</h3>
                <p className="text-gray-600">Menschen finden Verbindung – am Tisch, im Gespräch, im Miteinander</p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl mt-16" style={{borderLeft: '4px solid #d3d800'}}>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Du bist jetzt Teil von etwas Größerem
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Jeder Euro, den du gespendet hast, fließt direkt in den Ausbau von Contact-tables. 
                Du hilfst dabei, eine Welt zu schaffen, in der niemand allein essen muss – 
                und in der spontane Begegnungen wieder möglich sind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bleib in Kontakt */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Bleib in Kontakt
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  So halten wir dich auf dem Laufenden
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1" style={{backgroundColor: '#d3d800'}}>
                      <i className="ri-mail-line text-black text-sm"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Regelmäßige Updates</h4>
                      <p className="text-gray-600">Erfahre von neuen Restaurants und besonderen Begegnungen</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1" style={{backgroundColor: '#d3d800'}}>
                      <i className="ri-bar-chart-line text-black text-sm"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Transparente Berichte</h4>
                      <p className="text-gray-600">Sieh, wie deine Spende konkret wirkt und was wir erreichen</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1" style={{backgroundColor: '#d3d800'}}>
                      <i className="ri-chat-3-line text-black text-sm"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Mitgestaltung</h4>
                      <p className="text-gray-600">Teile deine Ideen und hilf uns, Contact-tables zu verbessern</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="/images/Newsletter.jpg"
                  alt="Newsletter und Updates"
                  className="rounded-xl shadow-lg w-full object-cover object-top"
                />
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl mt-12 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Hast du Fragen oder Anregungen?
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Wir freuen uns über jede Nachricht von unseren Unterstützern!
              </p>
              <a 
                href="mailto:info@contact-tables.org"
                className="inline-flex items-center text-black font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer"
                style={{backgroundColor: '#d3d800'}}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#b8c100'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#d3d800'}
              >
                <i className="ri-mail-line mr-2"></i>
                Schreib uns eine E-Mail
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Teilen */}
      <section className="py-24" style={{background: 'linear-gradient(135deg, #d3d800 0%, #a3b000 100%)'}}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-black">
            <h2 className="text-4xl font-bold mb-8">
              Hilf uns, die Idee zu verbreiten
            </h2>
            
            <p className="text-xl mb-12">
              Du kennst Menschen, die auch nicht gern allein essen? <br />
              Erzähl ihnen von Contact-tables!
            </p>

            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6" style={{color: '#d3d800'}}>
                Jede Weiterempfehlung zählt
              </h3>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Je mehr Menschen von unserer Idee erfahren, desto mehr Begegnungen können entstehen. 
                Teile Contact-tables mit Freunden, Familie oder in sozialen Netzwerken – 
                und hilf dabei, dass niemand mehr allein essen muss.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Zusätzliche CTA zur Hauptseite */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Entdecke Contact-tables®
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Erfahre mehr über unsere Mission und wie du Teil der Community werden kannst.
            </p>
            <a 
              href="https://contact-tables.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-black font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer"
              style={{backgroundColor: '#d3d800'}}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#b8c100'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#d3d800'}
            >
              <i className="ri-external-link-line mr-2"></i>
              Zur Hauptseite
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

export default DankePage;
