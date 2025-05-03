import React from 'react'; 
import { motion } from 'framer-motion';
import empresaimg from '../assets/empresa.png';  // Importando a imagem da pasta assets
import ceoimg from '../assets/ceo.jpg';
import coceoimg from '../assets/coceo.jpeg';
import gerenteimg from '../assets/gerente.jpg';
import tiimg from '../assets/ti.jpg';
import analistaimg from '../assets/analista.jpg';
import mktimg from '../assets/marketing.jpeg';
import supervisoraimg from '../assets/supervisora.jpg';
import modeloimg1 from '../assets/modelo1.jpg';
import modeloimg2 from '../assets/modelo2.jpg';

const teamMembers = [
  {
    name: "Gustavo Oliveira",
    role: "CEO & DEV",
    image: ceoimg,
    description: "Visionário por trás da Fragância Feminina, com sua experiencia em perfumaria de luxo e desenolvimeno de software, deu inicio a tudo."
  },
  {
    name: "Agatha Cruz",
    role: "CTO & Designer",
    image: coceoimg,
    description: "Especialista em desenvolvimento de fragrâncias e estratégia de negócios."
  },
  {
    name: "Yasmin Ramos",
    role: "Gerente de Operações & Marketing",
    image: gerenteimg,
    description: "Responsável pela excelência operacional e eficiência dos processos."
  },
  {
    name: "Giovana Oliveira",
    role: "Supervisora de Produção",
    image: supervisoraimg,
    description: "Garante a qualidade e consistência de todas as fragrâncias."
  },
  {
    name: "Kennedy Daniel",
    role: "Diretor de T.I.",
    image: tiimg,
    description: "Lidera a transformação digital e inovação tecnológica."
  },
  {
    name: "Guilherme Martins",
    role: "Analista de Qualidade",
    image: analistaimg,
    description: "Especialista em controle de qualidade e regulamentações."
  },
  {
    name: "Rayssa Oliveira",
    role: "Diretora de Marketing",
    image: mktimg,
    description: "Criadora das estratégias de marketing e comunicação da marca."
  },
  {
    name: "Rafaeli Pigosso",
    role: "Modelo",
    image: modeloimg1,
    description: "Inspira confiança e beleza nas nossas produções, representando a essência da marca."
  },
  {
    name: "Beatriz Bispo",
    role: "Modelo",
    image: modeloimg2,
    description: "Representa a elegância da marca com sua presença marcante e atitude."
  }
];

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-pink-900 mb-12 text-center">Nossa História</h1>
            
            <div className="relative mb-16">
              <div className="absolute inset-0 bg-pink-100 rounded-[3rem] transform rotate-3"></div>
              {/* Usando a imagem importada da pasta assets */}
              <img 
                src={empresaimg}  // Caminho para a imagem local na pasta assets
                alt="Perfume Bottles"
                className="relative z-10 w-full h-[500px] object-cover rounded-[3rem] shadow-2xl transform -rotate-3 transition-transform duration-500 hover:rotate-0"
              />
            </div>
            
            <div className="space-y-8 text-center">
              <motion.p 
                className="font-sans text-xl text-gray-700 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                A Fragância Feminina foi fundada no dia 28 de Abril de 2024 com o propósito de criar perfumes que exalassem elegância e feminilidade.
              </motion.p>
              

              <motion.p 
                className="font-sans text-xl text-gray-700 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Nossa filosofia é pautada na criação de fragrâncias que não apenas cheiram bem, mas que contam uma história e criam uma conexão emocional com quem as usa.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-pink-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-serif text-4xl font-bold text-pink-900 text-center mb-16">Nossa Equipe</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-white rounded-3xl shadow-xl overflow-hidden transform transition-transform duration-500 hover:-translate-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="relative h-80">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-serif text-xl font-bold">{member.name}</h3>
                    <p className="font-sans text-sm uppercase tracking-wider mt-1">{member.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="font-sans text-gray-700">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold text-pink-900 mb-8">Entre em Contato</h2>
            <p className="font-sans text-lg text-gray-700 leading-relaxed mb-10">
              Estamos sempre disponíveis para responder suas perguntas e ouvir seus comentários.
            </p>
            
            <motion.button 
              className="inline-block bg-pink-500 text-white font-sans text-sm uppercase tracking-wider py-4 px-8 rounded-full hover:bg-pink-600 transition-colors shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Fale Conosco
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
