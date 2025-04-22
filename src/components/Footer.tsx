import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-[#9E7B7B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Sobre a Uzzececii</h3>
            <p className="text-sm">
              Moda exclusiva para mulheres que buscam elegância e sofisticação em cada detalhe.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-pink-200">
                  Produtos
                </Link>
              </li>
              <li>
                <Link to="/guia-de-medidas" className="text-sm hover:text-pink-200">
                  Guia de Medidas
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-sm hover:text-pink-200">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-sm">
              <li>WhatsApp: (11) 99999-9999</li>
              <li>Email: contato@uzzececii.com.br</li>
              <li>Horário: Seg-Sex, 9h às 18h</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/uzzececii"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-200"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://facebook.com/uzzececii"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-200"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com/uzzececii"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-200"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/20">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} Uzzececii. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}