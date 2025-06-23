
import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { ArrowDown, Shield, Star, Clock, Heart, Gift, CheckCircle, XCircle, Mail, Phone, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Index = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [formData, setFormData] = useState({ name: '', email: '', suggestion: '' });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(23, 59, 59, 999);
      
      if (now > midnight) {
        midnight.setDate(midnight.getDate() + 1);
        midnight.setHours(23, 59, 59, 999);
      }
      
      const diff = midnight.getTime() - now.getTime();
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      setTimeLeft({ hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      toast.success('Parabéns! Você foi adicionado à nossa Lista VIP! 🎉');
      setFormData({ name: '', email: '', suggestion: '' });
    }
  };

  const scrollTo30Days = () => {
    document.getElementById('30-days-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPurchase = () => {
    document.getElementById('purchase-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Enhanced floating religious elements background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 text-yellow-400/10 text-6xl animate-float">✨</div>
        <div className="absolute top-32 right-20 text-yellow-400/10 text-4xl animate-float">🕊️</div>
        <div className="absolute bottom-40 left-1/4 text-yellow-400/10 text-5xl animate-float">✝️</div>
        <div className="absolute top-64 left-1/3 text-yellow-400/10 text-3xl animate-float">🙏</div>
        <div className="absolute bottom-20 right-10 text-yellow-400/10 text-6xl animate-float">✨</div>
        <div className="absolute top-20 right-1/3 text-yellow-400/10 text-4xl animate-float">👼</div>
        <div className="absolute bottom-60 right-1/4 text-yellow-400/10 text-5xl animate-float">🌟</div>
        <div className="absolute top-40 left-1/2 text-yellow-400/10 text-3xl animate-float">📿</div>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 py-8 relative">
        {/* Blessed Offer Badge */}
        <div className="animate-pulse-glow bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-6 py-3 rounded-full mb-6 font-black text-sm uppercase tracking-wider shadow-2xl shadow-yellow-500/50">
          ✨ VOCÊ FOI ABENÇOADO COM ESTA OFERTA ✨
        </div>

        {/* Timer */}
        <div className="flex gap-4 mb-8">
          <div className="bg-gradient-to-br from-red-600 to-red-800 p-4 rounded-xl text-center min-w-[80px] border-2 border-red-400 shadow-2xl">
            <div className="text-2xl font-black text-white">{String(timeLeft.hours).padStart(2, '0')}</div>
            <div className="text-xs font-bold text-red-200">HORAS</div>
          </div>
          <div className="bg-gradient-to-br from-red-600 to-red-800 p-4 rounded-xl text-center min-w-[80px] border-2 border-red-400 shadow-2xl">
            <div className="text-2xl font-black text-white">{String(timeLeft.minutes).padStart(2, '0')}</div>
            <div className="text-xs font-bold text-red-200">MIN</div>
          </div>
          <div className="bg-gradient-to-br from-red-600 to-red-800 p-4 rounded-xl text-center min-w-[80px] border-2 border-red-400 shadow-2xl">
            <div className="text-2xl font-black text-white">{String(timeLeft.seconds).padStart(2, '0')}</div>
            <div className="text-xs font-bold text-red-200">SEG</div>
          </div>
        </div>

        {/* Enhanced Headline */}
        <div className="text-center mb-8">
          <h2 className="text-lg md:text-xl font-black text-yellow-400 mb-4 animate-pulse">
            Sua Fé Está Fraca? Precisa de Esperança?
          </h2>
          <div className="relative">
            <h1 className="text-3xl md:text-5xl font-black mb-4 leading-tight relative z-10">
              <span className="text-gradient-gold block drop-shadow-2xl">✝️ JORNADA DE FÉ ✝️</span>
              <span className="text-gradient-gold block drop-shadow-2xl">30 DIAS DE REFLEXÕES</span>
            </h1>
            <div className="absolute inset-0 blur-lg bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-20 animate-pulse"></div>
          </div>
          <p className="text-xl md:text-2xl font-bold text-gray-300 mb-6">
            Transforme sua vida espiritual com reflexões poderosas 🔥
          </p>
        </div>

        {/* Enhanced Product Image */}
        <div className="relative mb-8">
          <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-green-700 text-white px-4 py-2 rounded-full text-sm font-black z-10 animate-bounce-gentle shadow-2xl">
            CAMPEÃO EM VENDAS
          </div>
          <div className="relative">
            <img 
              src="/lovable-uploads/e9fac0f7-2be2-4d7d-8821-bdae5c5eb525.png" 
              alt="Jornada de Fé - 30 Dias de Reflexões"
              className="w-[200px] h-[300px] md:w-[300px] md:h-[400px] object-cover rounded-xl border-4 border-yellow-400 shadow-2xl shadow-yellow-500/25 hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/20 to-transparent rounded-xl"></div>
          </div>
        </div>

        {/* Pricing */}
        <div className="text-center mb-8">
          <div className="text-gray-400 line-through text-xl mb-2">De R$ 97,00</div>
          <div className="text-4xl md:text-5xl font-black text-gradient-gold mb-2 drop-shadow-2xl">R$ 29,90</div>
          <div className="text-lg font-bold text-green-400">ou 3x de R$ 9,97 sem juros</div>
        </div>

        {/* Enhanced CTA Button */}
        <button 
          onClick={scrollTo30Days}
          className="btn-gold text-xl md:text-2xl mb-8 w-full max-w-md shadow-2xl shadow-yellow-500/50 relative overflow-hidden"
        >
          <span className="relative z-10">🙏 QUERO TRANSFORMAR MINHA FÉ AGORA! 🙏</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] animate-shimmer"></div>
        </button>

        {/* Animated Arrow */}
        <ArrowDown className="text-yellow-400 animate-bounce-gentle drop-shadow-2xl" size={32} />
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-gradient-gold drop-shadow-2xl">
            ✨ TESOUROS DA JORNADA DE FÉ ✨
          </h2>
          
          <div className="space-y-12">
            {/* Benefit 1 */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2">
                <div className="card-dark p-8 rounded-2xl border-gradient-gold hover:scale-105 transition-transform duration-300 shadow-2xl">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mr-4 shadow-2xl">
                      <Heart className="text-black" size={32} />
                    </div>
                    <h3 className="text-2xl font-black text-gradient-gold">Transformação Diária</h3>
                  </div>
                  <p className="text-gray-300 font-semibold">
                    30 dias de reflexões poderosas baseadas nas Escrituras, com versículos, meditações e desafios práticos que vão fortalecer sua fé dia após dia.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="text-8xl animate-float drop-shadow-2xl">📖</div>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="w-full md:w-1/2">
                <div className="card-dark p-8 rounded-2xl border-gradient-gold hover:scale-105 transition-transform duration-300 shadow-2xl">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mr-4 shadow-2xl">
                      <Star className="text-black" size={32} />
                    </div>
                    <h3 className="text-2xl font-black text-gradient-gold">Prático e Simples</h3>
                  </div>
                  <p className="text-gray-300 font-semibold">
                    Cada dia inclui desafios práticos como "ore por alguém", "agradeça por 3 coisas", "perdoe uma mágoa". Simples, mas transformador.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="text-8xl animate-float drop-shadow-2xl">🙏</div>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2">
                <div className="card-dark p-8 rounded-2xl border-gradient-gold hover:scale-105 transition-transform duration-300 shadow-2xl">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mr-4 shadow-2xl">
                      <Gift className="text-black" size={32} />
                    </div>
                    <h3 className="text-2xl font-black text-gradient-gold">Para Toda Família</h3>
                  </div>
                  <p className="text-gray-300 font-semibold">
                    Linguagem acessível para todas as idades. Pode ser lido por crianças, jovens e adultos. O presente perfeito para quem você ama.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="text-8xl animate-float drop-shadow-2xl">👨‍👩‍👧‍👦</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-900/50 to-black/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative inline-block mb-6">
            <img 
              src="/lovable-uploads/da2a4bc8-a689-4bbb-9088-33249e6d3775.png"
              alt="Gabriel Alcântara"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-yellow-400 mx-auto object-cover shadow-2xl"
            />
            <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-3 py-1 rounded-full text-xs font-black shadow-2xl">
              +5 Anos Especialista
            </div>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-black text-gradient-gold mb-2 drop-shadow-2xl">Gabriel Alcântara</h3>
          <p className="text-lg font-bold text-gray-300 mb-6">Mentor, Palestrante e Especialista em Transformação</p>
          
          <div className="max-w-2xl mx-auto space-y-4 mb-8">
            <p className="text-gray-300 font-semibold">
              Gabriel Alcântara é mentor, palestrante e especialista em comunicação, performance e mentalidade empreendedora. Ao longo dos anos, tem ajudado pessoas e negócios a se transformarem por meio de técnicas precisas, foco estratégico e uma linguagem que gera ação imediata.
            </p>
            <p className="text-gray-300 font-semibold">
              Este conteúdo foi criado com base em pesquisa, experiências reais e foco no que dá resultado, sem enrolação e sem pressão desnecessária. Como cristão, Gabriel acredita que a fé é o alicerce de toda transformação verdadeira, e que independente da religião, fortalecer nossa espiritualidade nos torna pessoas melhores.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="card-dark p-6 rounded-xl border border-yellow-400/30 shadow-2xl">
              <div className="text-3xl font-black text-gradient-gold">1000+</div>
              <div className="text-gray-300 font-bold">Vidas Transformadas</div>
            </div>
            <div className="card-dark p-6 rounded-xl border border-yellow-400/30 shadow-2xl">
              <div className="text-3xl font-black text-gradient-gold">5⭐</div>
              <div className="text-gray-300 font-bold">Avaliação Média</div>
            </div>
          </div>

          <blockquote className="border-l-4 border-yellow-400 pl-6 italic text-lg font-semibold text-gray-300 shadow-2xl">
            "A fé não é apenas acreditar no impossível, é fazer do impossível uma realidade através da nossa conexão com Deus."
          </blockquote>
        </div>
      </section>

      {/* Problems vs Solutions */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Problems */}
            <div className="bg-gradient-to-br from-red-900/50 to-red-800/50 p-8 rounded-2xl border border-red-500/30 shadow-2xl">
              <h3 className="text-2xl font-black text-red-400 mb-6 text-center">❌ Sua Realidade Hoje</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <XCircle className="text-red-400 mt-1" size={20} />
                  <span className="font-semibold text-gray-300">Fé fraca e cheia de dúvidas</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="text-red-400 mt-1" size={20} />
                  <span className="font-semibold text-gray-300">Ansiedade e falta de paz interior</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="text-red-400 mt-1" size={20} />
                  <span className="font-semibold text-gray-300">Distanciamento de Deus</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="text-red-400 mt-1" size={20} />
                  <span className="font-semibold text-gray-300">Falta de propósito e direção</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="text-red-400 mt-1" size={20} />
                  <span className="font-semibold text-gray-300">Dificuldade para orar e meditar</span>
                </li>
              </ul>
            </div>

            {/* Solutions */}
            <div className="card-dark p-8 rounded-2xl border-gradient-gold hover:scale-105 transition-transform duration-300 shadow-2xl">
              <h3 className="text-2xl font-black text-gradient-gold mb-6 text-center">✅ Sua Nova Realidade</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-400 mt-1" size={20} />
                  <span className="font-semibold text-gray-300">Fé fortalecida e inabalável</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-400 mt-1" size={20} />
                  <span className="font-semibold text-gray-300">Paz interior e tranquilidade</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-400 mt-1" size={20} />
                  <span className="font-semibold text-gray-300">Intimidade real com Deus</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-400 mt-1" size={20} />
                  <span className="font-semibold text-gray-300">Propósito claro e direção divina</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-400 mt-1" size={20} />
                  <span className="font-semibold text-gray-300">Vida de oração transformadora</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 30 Days Content */}
      <section id="30-days-section" className="py-16 px-4 bg-gradient-to-br from-gray-900/30 to-black/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-gradient-gold drop-shadow-2xl">
            ✝️ 30 DIAS DE TRANSFORMAÇÃO ESPIRITUAL ✝️
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Dias 1-10: Fundamentos da Fé", items: ["Conhecendo a Deus", "O Poder da Oração", "Confiança Absoluta", "Gratidão Diária", "Perdão Libertador"] },
              { title: "Dias 11-20: Crescimento Espiritual", items: ["Intimidade com Deus", "Sabedoria Divina", "Paciência e Esperança", "Amor Incondicional", "Propósito de Vida"] },
              { title: "Dias 21-30: Vida Abundante", items: ["Generoso e Humilde", "Paz Interior", "Fé Inabalável", "Testemunha Viva", "Nova Criatura"] },
            ].map((module, index) => (
              <Card key={index} className="card-dark border-gradient-gold hover:scale-105 transition-transform duration-300 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-gradient-gold font-black">{module.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {module.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 font-semibold text-gray-300">
                        <Star className="text-yellow-400" size={16} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="card-dark p-8 rounded-2xl border-gradient-gold max-w-2xl mx-auto shadow-2xl">
              <h3 className="text-2xl font-black text-gradient-gold mb-4">Cada Dia Inclui:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-4xl mb-2">📖</div>
                  <div className="font-bold text-gray-300">1 Versículo Poderoso</div>
                </div>
                <div>
                  <div className="text-4xl mb-2">💭</div>
                  <div className="font-bold text-gray-300">Reflexão Profunda</div>
                </div>
                <div>
                  <div className="text-4xl mb-2">🎯</div>
                  <div className="font-bold text-gray-300">Desafio Prático</div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced CTA to Purchase */}
          <div className="text-center mt-12">
            <button 
              onClick={scrollToPurchase}
              className="btn-gold text-xl md:text-2xl w-full max-w-md shadow-2xl shadow-yellow-500/50 relative overflow-hidden"
            >
              <span className="relative z-10">🛒 GARANTIR MINHA JORNADA AGORA!</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] animate-shimmer"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-gradient-gold drop-shadow-2xl">
            🙏 VIDAS TRANSFORMADAS PELA JORNADA DE FÉ 🙏
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Silva",
                result: "Paz Interior Encontrada",
                text: "Em 30 dias minha vida mudou completamente. Encontrei a paz que tanto procurava e minha fé se fortaleceu de uma maneira incrível. Recomendo para todos!",
                image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
              },
              {
                name: "João Santos",
                result: "Fé Inabalável",
                text: "Como pai de família, precisava de direção. Este material me ajudou a ser um melhor marido, pai e cristão. Minha família toda foi impactada positivamente.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
              },
              {
                name: "Ana Costa",
                result: "Relacionamento com Deus",
                text: "Estava longe de Deus há anos. Estas reflexões me reconectaram com o Pai de uma forma que nunca imaginei. Sou uma nova pessoa em Cristo!",
                image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="card-dark border-gradient-gold hover:scale-105 transition-transform duration-300 shadow-2xl">
                <CardHeader className="text-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-yellow-400 shadow-2xl"
                  />
                  <CardTitle className="text-gradient-gold font-black">{testimonial.name}</CardTitle>
                  <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 rounded-full text-sm font-black shadow-2xl">
                    {testimonial.result}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={20} />
                    ))}
                  </div>
                  <p className="font-semibold text-gray-300 text-center italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Bonus Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-900/50 to-black/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-gradient-gold drop-shadow-2xl">
            🎁 BÔNUS EXCLUSIVOS - GRÁTIS HOJE! 🎁
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {[
              {
                title: "Guia Completo de Oração Transformadora",
                value: "R$ 67,00",
                description: "Aprenda as técnicas mais poderosas de oração que transformaram a vida de milhares de cristãos pelo mundo."
              },
              {
                title: "30 Versículos de Poder para Memorizar",
                value: "R$ 47,00",
                description: "Cartões digitais com os versículos mais impactantes para ter sempre em mente e fortalecer sua fé a qualquer momento."
              },
              {
                title: "Playlist Cristã Exclusiva - Adoração Profunda",
                value: "R$ 37,00",
                description: "Músicas cristãs cuidadosamente selecionadas para acompanhar sua jornada de 30 dias e elevar sua adoração."
              },
              {
                title: "E-book: Construindo uma Família Cristã Abençoada",
                value: "R$ 87,00",
                description: "Como aplicar princípios bíblicos no lar, criar filhos tementes a Deus e ter um casamento abençoado segundo a Palavra."
              }
            ].map((bonus, index) => (
              <Card key={index} className="car2d-dark border-gradient-gold hover:scale-105 transition-transform duration-300 shadow-2xl">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-gradient-gold font-black flex-1">{bonus.title}</CardTitle>
                    <div className="text-right">
                      <div className="text-gray-400 line-through">{bonus.value}</div>
                      <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-2 py-1 rounded text-sm font-black shadow-2xl">
                        GRÁTIS HOJE
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-gray-300">{bonus.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <div className="card-dark p-8 rounded-2xl border-gradient-gold max-w-md mx-auto shadow-2xl">
              <h3 className="text-2xl font-black text-gradient-gold mb-4">Valor Total dos Bônus:</h3>
              <div className="text-3xl font-black text-gray-400 line-through mb-2">R$ 238,00</div>
              <div className="text-4xl font-black text-green-400 drop-shadow-2xl">GRÁTIS HOJE! 🎉</div>
            </div>
          </div>
        </div>
      </section>

      {/* Purchase Section */}
      <section id="purchase-section" className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-8 text-gradient-gold drop-shadow-2xl">
            ✝️ TRANSFORME SUA VIDA ESPIRITUAL HOJE! ✝️
          </h2>
          
          <div className="card-dark p-8 rounded-2xl border-gradient-gold mb-8 shadow-2xl">
            <div className="mb-6">
              <div className="text-gray-400 line-through text-2xl mb-2">De R$ 335,90</div>
              <div className="text-5xl md:text-6xl font-black text-gradient-gold mb-4 drop-shadow-2xl">R$ 29,90</div>
              <div className="text-xl font-bold text-green-400">Economia de R$ 305,00 (91% OFF)</div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a 
                href="https://pay.braip.co/checkout/plaqd0wj/chevo0qd"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold block text-center shadow-2xl shadow-yellow-500/50 relative overflow-hidden"
              >
                <span className="relative z-10">💳 CARTÃO (3x R$ 9,97)</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] animate-shimmer"></div>
              </a>
              <a 
                href="https://pay.braip.co/checkout/plaqd0wj/chevo0qd"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 block text-center shadow-2xl shadow-green-500/50 relative overflow-hidden"
              >
                <span className="relative z-10">🔥 PIX (R$ 29,90)</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] animate-shimmer"></div>
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 text-gray-300 mb-8 flex-wrap">
            <div className="flex items-center gap-2">
              <Shield className="text-green-400" size={20} />
              <span className="font-semibold">Compra 100% Segura</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="text-yellow-400" size={20} />
              <span className="font-semibold">Acesso Imediato</span>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-900/30 to-green-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card-dark p-8 rounded-2xl border-2 border-green-400 shadow-2xl">
            <Shield className="text-green-400 mx-auto mb-4 drop-shadow-2xl" size={64} />
            <h3 className="text-3xl font-black text-green-400 mb-4 drop-shadow-2xl">GARANTIA DE 7 DIAS</h3>
            <p className="text-xl font-bold text-gray-300 mb-4">
              Se em 7 dias você não sentir sua fé mais forte e sua vida mais direcionada, devolvemos 100% do seu investimento. Sem perguntas, sem complicações.
            </p>
            <p className="text-lg font-semibold text-green-400">
              Você não tem nada a perder, só uma vida espiritual transformada para ganhar!
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-gradient-gold drop-shadow-2xl">
            ❓ PERGUNTAS FREQUENTES ❓
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: "Como funciona a Jornada de Fé?",
                answer: "São 30 dias de conteúdo, onde cada dia você receberá um versículo bíblico, uma reflexão profunda baseada nesse versículo e um desafio prático para aplicar em sua vida. É simples, mas transformador."
              },
              {
                question: "Preciso ter conhecimento bíblico avançado?",
                answer: "Não! O material foi criado para pessoas de todos os níveis de conhecimento bíblico. A linguagem é acessível e pode ser compreendida por crianças, jovens e adultos."
              },
              {
                question: "Como recebo o material após a compra?",
                answer: "Imediatamente após a confirmação do pagamento, você receberá um email com o link para download do material em PDF. O acesso é vitalício."
              },
              {
                question: "Posso presentear alguém com este material?",
                answer: "Claro! Este é o presente perfeito para familiares e amigos que precisam fortalecer a fé. Você pode compartilhar o material ou comprar como presente."
              },
              {
                question: "A garantia é real mesmo?",
                answer: "Sim! Você tem 7 dias para testar o material. Se não ficar satisfeito por qualquer motivo, devolvemos 100% do seu dinheiro, sem questionamentos."
              }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="card-dark border-gradient-gold rounded-xl px-6 shadow-2xl">
                <AccordionTrigger className="text-gradient-gold font-black text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 font-semibold">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* VIP List Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-900/50 to-black/50">
        <div className="max-w-4xl mx-auto">
          <div className="card-dark p-8 rounded-2xl border-gradient-gold shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-black text-center mb-6 text-gradient-gold drop-shadow-2xl">
              👑 FAÇA PARTE DA NOSSA LISTA VIP 👑
            </h2>
            <p className="text-center text-gray-300 font-semibold mb-8">
              Receba em primeira mão nossos novos materiais, descontos exclusivos e conteúdos especiais para fortalecer ainda mais sua fé!
            </p>
            
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
              <Input
                type="text"
                placeholder="Seu nome completo"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="bg-gray-800 border-yellow-400/30 text-white font-semibold shadow-2xl"
                required
              />
              <Input
                type="email"
                placeholder="Seu melhor email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="bg-gray-800 border-yellow-400/30 text-white font-semibold shadow-2xl"
                required
              />
              <Textarea
                placeholder="Sugestões de novos produtos (opcional)"
                value={formData.suggestion}
                onChange={(e) => setFormData({...formData, suggestion: e.target.value})}
                className="bg-gray-800 border-yellow-400/30 text-white font-semibold shadow-2xl"
                rows={3}
              />
              <Button type="submit" className="btn-gold w-full shadow-2xl shadow-yellow-500/50 relative overflow-hidden">
                <span className="relative z-10">FAZER PARTE DA LISTA VIP 🌟</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] animate-shimmer"></div>
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-12 px-4 bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-black text-gradient-gold mb-4">Links Úteis</h4>
              <ul className="space-y-2">
                <li><a href="/sobre" className="text-gray-400 hover:text-yellow-400 font-semibold">Sobre</a></li>
                <li><a href="/contato" className="text-gray-400 hover:text-yellow-400 font-semibold">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-gradient-gold mb-4">Política</h4>
              <ul className="space-y-2">
                <li><a href="/politica-reembolso" className="text-gray-400 hover:text-yellow-400 font-semibold">Reembolso</a></li>
                <li><a href="/termos" className="text-gray-400 hover:text-yellow-400 font-semibold">Termos</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-gradient-gold mb-4">Suporte</h4>
              <ul className="space-y-2">
                <li><a href="mailto:ogabrielempreendedor@gmail.com" className="text-gray-400 hover:text-yellow-400 font-semibold">Email</a></li>
                <li><span className="text-gray-400 font-semibold">24h úteis</span></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-gradient-gold mb-4">Contato</h4>
              <div className="space-y-2">
                <a 
                  href="mailto:ogabrielempreendedor@gmail.com" 
                  className="text-yellow-400 hover:text-yellow-300 font-semibold block break-all"
                >
                  ogabrielempreendedor@gmail.com
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 font-semibold">
              © 2025 Gabriel Alcântara - Empreendedor Digital. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
