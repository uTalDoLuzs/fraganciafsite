import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import perfume from '../assets/perfume.jpg';

const testimonials = [
  {
    name: "Sofia Martins",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
    text: "Angel Roses é simplesmente divino! A fragrância permanece o dia todo e recebo muitos elogios.",
    rating: 5
  },
  {
    name: "Laura Campos",
    image: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg",
    text: "O melhor perfume que já usei. A combinação de notas florais é perfeita.",
    rating: 5
  },
  {
    name: "Ana Paula Silva",
    image: "https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg",
    text: "Elegante e sofisticado. Vale cada centavo!",
    rating: 5
  },
  {
    name: "Carla Santos",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
    text: "Um perfume que traduz feminilidade em sua essência.",
    rating: 5
  },
  {
    name: "Marina Costa",
    image: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg",
    text: "Apaixonada por essa fragrância! É delicada e marcante ao mesmo tempo.",
    rating: 5
  },
  {
    name: "Beatriz Lima",
    image: "https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg",
    text: "O aroma é incrível e a embalagem é luxuosa. Adorei!",
    rating: 5
  },
  {
    name: "Isabela Ferreira",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
    text: "Superou todas as minhas expectativas. Recomendo muito!",
    rating: 5
  },
  {
    name: "Juliana Mendes",
    image: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg",
    text: "Um perfume que me faz sentir especial todos os dias.",
    rating: 5
  },
  {
    name: "Patricia Oliveira",
    image: "https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg",
    text: "A fragrância é única e a fixação é impressionante.",
    rating: 5
  },
  {
    name: "Fernanda Santos",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
    text: "Simplesmente perfeito! Já é meu perfume assinatura.",
    rating: 5
  }
];

const Home: React.FC = () => {
  const [showTestimonials, setShowTestimonials] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-b from-pink-50 to-white">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 md:px-6 relative pt-32 pb-20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div 
              className="md:w-1/2 mb-12 md:mb-0 md:pr-12"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-pink-900 leading-tight mb-8">
                Descubra a essência da delicadeza
              </h1>
              <p className="font-sans text-xl text-gray-700 mb-10 leading-relaxed">
                Angel Roses é o nosso perfume assinatura, com notas florais e um toque de sofisticação.
              </p>
              <motion.button 
                className="inline-block bg-pink-500 text-white font-sans text-sm uppercase tracking-wider py-4 px-8 rounded-full hover:bg-pink-600 transition-colors shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowTestimonials(true)}
              >
                Conheça Angel Roses
              </motion.button>
            </motion.div>
            
            {/* Logo com animação */}
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative aspect-[3/4] max-w-md mx-auto">
                <div className="absolute inset-0 bg-pink-200 rounded-[3rem] transform rotate-6"></div>
                {/* Logo substituindo a imagem */}
                <img 
                  src={perfume}  // Caminho para sua logo na pasta assets
                  alt="Logo Angel Roses"
                  className="relative z-10 object-cover w-full h-full rounded-[3rem] shadow-2xl transform -rotate-6 transition-transform duration-500 hover:rotate-0"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Product Feature Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-pink-900 mb-8">Angel Roses</h2>
            <p className="font-sans text-xl text-gray-700 leading-relaxed mb-12">
              Nossa fragrância exclusiva combina notas sutis de rosa damascena, baunilha e sândalo, 
              criando uma experiência olfativa única que permanece na memória.
            </p>
          </div>
          
          <motion.div 
            className="max-w-lg mx-auto bg-gradient-to-br from-pink-50 to-white shadow-2xl p-12 rounded-[2rem] border border-pink-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(236, 72, 153, 0.25)' }}
          >
            <div className="flex flex-col items-center">
              <h3 className="font-serif text-3xl font-bold text-pink-900 mb-8">Angel Roses</h3>
              
              <div className="flex items-center justify-center space-x-6 mb-8">
                <span className="font-sans text-2xl text-gray-500 line-through">R$150,00</span>
                <span className="font-sans text-sm bg-pink-500 text-white px-4 py-2 rounded-full">25% OFF</span>
              </div>
              
              <div className="text-center mb-10">
                <span className="font-serif text-5xl font-bold text-pink-700">R$112,50</span>
              </div>
              
              <motion.button 
                className="w-full bg-pink-900 text-white font-sans text-sm uppercase tracking-wider py-6 px-8 rounded-full hover:bg-pink-800 transition-colors shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Comprar agora
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Modal */}
      <AnimatePresence>
        {showTestimonials && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setShowTestimonials(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-[2rem] p-8 max-w-4xl max-h-[80vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <h2 className="font-serif text-3xl font-bold text-pink-900 mb-8 text-center">Depoimentos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-pink-50 rounded-xl p-6"
                  >
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="ml-4">
                        <h3 className="font-serif font-bold text-pink-900">{testimonial.name}</h3>
                        <div className="flex text-pink-500">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <span key={i}>★</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="font-sans text-gray-700">{testimonial.text}</p>
                  </motion.div>
                ))}
              </div>
              <div className="text-center mt-8">
                <button
                  className="bg-pink-500 text-white font-sans text-sm uppercase tracking-wider py-3 px-6 rounded-full hover:bg-pink-600 transition-colors"
                  onClick={() => setShowTestimonials(false)}
                >
                  Fechar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-b from-white to-pink-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white rounded-[2rem] p-8 shadow-xl hover:shadow-2xl transition-shadow"
              whileHover={{ y: -5 }}
            >
              <h3 className="font-serif text-2xl font-bold text-pink-900 mb-4">Notas Florais</h3>
              <p className="font-sans text-gray-700">Uma combinação delicada de rosas e jasmim que evoca a primavera.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-[2rem] p-8 shadow-xl hover:shadow-2xl transition-shadow"
              whileHover={{ y: -5 }}
            >
              <h3 className="font-serif text-2xl font-bold text-pink-900 mb-4">Longa Duração</h3>
              <p className="font-sans text-gray-700">Formulação especial que permanece na pele por até 12 horas.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-[2rem] p-8 shadow-xl hover:shadow-2xl transition-shadow"
              whileHover={{ y: -5 }}
            >
              <h3 className="font-serif text-2xl font-bold text-pink-900 mb-4">Embalagem Premium</h3>
              <p className="font-sans text-gray-700">Design elegante com detalhes dourados e acabamento de luxo.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;