
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

  const scrollToPurchase = () => {
    document.getElementById('purchase-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Floating coins background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 text-yellow-400/10 text-6xl animate-coins">✨</div>
        <div className="absolute top-32 right-20 text-yellow-400/10 text-4xl animate-coins">🌟</div>
        <div className="absolute bottom-40 left-1/4 text-yellow-400/10 text-5xl animate-coins">✨</div>
        <div className="absolute top-64 left-1/3 text-yellow-400/10 text-3xl animate-coins">🌟</div>
        <div className="absolute bottom-20 right-10 text-yellow-400/10 text-6xl animate-coins">✨</div>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 py-8 relative">
        {/* Limited Time Badge */}
        <div className="animate-pulse-glow bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2 rounded-full mb-6 font-black text-sm uppercase tracking-wider">
          ⏰ TEMPO LIMITADO
        </div>

        {/* Timer */}
        <div className="flex gap-4 mb-8">
          <div className="bg-gradient-to-br from-red-600 to-red-800 p-4 rounded-xl text-center min-w-[80px] border-2 border-red-400">
            <div className="text-2xl font-black text-white">{String(timeLeft.hours).padStart(2, '0')}</div>
            <div className="text-xs font-bold text-red-200">HORAS</div>
          </div>
          <div className="bg-gradient-to-br from-red-600 to-red-800 p-4 rounded-xl text-center min-w-[80px] border-2 border-red-400">
            <div className="text-2xl font-black text-white">{String(timeLeft.minutes).padStart(2, '0')}</div>
            <div className="text-xs font-bold text-red-200">MIN</div>
          </div>
          <div className="bg-gradient-to-br from-red-600 to-red-800 p-4 rounded-xl text-center min-w-[80px] border-2 border-red-400">
            <div className="text-2xl font-black text-white">{String(timeLeft.seconds).padStart(2, '0')}</div>
            <div className="text-xs font-bold text-red-200">SEG</div>
          </div>
        </div>

        {/* Headline */}
        <div className="text-center mb-8">
          <h2 className="text-lg md:text-xl font-black text-yellow-400 mb-4">
            Sua Fé Está Fraca? Precisa de Esperança?
          </h2>
          <h1 className="text-3xl md:text-5xl font-black mb-4 leading-tight">
            <span className="text-gradient-gold block">JORNADA DE FÉ</span>
            <span className="text-gradient-gold block">30 DIAS DE REFLEXÕES</span>
          </h1>
          <p className="text-xl md:text-2xl font-bold text-gray-300 mb-6">
            Transforme sua vida espiritual com reflexões poderosas 🔥
          </p>
        </div>

        {/* Product Image */}
        <div className="relative mb-8">
          <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded-full text-sm font-black z-10 animate-bounce-gentle">
            LANÇAMENTO
          </div>
          <img 
            src="/lovable-uploads/e9fac0f7-2be2-4d7d-8821-bdae5c5eb525.png" 
            alt="Jornada de Fé - 30 Dias de Reflexões"
            className="w-[200px] h-[300px] md:w-[300px] md:h-[400px] object-cover rounded-xl border-4 border-yellow-400 shadow-2xl shadow-yellow-500/25 hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Pricing */}
        <div className="text-center mb-8">
          <div className="text-gray-400 line-through text-xl mb-2">De R$ 97,00</div>
          <div className="text-4xl md:text-5xl font-black text-gradient-gold mb-2">R$ 29,90</div>
          <div className="text-lg font-bold text-green-400">ou 3x de R$ 9,97 sem juros</div>
        </div>

        {/* CTA Button */}
        <button 
          onClick={scrollToPurchase}
          className="btn-gold text-xl md:text-2xl mb-8 w-full max-w-md"
        >
          QUERO TRANSFORMAR MINHA FÉ AGORA! 🙏
        </button>

        {/* Animated Arrow */}
        <ArrowDown className="text-yellow-400 animate-bounce-gentle" size={32} />
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-gradient-gold">
            TESOUROS DA JORNADA DE FÉ
          </h2>
          
          <div className="space-y-12">
            {/* Benefit 1 */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2">
                <div className="card-dark p-8 rounded-2xl border-gradient-gold hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mr-4">
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
                <div className="text-8xl animate-float">📖</div>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="w-full md:w-1/2">
                <div className="card-dark p-8 rounded-2xl border-gradient-gold hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mr-4">
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
                <div className="text-8xl animate-float">🙏</div>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2">
                <div className="card-dark p-8 rounded-2xl border-gradient-gold hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mr-4">
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
                <div className="text-8xl animate-float">👨‍👩‍👧‍👦</div>
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
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-yellow-400 mx-auto object-cover"
            />
            <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-3 py-1 rounded-full text-xs font-black">
              +5 Anos Especialista
            </div>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-black text-gradient-gold mb-2">Gabriel Alcântara</h3>
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
            <div className="card-dark p-6 rounded-xl border border-yellow-400/30">
              <div className="text-3xl font-black text-gradient-gold">1000+</div>
              <div className="text-gray-300 font-bold">Vidas Transformadas</div>
            </div>
            <div className="card-dark p-6 rounded-xl border border-yellow-400/30">
              <div className="text-3xl font-black text-gradient-gold">5⭐</div>
              <div className="text-gray-300 font-bold">Avaliação Média</div>
            </div>
          </div>

          <blockquote className="border-l-4 border-yellow-400 pl-6 italic text-lg font-semibold text-gray-300">
            "A fé não é apenas acreditar no impossível, é fazer do impossível uma realidade através da nossa conexão com Deus."
          </blockquote>
        </div>
      </section>

      {/* Problems vs Solutions */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Problems */}
            <div className="bg-gradient-to-br from-red-900/50 to-red-800/50 p-8 rounded-2xl border border-red-500/30">
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
            <div className="card-dark p-8 rounded-2xl border-gradient-gold hover:scale-105 transition-transform duration-300">
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
      <section className="py-16 px-4 bg-gradient-to-br from-gray-900/30 to-black/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-gradient-gold">
            30 DIAS DE TRANSFORMAÇÃO ESPIRITUAL
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Dias 1-10: Fundamentos da Fé", items: ["Conhecendo a Deus", "O Poder da Oração", "Confiança Absoluta", "Gratidão Diária", "Perdão Libertador"] },
              { title: "Dias 11-20: Crescimento Espiritual", items: ["Intimidade com Deus", "Sabedoria Divina", "Paciência e Esperança", "Amor Incondicional", "Propósito de Vida"] },
              { title: "Dias 21-30: Vida Abundante", items: ["Generos e Humilde", "Paz Interior", "Fé Inabalável", "Testemunha Viva", "Nova Criatura"] },
            ].map((module, index) => (
              <Card key={index} className="card-dark border-gradient-gold hover:scale-105 transition-transform duration-300">
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
            <div className="card-dark p-8 rounded-2xl border-gradient-gold max-w-2xl mx-auto">
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
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-gradient-gold">
            VIDAS TRANSFORMADAS PELA JORNADA DE FÉ
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Silva",
                result: "Paz Interior Encontrada",
                text: "Em 30 dias minha vida mudou completamente. Encontrei a paz que tanto procurava e minha fé se fortaleceu de uma maneira incrível. Recomendo para todos!",
                image: "https://images.unsplash.com/photo-1494790108755-2616c22b9e05?w=150&h=150&fit=crop&crop=face"
              },
              {
                name: "João Santos",
                result: "Fé Inabalável",
                text: "Como pai de família, precisava de direção. Este material me ajudou a ser um melhor marido, pai e cristão. Minha família toda foi impactada positivamente.",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
              },
              {
                name: "Ana Costa",
                result: "Relacionamento com Deus",
                text: "Estava longe de Deus há anos. Estas reflexões me reconectaram com o Pai de uma forma que nunca imaginei. Sou uma nova pessoa em Cristo!",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="card-dark border-gradient-gold hover:scale-105 transition-transform duration-300">
                <CardHeader className="text-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-yellow-400"
                  />
                  <CardTitle className="text-gradient-gold font-black">{testimonial.name}</CardTitle>
                  <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 rounded-full text-sm font-black">
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

      {/* Bonus Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-900/50 to-black/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-gradient-gold">
            BÔNUS EXCLUSIVOS - GRÁTIS HOJE! 🎁
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {[
              {
                title: "Guia de Oração Poderosa",
                value: "R$ 47,00",
                description: "Aprenda técnicas de oração que realmente funcionam e transformam sua comunicação com Deus."
              },
              {
                title: "30 Versículos para Memorizar",
                value: "R$ 37,00",
                description: "Cartões digitais com os versículos mais poderosos para ter sempre em mente."
              },
              {
                title: "Playlist de Adoração Selecionada",
                value: "R$ 27,00",
                description: "Músicas especialmente escolhidas para acompanhar sua jornada de fé."
              },
              {
                title: "E-book: Família Cristã Feliz",
                value: "R$ 67,00",
                description: "Como aplicar princípios cristãos no relacionamento familiar e criar um lar abençoado."
              }
            ].map((bonus, index) => (
              <Card key={index} className="card-dark border-gradient-gold hover:scale-105 transition-transform duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-gradient-gold font-black flex-1">{bonus.title}</CardTitle>
                    <div className="text-right">
                      <div className="text-gray-400 line-through">{bonus.value}</div>
                      <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-2 py-1 rounded text-sm font-black">
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
            <div className="card-dark p-8 rounded-2xl border-gradient-gold max-w-md mx-auto">
              <h3 className="text-2xl font-black text-gradient-gold mb-4">Valor Total dos Bônus:</h3>
              <div className="text-3xl font-black text-gray-400 line-through mb-2">R$ 178,00</div>
              <div className="text-4xl font-black text-green-400">GRÁTIS HOJE! 🎉</div>
            </div>
          </div>
        </div>
      </section>

      {/* Purchase Section */}
      <section id="purchase-section" className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-8 text-gradient-gold">
            TRANSFORME SUA VIDA ESPIRITUAL HOJE! 
          </h2>
          
          <div className="card-dark p-8 rounded-2xl border-gradient-gold mb-8">
            <div className="mb-6">
              <div className="text-gray-400 line-through text-2xl mb-2">De R$ 275,00</div>
              <div className="text-5xl md:text-6xl font-black text-gradient-gold mb-4">R$ 29,90</div>
              <div className="text-xl font-bold text-green-400">Economia de R$ 245,10 (89% OFF)</div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a 
                href="https://pay.braip.co/checkout/plar6oow/chevozvg"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold block text-center"
              >
                💳 CARTÃO (3x R$ 9,97)
              </a>
              <a 
                href="https://pay.braip.co/checkout/plar6oow/chevozvg"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 block text-center"
              >
                🔥 PIX (R$ 29,90)
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 text-gray-300 mb-8">
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
          <div className="card-dark p-8 rounded-2xl border-2 border-green-400">
            <Shield className="text-green-400 mx-auto mb-4" size={64} />
            <h3 className="text-3xl font-black text-green-400 mb-4">GARANTIA DE 7 DIAS</h3>
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
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-gradient-gold">
            PERGUNTAS FREQUENTES
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
              <AccordionItem key={index} value={`item-${index}`} className="card-dark border-gradient-gold rounded-xl px-6">
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
          <div className="card-dark p-8 rounded-2xl border-gradient-gold">
            <h2 className="text-3xl md:text-4xl font-black text-center mb-6 text-gradient-gold">
              FAÇA PARTE DA NOSSA LISTA VIP 👑
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
                className="bg-gray-800 border-yellow-400/30 text-white font-semibold"
                required
              />
              <Input
                type="email"
                placeholder="Seu melhor email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="bg-gray-800 border-yellow-400/30 text-white font-semibold"
                required
              />
              <Textarea
                placeholder="Sugestões de novos produtos (opcional)"
                value={formData.suggestion}
                onChange={(e) => setFormData({...formData, suggestion: e.target.value})}
                className="bg-gray-800 border-yellow-400/30 text-white font-semibold"
                rows={3}
              />
              <Button type="submit" className="btn-gold w-full">
                FAZER PARTE DA LISTA VIP 🌟
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
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
              <a href="mailto:ogabrielempreendedor@gmail.com" className="text-yellow-400 hover:text-yellow-300 font-semibold">
                ogabrielempreendedor@gmail.com
              </a>
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
