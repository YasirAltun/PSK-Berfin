import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import siteConfig from '../../config/siteConfig';

// Leaflet varsayılan ikon düzeltmesi
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl:       'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl:     'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const customIcon = new L.Icon({
  iconUrl:       'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl:     'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize:      [25, 41],
  iconAnchor:    [12, 41],
  popupAnchor:   [1, -34],
  shadowSize:    [41, 41],
});

export default function Footer() {
  const { lat, lng, zoom, popupText } = siteConfig.map;
  const year = new Date().getFullYear();

  return (
    <footer id="iletisim" className="bg-[var(--color-mint-dark)] text-white">
      {/* Üst kısım — İletişim + Harita */}
      <div className="container-md px-6 py-16 grid lg:grid-cols-2 gap-12 items-start">
        {/* İletişim Bilgileri */}
        <div>
          <p className="font-sans text-xs tracking-widest uppercase text-mint-light/70 mb-3">
            İletişim
          </p>
          <h2 className="font-serif text-3xl font-light mb-2">{siteConfig.title}</h2>
          <p className="font-sans text-sm text-white/60 mb-8">{siteConfig.center}</p>

          <div className="flex flex-col gap-4">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-3 group"
            >
              <span className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-base group-hover:bg-mint/30 transition-colors">📞</span>
              <div>
                <p className="font-sans text-[0.65rem] text-white/50 uppercase tracking-wide">Telefon</p>
                <p className="font-sans text-sm text-white/90">{siteConfig.phone}</p>
              </div>
            </a>

            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-3 group"
            >
              <span className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-base group-hover:bg-mint/30 transition-colors">✉️</span>
              <div>
                <p className="font-sans text-[0.65rem] text-white/50 uppercase tracking-wide">E-posta</p>
                <p className="font-sans text-sm text-white/90">{siteConfig.email}</p>
              </div>
            </a>

            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-base">📍</span>
              <div>
                <p className="font-sans text-[0.65rem] text-white/50 uppercase tracking-wide">Adres</p>
                <p className="font-sans text-sm text-white/90">{siteConfig.address}</p>
              </div>
            </div>
          </div>

          {/* Sosyal Medya */}
          <div className="flex gap-3 mt-8">
            {siteConfig.social.instagram && (
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-lg"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            )}
            <a
              href={`https://wa.me/${siteConfig.social.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#25D366]/80 flex items-center justify-center transition-colors text-lg"
              aria-label="WhatsApp"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Leaflet Harita */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl h-72 lg:h-80 border border-white/10">
          <MapContainer
            center={[lat, lng]}
            zoom={zoom}
            scrollWheelZoom={false}
            style={{ width: '100%', height: '100%' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[lat, lng]} icon={customIcon}>
              <Popup>{popupText}</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>

      {/* Alt Bar */}
      <div className="border-t border-white/10 py-5 px-6">
        <div className="container-md flex flex-col sm:flex-row items-center justify-between gap-2 text-white/40 text-xs font-sans">
          <p>© {year} {siteConfig.title}. Tüm hakları saklıdır.</p>
          <p>
            <a href="#" className="hover:text-white/70 transition-colors">Adıyaman</a>
            {' · '}
            <a href="#randevu" className="hover:text-white/70 transition-colors">Randevu Al</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
