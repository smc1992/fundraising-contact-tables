
import React, { useState } from 'react';

const HomePage: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/images/hero-background.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div className="absolute inset-0 z-10 bg-black/50" />
        
        <div className="container mx-auto px-4 relative z-20 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 inline-block">
                <img 
                  src="/images/logo.webp" 
                  alt="Contact Tables Logo" 
                  className="h-16 mx-auto"
                />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="block">Unterstütze die Vision</span>
              <span className="block mb-4">von Contact-tables®</span>
              <span className="block text-3xl md:text-5xl">durch den Kauf des digitalen Dankeschön-Pakets</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
              Dein Beitrag hilft, diese Vision in die Welt zu tragen.<br />
              Weil's gemeinsam besser schmeckt!
            </p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">
              Unsere Gründerin stellt sich vor
            </h2>
            <video
              controls
              poster="/images/Anette Rapp Thumbmail.png"
              className="w-full rounded-xl shadow-lg"
            >
              <source src="/video1436425203 - Trim.mp4" type="video/mp4" />
              Ihr Browser unterstützt das Video-Tag nicht.
            </video>
          </div>
        </div>
      </section>

      {/* Die Idee */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Die Idee
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Gemeinsam essen statt allein sitzen
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Kennst du das Gefühl, unterwegs zu sein – in einer fremden Stadt, beruflich oder privat – 
                  und du hast Lust, den Abend in einem netten Restaurant ausklingen zu lassen?
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Aber der Gedanke, allein zwischen Pärchen und Gruppen zu sitzen, fühlt sich... seltsam an. 
                  Vielleicht sogar ein bisschen leer.
                </p>
                <p className="text-lg text-gray-900 font-semibold">
                  Genau da setzt Contact-tables an.
                </p>
              </div>
              
              <div className="relative">
                <img
                  src="/images/contact-tables Restauranttisch.webp"
                  alt="Menschen lernen sich am Restauranttisch kennen"
                  className="rounded-xl shadow-lg w-full object-cover object-top"
                />
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl mb-16" style={{backgroundColor: '#f8f9fa', borderLeft: '4px solid #d3d800'}}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Unsere Vision ist einfach – aber kraftvoll
              </h3>
              <p className="text-lg text-gray-700 text-center leading-relaxed">
                Menschen kommen an offenen Tischen in Restaurants zusammen, lernen sich kennen, reden, lachen – 
                und teilen einen Abend, der sonst vielleicht stumm geblieben wäre. Manchmal entstehen daraus 
                Freundschaften, Kooperationen oder einfach ein gutes Gespräch, das gut tut.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Die Herausforderung */}
      <section className="pt-4 pb-12 md:pb-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">
              Die Herausforderung
            </h2>
            
            <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Die Idee steht. Die Plattform ist online. Die ersten Mitglieder sind da, 
                und das Feedback ist großartig.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong>Aber:</strong> So eine Bewegung wächst nicht von allein.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                In den letzten Monaten habe ich privat über <strong>10.000 €</strong> aus eigener Tasche investiert, 
                um Contact-tables aufzubauen. Jetzt stoße ich an meine Grenzen.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Was fehlt, ist das nötige Budget für gezielte Werbung, kontinuierliche Social Media Arbeit und direkten Kontakt zu Restaurants – damit noch mehr Menschen erfahren, dass sie nicht allein essen müssen.
              </p>
              <p className="text-lg text-gray-900 font-semibold leading-relaxed">
                Genau dafür braucht Contact-tables ® nun Deine Unterstützung!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#d3d800'}}>
                  <i className="ri-megaphone-line text-2xl text-black"></i>
                </div>
                <h4 className="text-lg font-semibold mb-2">Gezielte Werbung</h4>
                <p className="text-gray-600">Damit mehr Menschen erfahren, dass sie nicht allein essen müssen</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#d3d800'}}>
                  <i className="ri-restaurant-line text-2xl text-black"></i>
                </div>
                <h4 className="text-lg font-semibold mb-2">Restaurant-Kontakt</h4>
                <p className="text-gray-600">Direkter Kontakt zu Restaurants für mehr Partnerschaften</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#d3d800'}}>
                  <i className="ri-group-line text-2xl text-black"></i>
                </div>
                <h4 className="text-lg font-semibold mb-2">Community-Aufbau</h4>
                <p className="text-gray-600">Social Media Arbeit für eine starke, wachsende Community</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Die Lösung */}
      <section className="py-12 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">
              Die Lösung
            </h2>
            
            <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Mit Contact-tables haben wir den Raum für echte Begegnungen geschaffen
              </p>
              
              <button 
                onClick={() => window.open('https://contact-tables.org', '_blank')}
                className="text-black font-bold py-3 px-6 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg cursor-pointer mb-6"
                style={{backgroundColor: '#d3d800'}}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#b8c100'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#d3d800'}
              >
                Hier gehts zur Webseite
              </button>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                – aber jetzt braucht es die nächste Etappe:
              </p>
              <p className="text-xl text-gray-900 font-semibold mb-6 leading-relaxed">
                Sichtbarkeit, Reichweite und ein starkes Netzwerk an Restaurants.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Damit noch mehr Menschen davon erfahren.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Und damit Restaurants erkennen, wie wertvoll es ist, Teil dieser Bewegung zu sein.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Mit deiner Unterstützung können wir:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1" style={{backgroundColor: '#d3d800'}}>
                    <i className="ri-megaphone-line text-black text-sm"></i>
                  </div>
                  <span className="text-lg text-gray-700">gezielte Werbung schalten</span>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1" style={{backgroundColor: '#d3d800'}}>
                    <i className="ri-smartphone-line text-black text-sm"></i>
                  </div>
                  <span className="text-lg text-gray-700">Social Media strategisch ausbauen</span>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1" style={{backgroundColor: '#d3d800'}}>
                    <i className="ri-restaurant-line text-black text-sm"></i>
                  </div>
                  <span className="text-lg text-gray-700">weitere Restaurants persönlich ansprechen</span>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1" style={{backgroundColor: '#d3d800'}}>
                    <i className="ri-code-line text-black text-sm"></i>
                  </div>
                  <span className="text-lg text-gray-700">und die Plattform technisch weiterentwickeln</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl" style={{borderLeft: '4px solid #d3d800'}}>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                So wächst die Community – und mit ihr breitet sich die Idee aus – Tisch für Tisch, Stadt für Stadt.
              </p>
              <p className="text-lg text-gray-900 font-semibold mb-4">
                Gemeinsam bringen wir die Idee voran – und zeigen: Essen verbindet!
              </p>
              <p className="text-xl text-gray-900 font-bold" style={{color: '#d3d800'}}>
                Und du bist ein Teil davon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Einsatz der Gelder */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Der Einsatz der Gelder
            </h2>
            
            <p className="text-xl text-gray-600 mb-12 text-center">
              Jeder Euro fließt direkt in den Ausbau von Contact-tables!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl border-l-4" style={{borderLeftColor: '#d3d800'}}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{backgroundColor: '#d3d800'}}>
                    <i className="ri-advertisement-line text-black"></i>
                  </div>
                  <h3 className="text-lg font-semibold">Gezielte Werbung</h3>
                </div>
                <p className="text-gray-700">Um die Idee sichtbar zu machen und neue Mitglieder zu gewinnen</p>
              </div>

              <div className="bg-white p-6 rounded-xl border-l-4" style={{borderLeftColor: '#d3d800'}}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{backgroundColor: '#d3d800'}}>
                    <i className="ri-smartphone-line text-black"></i>
                  </div>
                  <h3 className="text-lg font-semibold">Social Media</h3>
                </div>
                <p className="text-gray-700">Damit wir regelmäßig präsent bleiben und die Community wächst</p>
              </div>

              <div className="bg-white p-6 rounded-xl border-l-4" style={{borderLeftColor: '#d3d800'}}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{backgroundColor: '#d3d800'}}>
                    <i className="ri-hand-heart-line text-black"></i>
                  </div>
                  <h3 className="text-lg font-semibold">Restaurant-Vertrieb</h3>
                </div>
                <p className="text-gray-700">Um aktiv Restaurants anzusprechen und Partner zu gewinnen</p>
              </div>

              <div className="bg-white p-6 rounded-xl border-l-4" style={{borderLeftColor: '#d3d800'}}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{backgroundColor: '#d3d800'}}>
                    <i className="ri-code-line text-black"></i>
                  </div>
                  <h3 className="text-lg font-semibold">Technische Entwicklung</h3>
                </div>
                <p className="text-gray-700">Um die Plattform weiter zu verbessern und auszubauen</p>
                </div>
              </div>

            <div className="bg-gray-50 p-8 rounded-xl mt-12 text-center">
              <p className="text-lg text-gray-700">
                <strong>Wir kalkulieren sparsam und setzen die Mittel gezielt ein –</strong><br />
                damit aus jedem Beitrag echte Wirkung wird.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section id="support-cta" className="py-12 md:py-24" style={{background: 'linear-gradient(135deg, #d3d800 0%, #a3b000 100%)'}}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-black">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Werde Teil der Bewegung
            </h2>
            
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
              Mit deiner Unterstützung wächst nicht nur unsere Plattform – 
              du unterstützt eine Idee, die echte Begegnungen wieder möglich macht.
            </p>

            <div className="bg-white/95 backdrop-blur-sm p-12 rounded-xl shadow-lg max-w-2xl mx-auto relative">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4" style={{color: '#d3d800'}}>
                  Jeder Beitrag zählt
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Hilf uns dabei, dass mehr Menschen erleben dürfen, wie schön es ist, gemeinsam zu essen !
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Mit dem Kauf des digitalen Dankeschön-Pakets trägst du dazu bei, die Idee von Contact-tables ® in die Welt zu bringen - für mehr gemeinsames Essen und echte Begegnungen.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Dein Beitrag fließt direkt in Werbung, Restaurant Partnerschaften und den Ausbau unserer Community.
                </p>
              </div>
              
              <button 
                onClick={() => window.open('https://www.checkout-ds24.com/product/644296', '_blank')}
                className="w-full text-black font-bold py-6 px-8 rounded-lg text-lg md:text-xl transition-all transform hover:scale-105 shadow-lg cursor-pointer"
                style={{backgroundColor: '#d3d800'}}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#b8c100'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#d3d800'}
              >
                Jetzt digitales Dankeschön-Paket kaufen
              </button>
              
              <p className="text-sm text-gray-600 mt-4">
                Sichere Zahlung über Digistore24
              </p>
              
              <div className="mt-4 text-center">
                <span 
                  className="text-sm text-gray-600 cursor-pointer underline"
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                >
                  Warum Digistore24?
                </span>
                {showTooltip && (
                  <div className="absolute mt-2 p-4 bg-white border border-gray-300 rounded-lg shadow-lg max-w-sm z-10">
                    <p className="text-sm text-gray-700">
                      Damit alles rechtlich und steuerlich sauber abläuft, wickeln wir die Beiträge über Digistore24 ab – eine deutsche Plattform, die sich um die korrekte Abrechnung, Zahlungsabwicklung und die gesetzlich vorgeschriebene Umsatzsteuer kümmert.
                    </p>
                    <p className="text-sm text-gray-700 mt-2">
                      Da Digistore24 ausschließlich den Verkauf digitaler Produkte abwickelt, erhältst du hier unser digitales Dankeschön-Paket als PDF zum Downloaden.
                      Es enthält einen persönlichen Gruß und einen kleinen Einblick hinter die Kulissen von Contact tables®️ – als kleines Dankeschön für alle, die unsere Vision unterstützen
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Wie wir unsere Unterstützer:innen einbeziehen
            </h2>
            
            <p className="text-xl text-gray-600 mb-12">
              Alle, die uns unterstützen – ob finanziell oder durch Teilen und Weitersagen –<br />
              sind Teil dieser Bewegung.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1" style={{backgroundColor: '#d3d800'}}>
                      <i className="ri-mail-line text-black text-sm"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Regelmäßige Updates</h4>
                      <p className="text-gray-600">Über neue Restaurants, besondere Begegnungen und kleine Erfolge</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1" style={{backgroundColor: '#d3d800'}}>
                      <i className="ri-chat-3-line text-black text-sm"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Mitgestaltung</h4>
                      <p className="text-gray-600">Teile deine Erfahrungen und schlage neue Orte vor</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1" style={{backgroundColor: '#d3d800'}}>
                      <i className="ri-heart-line text-black text-sm"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Gemeinsam wachsen</h4>
                      <p className="text-gray-600">Denke mit uns weiter, wie Contact-tables wachsen kann</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="/images/Frauen am Tisch.webp" 
                  alt="Community von Contact-tables"
                  className="rounded-xl shadow-lg w-full object-cover object-top"
                />
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl mt-12" style={{borderLeft: '4px solid #d3d800'}}>
              <p className="text-lg text-gray-700 font-medium">
                Denn diese Plattform lebt vom Mitmachen – und davon, dass viele Herzen 
                die gleiche Idee tragen: <strong>Alleine unterwegs – gemeinsam essen.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

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
                    className="h-12"
                  />
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Verbindet Menschen am Restauranttisch für echte Gespräche<br />und neue Begegnungen.
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

export default HomePage;