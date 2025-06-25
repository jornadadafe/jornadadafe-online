import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { ArrowDown, Shield, Star, Clock, Heart, Gift, CheckCircle, XCircle, Mail, Phone, MapPin, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Index = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    suggestion: ''
  });
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
      const minutes = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60));
      const seconds = Math.floor(diff % (1000 * 60) / 1000);
      setTimeLeft({
        hours,
        minutes,
        seconds
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      toast.success('Parabéns! Você foi adicionado à nossa Lista VIP! 🎉');
      setFormData({
        name: '',
        email: '',
        suggestion: ''
      });
    }
  };
  const scrollTo30Days = () => {
    document.getElementById('30-days-section')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const scrollToPurchase = () => {
    document.getElementById('purchase-section')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Enhanced Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Floating particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-yellow-400/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-yellow-500/15 rounded-full animate-bounce-gentle" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-yellow-400/25 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-60 right-40 w-1 h-1 bg-yellow-300/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-60 right-10 w-2 h-2 bg-yellow-500/20 rounded-full animate-bounce-gentle" style={{animationDelay: '3s'}}></div>
        
        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-900/5 via-transparent to-yellow-800/5 animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 py-8 relative z-10">
        {/* Instability Notice */}
        <div className="flex items-center gap-2 bg-red-900/20 border border-red-500/30 text-red-300 px-3 py-2 rounded-lg mb-4 text-sm font-medium transition-all duration-300 hover:bg-red-900/30">
          <AlertTriangle size={16} />
          <span>Página instável devido ao alto número de acessos</span>
        </div>

        {/* Timer - Smaller */}
        <div className="flex gap-3 mb-6">
          <div className="bg-gradient-to-br from-red-600 to-red-800 p-3 rounded-lg text-center min-w-[60px] border border-red-400/50 shadow-xl transition-transform duration-300 hover:scale-105">
            <div className="text-lg font-black text-white">{String(timeLeft.hours).padStart(2, '0')}</div>
            <div className="text-xs font-bold text-red-200">HORAS</div>
          </div>
          <div className="bg-gradient-to-br from-red-600 to-red-800 p-3 rounded-lg text-center min-w-[60px] border border-red-400/50 shadow-xl transition-transform duration-300 hover:scale-105">
            <div className="text-lg font-black text-white">{String(timeLeft.minutes).padStart(2, '0')}</div>
            <div className="text-xs font-bold text-red-200">MIN</div>
          </div>
          <div className="bg-gradient-to-br from-red-600 to-red-800 p-3 rounded-lg text-center min-w-[60px] border border-red-400/50 shadow-xl transition-transform duration-300 hover:scale-105">
            <div className="text-lg font-black text-white">{String(timeLeft.seconds).padStart(2, '0')}</div>
            <div className="text-xs font-bold text-red-200">SEG</div>
          </div>
        </div>

        {/* Enhanced Headline */}
        <div className="text-center mb-8">
          <h2 className="text-lg md:text-xl font-semibold text-yellow-400 mb-4 transition-all duration-500">
            Como está sua fé hoje?
          </h2>
          <div className="relative">
            <h3 className="text-sm md:text-base font-medium text-gray-400 mb-2 transition-all duration-500">
              Conheça a
            </h3>
            <h1 className="text-3xl md:text-5xl font-black mb-4 leading-tight relative z-10 transition-all duration-700">
              <span className="text-gradient-gold block drop-shadow-2xl">JORNADA DE FÉ</span>
              <span className="text-gradient-gold block drop-shadow-2xl">30 DIAS DE REFLEXÕES</span>
            </h1>
          </div>
          <p className="text-lg md:text-xl font-semibold text-gray-300 mb-6 transition-all duration-500">
            Fortaleça sua conexão espiritual com reflexões transformadoras
          </p>
        </div>

        {/* Enhanced Product Image as Book Cover */}
        <div className="relative mb-8 perspective-1000">
          <div className="absolute -top-1 -right-1 bg-gradient-to-r from-green-500 to-green-600 text-white px-2 py-1 rounded-lg text-xs font-semibold z-10 animate-bounce-gentle shadow-lg border border-green-300/50 transition-all duration-300">
            🏆 Mais Vendido
          </div>
          <div className="relative transform transition-all duration-500 hover:scale-105 book-3d">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-yellow-500/30 to-yellow-600/20 rounded-xl blur-xl animate-pulse-glow"></div>
            <div className="relative bg-gradient-to-br from-gray-800 to-black p-2 rounded-xl shadow-2xl border border-yellow-400/50 transition-all duration-500 hover:border-yellow-400/80">
              <img src="/lovable-uploads/e9fac0f7-2be2-4d7d-8821-bdae5c5eb525.png" alt="Jornada de Fé - 30 Dias de Reflexões" className="w-[200px] h-[300px] md:w-[280px] md:h-[380px] object-cover rounded-lg shadow-inner transition-all duration-500" />
              <div className="absolute inset-2 bg-gradient-to-t from-black/30 via-transparent to-yellow-400/10 rounded-lg pointer-events-none"></div>
            </div>
          </div>
        </div>

        {/* Smaller CTA Button */}
        <button onClick={scrollTo30Days} className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-500/25 text-lg mb-8 max-w-sm relative overflow-hidden">
          <span className="relative z-10">🙏 Iniciar Minha Jornada</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] animate-shimmer"></div>
        </button>

        {/* Animated Arrow */}
        <ArrowDown className="text-yellow-400 animate-bounce-gentle drop-shadow-2xl transition-all duration-300" size={28} />
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-gradient-gold drop-shadow-2xl transition-all duration-700">
            BENÇÃOS DA JORNADA DE FÉ
          </h2>
          
          <div className="space-y-12">
            {/* Benefit 1 */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2">
                <div className="bg-gradient-to-br from-gray-900/70 to-black/70 backdrop-blur-sm p-8 rounded-2xl border border-yellow-400/20 hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-yellow-500/10">
                  <div className="flex items-center mb-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mr-4 shadow-xl transition-all duration-300">
                      <Heart className="text-black" size={28} />
                    </div>
                    <h3 className="text-xl font-black text-gradient-gold">Transformação Espiritual</h3>
                  </div>
                  <p className="text-gray-300 font-medium leading-relaxed">
                    30 dias de reflexões baseadas nas Escrituras com desafios práticos.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="w-full md:w-1/2">
                <div className="bg-gradient-to-br from-gray-900/70 to-black/70 backdrop-blur-sm p-8 rounded-2xl border border-yellow-400/20 hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-yellow-500/10">
                  <div className="flex items-center mb-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mr-4 shadow-xl transition-all duration-300">
                      <Star className="text-black" size={28} />
                    </div>
                    <h3 className="text-xl font-black text-gradient-gold">Simples e Eficaz</h3>
                  </div>
                  <p className="text-gray-300 font-medium leading-relaxed">
                    Desafios práticos transformadores para fortalecer sua fé diariamente.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2">
                <div className="bg-gradient-to-br from-gray-900/70 to-black/70 backdrop-blur-sm p-8 rounded-2xl border border-yellow-400/20 hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-yellow-500/10">
                  <div className="flex items-center mb-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mr-4 shadow-xl transition-all duration-300">
                      <Gift className="text-black" size={28} />
                    </div>
                    <h3 className="text-xl font-black text-gradient-gold">Para Toda Família</h3>
                  </div>
                  <p className="text-gray-300 font-medium leading-relaxed">
                    Linguagem acessível para crianças, jovens e adultos.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-900/40 to-black/40">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative inline-block mb-6">
            <img src="/lovable-uploads/da2a4bc8-a689-4bbb-9088-33249e6d3775.png" alt="Gabriel Alcântara" className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-yellow-400 mx-auto object-cover shadow-2xl transition-transform duration-500 hover:scale-105" />
            <div className="absolute -top-1 -right-1 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-2 py-1 rounded-full text-xs font-semibold shadow-lg transition-all duration-300">
              +3 Anos
            </div>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-black text-gradient-gold mb-2 drop-shadow-2xl transition-all duration-500">Gabriel Alcântara</h3>
          <p className="text-lg font-semibold text-gray-300 mb-2">Mentor, Palestrante e Especialista em Transformação</p>
          <p className="text-sm font-medium text-yellow-400 mb-6 italic">Inspirado na franquia: "Café com Deus Pai"</p>
          
          <div className="max-w-2xl mx-auto space-y-4 mb-8 font-serif text-gray-300">
            <p className="leading-relaxed text-base">
              Gabriel Alcântara é mentor, palestrante e especialista em comunicação, performance e mentalidade empreendedora. Ao longo dos anos, tem ajudado pessoas e negócios a se transformarem por meio de técnicas precisas, foco estratégico e uma linguagem que gera ação imediata.
            </p>
            <p className="leading-relaxed text-base">
              Este conteúdo foi criado com base em pesquisa, experiências reais e foco no que dá resultado, sem enrolação e sem pressão desnecessária. Como cristão, Gabriel acredita que a fé é o alicerce de toda transformação verdadeira, e que independente da religião, fortalecer nossa espiritualidade nos torna pessoas melhores.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm p-6 rounded-xl border border-yellow-400/20 shadow-2xl transition-transform duration-300 hover:scale-105">
              <div className="text-3xl font-black text-gradient-gold">1000+</div>
              <div className="text-gray-300 font-bold">Vidas Transformadas</div>
            </div>
            <div className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm p-6 rounded-xl border border-yellow-400/20 shadow-2xl transition-transform duration-300 hover:scale-105">
              <div className="text-3xl font-black text-gradient-gold">5⭐</div>
              <div className="text-gray-300 font-bold">Avaliação Média</div>
            </div>
          </div>

          <blockquote className="border-l-4 border-yellow-400 pl-6 italic text-lg font-medium text-gray-300 shadow-2xl">
            "A fé não é apenas acreditar no impossível, é fazer do impossível uma realidade através da nossa conexão com Deus."
          </blockquote>
        </div>
      </section>

      {/* Problems vs Solutions */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Problems */}
            <div className="bg-gradient-to-br from-red-900/30 to-red-800/30 p-8 rounded-2xl border border-red-500/20 shadow-2xl transition-transform duration-500 hover:scale-105">
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
            <div className="bg-gradient-to-br from-gray-900/70 to-black/70 backdrop-blur-sm p-8 rounded-2xl border border-yellow-400/20 hover:scale-105 transition-transform duration-500 shadow-2xl">
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
      <section id="30-days-section" className="py-16 px-4 bg-gradient-to-br from-gray-900/20 to-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-gradient-gold drop-shadow-2xl transition-all duration-700">
            30 DIAS DE TRANSFORMAÇÃO ESPIRITUAL
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[{
              title: "Dias 1-10: Fundamentos da Fé",
              items: ["Conhecendo a Deus", "O Poder da Oração", "Confiança Absoluta", "Gratidão Diária", "Perdão Libertador"]
            }, {
              title: "Dias 11-20: Crescimento Espiritual",
              items: ["Intimidade com Deus", "Sabedoria Divina", "Paciência e Esperança", "Amor Incondicional", "Propósito de Vida"]
            }, {
              title: "Dias 21-30: Vida Abundante",
              items: ["Generoso e Humilde", "Paz Interior", "Fé Inabalável", "Testemunha Viva", "Nova Criatura"]
            }].map((module, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm border border-yellow-400/20 hover:scale-105 transition-transform duration-300 shadow-2xl">
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
            <div className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm p-8 rounded-2xl border border-yellow-400/20 max-w-2xl mx-auto shadow-2xl">
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
            <button onClick={scrollToPurchase} className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-500/25 text-lg max-w-sm relative overflow-hidden">
              <span className="relative z-10">🛒 Iniciar Jornada Agora!</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] animate-shimmer"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials - WhatsApp Style */}
      <section className="py-16 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-gradient-gold drop-shadow-2xl transition-all duration-700">
            CONVERSAS REAIS DE WHATSAPP
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
              name: "Ana Costa",
              phone: "+55 (11) 9****-****",
              message: "Gente, esse material mudou minha vida! Em 15 dias já sentia uma paz que não tinha há anos. Minha família toda notou a diferença. Recomendo demais! 🙏✨",
              time: "14:23",
              image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
            }, {
              name: "Carlos Silva",
              phone: "+55 (21) 9****-****",
              message: "Cara, eu era bem cético sobre essas coisas... Mas depois de 20 dias fazendo as reflexões, minha ansiedade diminuiu muito. Durmo melhor e me sinto mais conectado espiritualmente.",
              time: "09:15",
              image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
            }, {
              name: "Fernanda Lima",
              phone: "+55 (85) 9****-****",
              message: "Meninas, comprei pensando 'mais um livro religioso'... Mas que surpresa! Os desafios são simples mas poderosos. Meu casamento melhorou, minha relação com Deus também. Vale cada centavo! 💕",
              time: "16:45",
              image: "https://images.unsplash.com/photo-1494790108755-2616c96946b4?w=150&h=150&fit=crop&crop=face"
            }].map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-green-800/20 to-green-900/20 p-4 rounded-2xl border border-green-500/30 shadow-2xl transition-all duration-500 hover:scale-105">
                <div className="bg-green-600 p-3 rounded-t-lg mb-3">
                  <div className="flex items-center gap-3">
                    <img src={testimonial.image} alt={testimonial.name} className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                    <div>
                      <div className="text-white font-bold text-sm">{testimonial.name}</div>
                      <div className="text-green-100 text-xs">{testimonial.phone}</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-3 rounded-lg mb-2">
                  <p className="text-gray-800 font-medium text-sm leading-relaxed">{testimonial.message}</p>
                </div>
                <div className="text-gray-400 text-xs text-right">{testimonial.time}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Bonus Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-900/30 to-black/30 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-gradient-gold drop-shadow-2xl transition-all duration-700">
            BÔNUS EXCLUSIVOS - GRÁTIS HOJE!
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[{
              title: "Guia Completo de Oração Transformadora",
              value: "R$ 67,00",
              description: "Aprenda as técnicas mais poderosas de oração que transformaram a vida de milhares de cristãos pelo mundo."
            }, {
              title: "30 Versículos de Poder para Memorizar",
              value: "R$ 47,00",
              description: "Cartões digitais com os versículos mais impactantes para ter sempre em mente e fortalecer sua fé a qualquer momento."
            }, {
              title: "Playlist Cristã Exclusiva - Adoração Profunda",
              value: "R$ 37,00",
              description: "Músicas cristãs cuidadosamente selecionadas para acompanhar sua jornada de 30 dias e elevar sua adoração."
            }, {
              title: "Guia de Jejum e Meditação Cristã",
              value: "R$ 87,00",
              description: "Manual completo para praticar jejum e meditação de forma segura e espiritualmente eficaz, fortalecendo sua conexão com Deus."
            }].map((bonus, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-900/70 to-black/70 backdrop-blur-sm border border-yellow-400/20 hover:scale-105 transition-all duration-500 shadow-2xl">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start gap-4">
                    <CardTitle className="text-gradient-gold font-black text-base leading-tight">{bonus.title}</CardTitle>
                    <div className="text-right flex-shrink-0">
                      <div className="text-gray-400 line-through text-sm">{bonus.value}</div>
                      <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-2 py-1 rounded text-xs font-black shadow-xl whitespace-nowrap">
                        GRÁTIS HOJE
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="font-medium text-gray-300 text-sm leading-relaxed">{bonus.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm p-6 rounded-2xl border border-yellow-400/20 max-w-md mx-auto shadow-2xl">
              <h3 className="text-xl font-black text-gradient-gold mb-3">Valor Total dos Bônus:</h3>
              <div className="text-2xl font-black text-gray-400 line-through mb-2">R$ 238,00</div>
              <div className="text-3xl font-black text-green-400 drop-shadow-2xl">GRÁTIS HOJE! 🎉</div>
            </div>
          </div>
        </div>
      </section>

      {/* Purchase Section */}
      <section id="purchase-section" className="py-16 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-gradient-gold drop-shadow-2xl transition-all duration-700">
            💰 Qual Valor Para Se Reconectar Com Deus?
          </h2>
          
          <div className="bg-gradient-to-br from-gray-900/70 to-black/70 backdrop-blur-sm p-8 rounded-2xl border border-yellow-400/20 mb-8 shadow-2xl transition-all duration-500">
            <div className="mb-6">
              <div className="text-gray-400 line-through text-2xl mb-2">De R$ 335,90</div>
              <div className="text-5xl md:text-6xl font-black text-gradient-gold mb-4 drop-shadow-2xl transition-all duration-700">R$ 29,90</div>
              <div className="text-xl font-bold text-green-400">Economia de R$ 305,00 (91% OFF)</div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="https://pay.braip.co/checkout/plaqd0wj/chevo0qd" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-500/25 block text-center relative overflow-hidden">
                <span className="relative z-10">💳 CARTÃO (3x R$ 9,97)</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] animate-shimmer"></div>
              </a>
              <a href="https://pay.braip.co/checkout/plaqd0wj/chevo0qd" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 block text-center shadow-lg shadow-green-500/25 relative overflow-hidden">
                <span className="relative z-10">🔷 PIX (R$ 29,90)</span>
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
      <section className="py-16 px-4 bg-gradient-to-br from-green-900/20 to-green-800/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-gray-900/70 to-black/70 backdrop-blur-sm p-8 rounded-2xl border border-green-400/30 shadow-2xl transition-transform duration-500 hover:scale-105">
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
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-gradient-gold drop-shadow-2xl transition-all duration-700">
            PERGUNTAS FREQUENTES
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {[{
              question: "Como funciona a Jornada de Fé?",
              answer: "São 30 dias de conteúdo, onde cada dia você receberá um versículo bíblico, uma reflexão profunda baseada nesse versículo e um desafio prático para aplicar em sua vida. É simples, mas transformador."
            }, {
              question: "Preciso ter conhecimento bíblico avançado?",
              answer: "Não! O material foi criado para pessoas de todos os níveis de conhecimento bíblico. A linguagem é acessível e pode ser compreendida por crianças, jovens e adultos."
            }, {
              question: "Como recebo o material após a compra?",
              answer: "Imediatamente após a confirmação do pagamento, você receberá um email com o link para download do material em PDF. O acesso é vitalício."
            }, {
              question: "Posso presentear alguém com este material?",
              answer: "Claro! Este é o presente perfeito para familiares e amigos que precisam fortalecer a fé. Você pode compartilhar o material ou comprar como presente."
            }, {
              question: "A garantia é real mesmo?",
              answer: "Sim! Você tem 7 dias para testar o material. Se não ficar satisfeito por qualquer motivo, devolvemos 100% do seu dinheiro, sem questionamentos."
            }].map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="bg-gradient-to-br from-gray-900/70 to-black/70 backdrop-blur-sm border border-yellow-400/20 rounded-xl px-6 shadow-2xl transition-all duration-500">
                <AccordionTrigger className="text-gradient-gold font-black text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 font-semibold">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>
        </div>
      </section>

      {/* VIP List Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-900/30 to-black/30">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900/70 to-black/70 backdrop-blur-sm p-8 rounded-2xl border border-yellow-400/20 shadow-2xl transition-all duration-500">
            <h2 className="text-3xl md:text-4xl font-black text-center mb-6 text-gradient-gold drop-shadow-2xl">
              FAÇA PARTE DA NOSSA LISTA VIP
            </h2>
            <p className="text-center text-gray-300 font-semibold mb-8">
              Receba em primeira mão nossos novos materiais, descontos exclusivos e conteúdos especiais para fortalecer ainda mais sua fé!
            </p>
            
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
              <Input type="text" placeholder="Seu nome completo" value={formData.name} onChange={e => setFormData({
              ...formData,
              name: e.target.value
            })} className="bg-gray-800 border-yellow-400/30 text-white font-semibold shadow-2xl" required />
              <Input type="email" placeholder="Seu melhor email" value={formData.email} onChange={e => setFormData({
              ...formData,
              email: e.target.value
            })} className="bg-gray-800 border-yellow-400/30 text-white font-semibold shadow-2xl" required />
              <Textarea placeholder="Sugestões de novos produtos (opcional)" value={formData.suggestion} onChange={e => setFormData({
              ...formData,
              suggestion: e.target.value
            })} className="bg-gray-800 border-yellow-400/30 text-white font-semibold shadow-2xl" rows={3} />
              <Button type="submit" className="btn-gold w-full shadow-2xl shadow-yellow-500/50 relative overflow-hidden transition-all duration-300">
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
                <li><a href="/sobre" className="text-gray-400 hover:text-yellow-400 font-semibold transition-colors duration-300">Sobre</a></li>
                <li><a href="/contato" className="text-gray-400 hover:text-yellow-400 font-semibold transition-colors duration-300">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-gradient-gold mb-4">Política</h4>
              <ul className="space-y-2">
                <li><a href="/politica-reembolso" className="text-gray-400 hover:text-yellow-400 font-semibold transition-colors duration-300">Reembolso</a></li>
                <li><a href="/termos" className="text-gray-400 hover:text-yellow-400 font-semibold transition-colors duration-300">Termos</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-gradient-gold mb-4">Suporte</h4>
              <ul className="space-y-2">
                <li><a href="mailto:ogabrielempreendedor@gmail.com" className="text-gray-400 hover:text-yellow-400 font-semibold transition-colors duration-300 text-xs break-all">Email</a></li>
                <li><span className="text-gray-400 font-semibold">24h úteis</span></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-gradient-gold mb-4">Contato</h4>
              <div className="space-y-2">
                <a href="mailto:ogabrielempreendedor@gmail.com" className="text-yellow-400 hover:text-yellow-300 font-semibold block text-xs break-all transition-colors duration-300">
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
    </div>;
};
export default Index;
