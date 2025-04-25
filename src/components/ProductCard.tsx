import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link to={`/produto/${product.id}`} className="group block">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200">
          <img
            src={product.images[0]}
            alt={product.name}
            className="h-full w-full object-cover object-center transform transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="mt-4 space-y-2">
          <h3 className="text-lg font-medium text-gray-900 group-hover:text-[#9E7B7B]">
            {product.name}
          </h3>
          <p className="text-xl font-semibold text-[#9E7B7B]">
            {product.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </p>
          <div className="flex gap-2">
            {product.sizes.map(size => (
              <span key={size} className="text-sm text-gray-500">
                {size}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
