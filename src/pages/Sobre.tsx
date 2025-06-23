
import { ArrowLeft, Heart, Star, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sobre = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 mb-8 font-bold">
          <ArrowLeft size={20} />
          Voltar para o início
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-gradient-gold mb-8 text-center">
            Sobre a Jornada de Fé
          </h1>

          <div className="card-dark p-8 rounded-2xl border-gradient-gold mb-8">
            <h2 className="text-2xl font-black text-gradient-gold mb-6">Nossa Missão</h2>
            <p className="text-gray-300 font-semibold mb-4">
              A Jornada de Fé nasceu da necessidade de criar um material prático e acessível para fortalecer a fé de pessoas de todas as idades. Inspirado no sucesso de materiais como "Café com Deus Pai", nosso objetivo é proporcionar 30 dias de transformação espiritual através de reflexões profundas e desafios práticos.
            </p>
            <p className="text-gray-300 font-semibold">
              Acreditamos que a fé é o alicerce de uma vida plena e que, independente da denominação religiosa, fortalecer nossa espiritualidade nos torna pessoas melhores, mais compassivas e mais conectadas com o propósito divino para nossas vidas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="card-dark p-6 rounded-xl border border-yellow-400/30 text-center">
              <Heart className="text-yellow-400 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-black text-gradient-gold mb-3">Transformação</h3>
              <p className="text-gray-300 font-semibold">Mudanças reais e duradouras na vida espiritual</p>
            </div>
            <div className="card-dark p-6 rounded-xl border border-yellow-400/30 text-center">
              <Star className="text-yellow-400 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-black text-gradient-gold mb-3">Qualidade</h3>
              <p className="text-gray-300 font-semibold">Conteúdo cuidadosamente elaborado e testado</p>
            </div>
            <div className="card-dark p-6 rounded-xl border border-yellow-400/30 text-center">
              <Target className="text-yellow-400 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-black text-gradient-gold mb-3">Propósito</h3>
              <p className="text-gray-300 font-semibold">Conectar pessoas com seu propósito divino</p>
            </div>
          </div>

          <div className="card-dark p-8 rounded-2xl border-gradient-gold mb-8">
            <h2 className="text-2xl font-black text-gradient-gold mb-6">Sobre Gabriel Alcântara</h2>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <img 
                src="/lovable-uploads/da2a4bc8-a689-4bbb-9088-33249e6d3775.png"
                alt="Gabriel Alcântara"
                className="w-48 h-48 rounded-full border-4 border-yellow-400 object-cover"
              />
              <div className="flex-1">
                <p className="text-gray-300 font-semibold mb-4">
                  Gabriel Alcântara é mentor, palestrante e especialista em comunicação, performance e mentalidade empreendedora. Com mais de 5 anos de experiência, tem dedicado sua carreira a ajudar pessoas e negócios a se transformarem através de técnicas precisas e foco estratégico.
                </p>
                <p className="text-gray-300 font-semibold mb-4">
                  Como cristão convicto, Gabriel acredita que a fé é fundamental para qualquer transformação verdadeira. Ele próprio experimentou o poder transformador da palavra de Deus em sua vida pessoal e profissional, e agora compartilha essas experiências através de conteúdos práticos e impactantes.
                </p>
                <p className="text-gray-300 font-semibold">
                  "Minha missão é ajudar pessoas a descobrirem que Deus tem um plano incrível para suas vidas, e que através da fé podemos alcançar o impossível."
                </p>
              </div>
            </div>
          </div>

          <div className="card-dark p-8 rounded-2xl border-gradient-gold">
            <h2 className="text-2xl font-black text-gradient-gold mb-6">Por que 30 Dias?</h2>
            <p className="text-gray-300 font-semibold mb-4">
              Estudos científicos comprovam que são necessários pelo menos 21 dias para formar um novo hábito. Escolhemos 30 dias para dar tempo suficiente não apenas para criar o hábito da reflexão diária, mas também para ver transformações reais acontecerem em sua vida espiritual.
            </p>
            <p className="text-gray-300 font-semibold">
              Cada dia foi cuidadosamente planejado para construir sobre o anterior, criando uma jornada progressiva de crescimento espiritual que culmina em uma fé mais sólida e uma conexão mais profunda com Deus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
