import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { products } from '../data/products';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function ProductDetail() {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('');
  
  const product = products.find(p => p.id === id);
  
  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  const handleWhatsAppClick = () => {
    if (!selectedSize) {
      alert('Por favor, selecione um tamanho');
      return;
    }

    const message = `Olá! Gostaria de saber se o produto ${product.name} está disponível no tamanho ${selectedSize}? Link do produto: ${window.location.href}`;
    const whatsappUrl = `https://wa.me/5562992168985?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            className="rounded-lg overflow-hidden"
          >
            {product.images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`${product.name} - Imagem ${index + 1}`}
                  className="w-full h-[600px] object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
            <p className="mt-4 text-3xl font-semibold text-[#9E7B7B]">
              {product.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </p>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-700"
          >
            {product.description}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-lg font-medium text-gray-900 mb-4">Tamanho</h3>
            <div className="flex gap-4">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`w-14 h-14 rounded-full flex items-center justify-center text-lg font-medium transition-all duration-200 ${
                    selectedSize === size
                      ? 'bg-[#9E7B7B] text-white scale-110'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </motion.div>
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            onClick={handleWhatsAppClick}
            className="w-full bg-green-600 text-white py-4 px-6 rounded-full text-lg font-medium hover:bg-green-700 transition-colors duration-200"
          >
            Comprar pelo WhatsApp
          </motion.button>
        </div>
      </div>
    </motion.div>
    
  );
}
export default App;