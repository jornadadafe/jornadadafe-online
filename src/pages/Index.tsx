import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { ArrowDown, Shield, Star, Clock, Heart, Gift, CheckCircle, XCircle, Mail, Phone, MapPin, AlertTriangle, Users, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Link } from 'react-router-dom';

const Index = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 10,
    seconds: 0
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    suggestion: ''
  });
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const totalSeconds = prev.hours * 3600 + prev.minutes * 60 + prev.seconds;
        if (totalSeconds <= 0) {
          return {
            hours: 0,
            minutes: 0,
            seconds: 0
          };
        }
        const newTotalSeconds = totalSeconds - 1;
        const hours = Math.floor(newTotalSeconds / 3600);
        const minutes = Math.floor(newTotalSeconds % 3600 / 60);
        const seconds = newTotalSeconds % 60;
        return {
          hours,
          minutes,
          seconds
        };
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
  return <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 text-white overflow-x-hidden relative">
      {/* Brighter Enhanced Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Brighter animated geometric shapes with more opacity */}
        <div className="absolute top-10 left-5 w-32 h-32 bg-gradient-to-br from-yellow-400/25 to-yellow-600/20 rounded-full animate-float blur-xl"></div>
        <div className="absolute top-40 right-10 w-24 h-24 bg-gradient-to-br from-yellow-500/30 to-yellow-400/23 rounded-full animate-bounce-gentle blur-lg" style={{
        animationDelay: '1s'
      }}></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-yellow-300/23 to-yellow-500/25 rounded-full animate-pulse-slow blur-2xl"></div>
        <div className="absolute top-60 right-40 w-16 h-16 bg-gradient-to-br from-yellow-600/35 to-yellow-400/27 rounded-full animate-float blur-md" style={{
        animationDelay: '2s'
      }}></div>
        <div className="absolute bottom-40 right-5 w-28 h-28 bg-gradient-to-br from-yellow-500/25 to-yellow-300/23 rounded-full animate-bounce-gentle blur-xl" style={{
        animationDelay: '3s'
      }}></div>
        
        {/* Brighter light rays */}
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-yellow-400/35 via-yellow-300/15 to-transparent animate-pulse-slow" style={{
        animationDelay: '0.5s'
      }}></div>
        <div className="absolute top-0 right-1/3 w-0.5 h-full bg-gradient-to-b from-yellow-300/30 via-yellow-200/13 to-transparent animate-pulse-slow" style={{
        animationDelay: '1.5s'
      }}></div>
        <div className="absolute top-0 left-2/3 w-0.5 h-full bg-gradient-to-b from-yellow-500/25 via-yellow-400/11 to-transparent animate-pulse-slow" style={{
        animationDelay: '2.5s'
      }}></div>
        
        {/* Brighter flowing gradient waves */}
        <div className="absolute top-20 left-0 w-full h-32 bg-gradient-to-r from-transparent via-yellow-400/17 to-transparent transform rotate-12 animate-pulse-slow"></div>
        <div className="absolute bottom-40 right-0 w-full h-24 bg-gradient-to-l from-transparent via-yellow-300/15 to-transparent transform -rotate-6 animate-pulse-slow" style={{
        animationDelay: '2s'
      }}></div>
        
        {/* Enhanced grid pattern overlay with more visibility */}
        <div className="absolute inset-0 opacity-[0.08]" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(251, 191, 36, 0.7) 1px, transparent 0)',
        backgroundSize: '50px 50px'
      }}></div>
        
        {/* Brighter moving gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/8 via-transparent to-yellow-800/7 animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-yellow-700/6 to-transparent animate-pulse-slow" style={{
        animationDelay: '1s'
      }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-800/70 via-transparent to-transparent"></div>
        
        {/* More visible particle effects */}
        <div className="absolute top-32 right-16 w-3 h-3 bg-yellow-400/45 rounded-full animate-pulse" style={{
        animationDelay: '1.5s'
      }}></div>
        <div className="absolute bottom-32 left-12 w-2 h-2 bg-yellow-300/50 rounded-full animate-pulse" style={{
        animationDelay: '2.5s'
      }}></div>
        <div className="absolute top-96 left-1/4 w-2.5 h-2.5 bg-yellow-500/40 rounded-full animate-pulse" style={{
        animationDelay: '3.5s'
      }}></div>
        
        {/* Additional ambient lighting */}
        <div className="absolute top-1/4 left-1/2 w-96 h-96 bg-gradient-radial from-yellow-400/10 to-transparent rounded-full blur-3xl animate-pulse-slow transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-radial from-yellow-300/8 to-transparent rounded-full blur-2xl animate-pulse-slow" style={{
        animationDelay: '2s'
      }}></div>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 py-8 relative z-10">
        {/* Enhanced Instability Notice */}
        <div className="flex items-center gap-3 bg-red-900/40 border border-red-500/60 text-red-200 px-6 py-4 rounded-xl mb-6 text-sm font-bold transition-all duration-300 hover:bg-red-900/50 animate-pulse-glow max-w-lg text-center shadow-2xl backdrop-blur-sm">
          <div>
            <div className="font-black text-red-100 text-lg">⚠️ PÁGINA INSTÁVEL</div>
            <div className="text-sm text-red-200 leading-relaxed">Alto tráfego pode derrubar a página e você perder esta oferta exclusiva! Não saia desta página.</div>
          </div>
        </div>

        {/* Enhanced Timer */}
        <div className="flex gap-4 mb-8">
          <div className="bg-gradient-to-br from-red-600 to-red-800 p-4 rounded-xl text-center min-w-[70px] border border-red-400/60 shadow-2xl transition-transform duration-300 hover:scale-105 backdrop-blur-sm">
            <div className="text-2xl font-black text-white">{String(timeLeft.hours).padStart(2, '0')}</div>
            <div className="text-xs font-bold text-red-200">HORAS</div>
          </div>
          <div className="bg-gradient-to-br from-red-600 to-red-800 p-4 rounded-xl text-center min-w-[70px] border border-red-400/60 shadow-2xl transition-transform duration-300 hover:scale-105 backdrop-blur-sm">
            <div className="text-2xl font-black text-white">{String(timeLeft.minutes).padStart(2, '0')}</div>
            <div className="text-xs font-bold text-red-200">MIN</div>
          </div>
          <div className="bg-gradient-to-br from-red-600 to-red-800 p-4 rounded-xl text-center min-w-[70px] border border-red-400/60 shadow-2xl transition-transform duration-300 hover:scale-105 backdrop-blur-sm">
            <div className="text-2xl font-black text-white">{String(timeLeft.seconds).padStart(2, '0')}</div>
            <div className="text-xs font-bold text-red-200">SEG</div>
          </div>
        </div>

        {/* Enhanced Headline */}
        <div className="text-center mb-8">
          <h2 className="text-lg md:text-xl font-semibold text-yellow-400 mb-4 transition-all duration-500 animate-fade-in-scale">
            Como está sua fé hoje?
          </h2>
          <div className="relative">
            <div className="mb-4">
              <h3 className="text-base md:text-lg font-bold text-gray-300 mb-1 transition-all duration-500 tracking-wide animate-slide-in-up">
                🙏 Descubra o poder transformador da
              </h3>
              <div className="w-16 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-2 animate-shimmer"></div>
            </div>
            <h1 className="text-3xl md:text-5xl font-black mb-4 leading-tight relative z-10 transition-all duration-700 animate-fade-in-scale">
              <span className="text-gradient-gold block drop-shadow-2xl text-shadow-gold">JORNADA DE FÉ</span>
              <span className="text-gradient-gold block drop-shadow-2xl text-shadow-gold">30 DIAS DE REFLEXÕES</span>
            </h1>
          </div>
        </div>

        {/* Enhanced Product Image with Reduced Effects */}
        <div className="relative mb-8 perspective-1000">
          <div className="absolute -top-2 -right-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-2 rounded-lg text-sm font-bold z-10 animate-bounce-gentle shadow-2xl border border-green-300/60 transition-all duration-300 backdrop-blur-sm">
            🏆 Mais Vendido
          </div>
          <div className="relative transform transition-all duration-700 hover:scale-105 book-3d card-hover-effect">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/12 via-yellow-500/14 to-yellow-600/12 rounded-2xl blur-xl animate-glow-pulse -m-3"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/10 via-transparent to-yellow-500/10 rounded-2xl blur-lg animate-pulse-slow -m-1.5"></div>
            <div className="relative bg-gradient-to-br from-gray-800 to-black p-4 rounded-2xl shadow-2xl border border-yellow-400/60 transition-all duration-700 hover:border-yellow-400/90 backdrop-blur-professional">
              <img src="/lovable-uploads/7796e9e4-42e2-4337-b8e9-3a1b60c906f1.png" alt="Jornada de Fé - 30 Dias de Reflexões" className="w-[300px] h-[400px] md:w-[400px] md:h-[520px] object-cover rounded-xl shadow-inner transition-all duration-700 hover:shadow-glow" />
              <div className="absolute inset-4 bg-gradient-to-t from-black/40 via-transparent to-yellow-400/15 rounded-xl pointer-events-none"></div>
              <div className="absolute inset-4 border border-yellow-400/20 rounded-xl pointer-events-none animate-pulse-slow"></div>
            </div>
          </div>
        </div>

        {/* Enhanced CTA Button */}
        <button onClick={scrollTo30Days} className="button-professional bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-500/30 text-lg mb-8 max-w-sm relative overflow-hidden backdrop-blur-sm">
          <span className="relative z-10">🙏 Iniciar Minha Jornada</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] animate-shimmer"></div>
        </button>

        {/* Enhanced Animated Arrow */}
        <ArrowDown className="text-yellow-400 animate-bounce-gentle drop-shadow-2xl transition-all duration-300 hover:scale-110 hover:text-yellow-300" size={32} />
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-gradient-gold drop-shadow-2xl transition-all duration-700 text-shadow-gold animate-fade-in-scale">
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
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-full blur-xl animate-pulse-glow"></div>
            <img src="/lovable-uploads/da2a4bc8-a689-4bbb-9088-33249e6d3775.png" alt="Gabriel Alcântara" className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-yellow-400 mx-auto object-cover shadow-2xl transition-transform duration-500 hover:scale-105 card-hover-effect" />
            <div className="absolute -top-1 -right-1 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-2 py-1 rounded-full text-xs font-semibold shadow-lg transition-all duration-300 backdrop-blur-sm">
              +3 Anos
            </div>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-black text-gradient-gold mb-2 drop-shadow-2xl transition-all duration-500 text-shadow-gold">Gabriel Alcântara</h3>
          <p className="text-lg font-semibold text-gray-300 mb-6">Mentor, Palestrante e Especialista em Transformação</p>
          
          <div className="max-w-2xl mx-auto space-y-4 mb-8 font-serif text-gray-300">
            <p className="leading-relaxed text-base">
              Gabriel Alcântara é mentor, palestrante e especialista em comunicação, performance e mentalidade empreendedora. Ao longo dos anos, tem ajudado pessoas e negócios a se transformarem por meio de técnicas precisas, foco estratégico e uma linguagem que gera ação imediata.
            </p>
            <p className="leading-relaxed text-base">
              Este conteúdo foi criado com base em pesquisa, experiências reais e foco no que dá resultado, sem enrolação e sem pressão desnecessária. Como cristão, Gabriel acredita que a fé é o alicerce de toda transformação verdadeira, e que independente da religião, fortalecer nossa espiritualidade nos torna pessoas melhores.
            </p>
          </div>

          {/* Stats and Blockquote */}
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
          }].map((module, index) => <Card key={index} className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm border border-yellow-400/20 hover:scale-105 transition-transform duration-300 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-gradient-gold font-black">{module.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {module.items.map((item, idx) => <li key={idx} className="flex items-center gap-2 font-semibold text-gray-300">
                        <Star className="text-yellow-400" size={16} />
                        {item}
                      </li>)}
                  </ul>
                </CardContent>
              </Card>)}
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

      {/* WhatsApp Testimonials Section - Smaller */}
      <section className="py-12 px-4 relative bg-gradient-to-br from-gray-900/10 to-black/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl md:text-2xl font-black text-center mb-8 text-gradient-gold drop-shadow-2xl">
            CONVERSAS REAIS NO WHATSAPP
          </h2>
          <p className="text-center text-gray-300 font-semibold mb-6 text-sm">
            Veja o que nossos clientes estão falando sobre a transformação
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* WhatsApp Conversation 1 - Ana - 40% smaller */}
            <div className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm p-3 rounded-xl border border-yellow-400/20 shadow-xl hover:scale-105 transition-all duration-500 card-hover-effect">
              <div className="bg-green-600 text-white p-2 rounded-t-lg mb-2">
                <div className="flex items-center gap-2">
                  <img src="/lovable-uploads/18fa3d03-d726-4cc3-93ce-982e7cec3edc.jpg" alt="Ana Costa" className="w-6 h-6 rounded-full border border-white" />
                  <div>
                    <h4 className="font-bold text-white text-xs">Ana Costa</h4>
                    <p className="text-xs text-green-100">online</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-1 p-2">
                <div className="bg-green-500 text-white p-2 rounded-lg rounded-br-sm max-w-[80%] ml-auto">
                  <p className="text-xs">Gabriel, queria te agradecer! 🙏</p>
                  <span className="text-xs opacity-70">14:32</span>
                </div>
                
                <div className="bg-green-500 text-white p-2 rounded-lg rounded-br-sm max-w-[80%] ml-auto">
                  <p className="text-xs">Em apenas 15 dias senti uma paz que não tinha há anos. Minha família toda notou a diferença!</p>
                  <span className="text-xs opacity-70">14:33</span>
                </div>
                
                <div className="bg-gray-600 text-white p-2 rounded-lg rounded-bl-sm max-w-[80%]">
                  <p className="text-xs">Que bênção Ana! Deus é fiel 🙌</p>
                  <span className="text-xs opacity-70">14:35</span>
                </div>
                
                <div className="bg-green-500 text-white p-2 rounded-lg rounded-br-sm max-w-[80%] ml-auto">
                  <p className="text-xs">Este material realmente funciona! Vou recomendar para toda minha igreja ⛪</p>
                  <span className="text-xs opacity-70">14:36</span>
                </div>
              </div>
              
              <div className="mt-2 text-center">
                <div className="text-yellow-400 text-xs font-bold">✅ Cliente Verificado • Compra em Nov/2024</div>
              </div>
            </div>

            {/* WhatsApp Conversation 2 - Carlos - 40% smaller */}
            <div className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm p-3 rounded-xl border border-yellow-400/20 shadow-xl hover:scale-105 transition-all duration-500 card-hover-effect">
              <div className="bg-green-600 text-white p-2 rounded-t-lg mb-2">
                <div className="flex items-center gap-2">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face&auto=format" alt="Carlos Silva" className="w-6 h-6 rounded-full border border-white object-cover" />
                  <div>
                    <h4 className="font-bold text-white text-xs">Carlos Silva</h4>
                    <p className="text-xs text-green-100">online</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-1 p-2">
                <div className="bg-green-500 text-white p-2 rounded-lg rounded-br-sm max-w-[80%] ml-auto">
                  <p className="text-xs">Cara, eu era cético sobre essas coisas... 🤔</p>
                  <span className="text-xs opacity-70">09:15</span>
                </div>
                
                <div className="bg-green-500 text-white p-2 rounded-lg rounded-br-sm max-w-[80%] ml-auto">
                  <p className="text-xs">Mas depois de 20 dias, minha ansiedade diminuiu MUITO. Durmo melhor e me sinto mais conectado espiritualmente</p>
                  <span className="text-xs opacity-70">09:16</span>
                </div>
                
                <div className="bg-gray-600 text-white p-2 rounded-lg rounded-bl-sm max-w-[80%]">
                  <p className="text-xs">Deus sempre surpreende! 🙏</p>
                  <span className="text-xs opacity-70">09:18</span>
                </div>
                
                <div className="bg-green-500 text-white p-2 rounded-lg rounded-br-sm max-w-[80%] ml-auto">
                  <p className="text-xs">Valeu demais o investimento. Minha esposa também quer fazer! 👫</p>
                  <span className="text-xs opacity-70">09:19</span>
                </div>
              </div>
              
              <div className="mt-2 text-center">
                <div className="text-yellow-400 text-xs font-bold">✅ Cliente Verificado • Compra em Dez/2024</div>
              </div>
            </div>

            {/* WhatsApp Conversation 3 - Fernanda - 40% smaller */}
            <div className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm p-3 rounded-xl border border-yellow-400/20 shadow-xl hover:scale-105 transition-all duration-500 card-hover-effect">
              <div className="bg-green-600 text-white p-2 rounded-t-lg mb-2">
                <div className="flex items-center gap-2">
                  <img alt="Fernanda Lima" className="w-6 h-6 rounded-full border border-white object-cover" src="/lovable-uploads/0bb92a5b-3eef-4414-b2b6-c2106ce71d9e.jpg" />
                  <div>
                    <h4 className="font-bold text-white text-xs">Fernanda Lima</h4>
                    <p className="text-xs text-green-100">online</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-1 p-2">
                <div className="bg-green-500 text-white p-2 rounded-lg rounded-br-sm max-w-[80%] ml-auto">
                  <p className="text-xs">Gabriel!! 😍</p>
                  <span className="text-xs opacity-70">16:42</span>
                </div>
                
                <div className="bg-green-500 text-white p-2 rounded-lg rounded-br-sm max-w-[80%] ml-auto">
                  <p className="text-xs">Comprei pensando "mais um livro religioso"... Que surpresa!</p>
                  <span className="text-xs opacity-70">16:43</span>
                </div>
                
                <div className="bg-green-500 text-white p-2 rounded-lg rounded-br-sm max-w-[80%] ml-auto">
                  <p className="text-xs">Os desafios são simples mas PODEROSOS. Meu casamento melhorou, minha relação com Deus também! 💑✨</p>
                  <span className="text-xs opacity-70">16:44</span>
                </div>
                
                <div className="bg-gray-600 text-white p-2 rounded-lg rounded-bl-sm max-w-[80%]">
                  <p className="text-xs">Glória a Deus! ✨🙌</p>
                  <span className="text-xs opacity-70">16:46</span>
                </div>
                
                <div className="bg-green-500 text-white p-2 rounded-lg rounded-br-sm max-w-[80%] ml-auto">
                  <p className="text-xs">Já recomendei para 5 amigas! 👭</p>
                  <span className="text-xs opacity-70">16:47</span>
                </div>
              </div>
              
              <div className="mt-2 text-center">
                <div className="text-yellow-400 text-xs font-bold">✅ Cliente Verificada • Compra em Dez/2024</div>
              </div>
            </div>
          </div>

          {/* Social Proof Stats - Smaller */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
            <div className="text-center bg-gradient-to-br from-gray-900/70 to-black/70 backdrop-blur-sm p-3 rounded-lg border border-yellow-400/20 shadow-xl card-hover-effect">
              <div className="text-xl font-black text-gradient-gold mb-1">1,000+</div>
              <div className="text-gray-300 font-bold text-xs">Vidas Transformadas</div>
            </div>
            <div className="text-center bg-gradient-to-br from-gray-900/70 to-black/70 backdrop-blur-sm p-3 rounded-lg border border-yellow-400/20 shadow-xl card-hover-effect">
              <div className="text-xl font-black text-gradient-gold mb-1">4.9⭐</div>
              <div className="text-gray-300 font-bold text-xs">Avaliação Média</div>
            </div>
            <div className="text-center bg-gradient-to-br from-gray-900/70 to-black/70 backdrop-blur-sm p-3 rounded-lg border border-yellow-400/20 shadow-xl card-hover-effect">
              <div className="text-xl font-black text-gradient-gold mb-1">98%</div>
              <div className="text-gray-300 font-bold text-xs">Recomendam</div>
            </div>
            <div className="text-center bg-gradient-to-br from-gray-900/70 to-black/70 backdrop-blur-sm p-3 rounded-lg border border-yellow-400/20 shadow-xl card-hover-effect">
              <div className="text-xl font-black text-gradient-gold mb-1">30</div>
              <div className="text-gray-300 font-bold text-xs">Dias de Conteúdo</div>
            </div>
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
          }].map((bonus, index) => <Card key={index} className="bg-gradient-to-br from-gray-900/70 to-black/70 backdrop-blur-sm border border-yellow-400/20 hover:scale-105 transition-all duration-500 shadow-2xl">
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
              </Card>)}
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
              <div className="text-gray-400 line-through text-2xl mb-2">De R$ 277,90</div>
              <div className="text-5xl md:text-6xl font-black text-gradient-gold mb-4 drop-shadow-2xl transition-all duration-700">R$ 39,90</div>
              <div className="text-xl font-bold text-green-400">Economia de R$ 238,00 (86% OFF)</div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="https://pay.braip.co/checkout/plaqd0wj/chevo0qd" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-500/25 block text-center relative overflow-hidden">
                <span className="relative z-10">💳 CARTÃO (3x R$ 13,30)</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] animate-shimmer"></div>
              </a>
              <a href="https://pay.braip.co/checkout/plaqd0wj/chevo0qd" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 block text-center shadow-lg shadow-green-500/25 relative overflow-hidden">
                <span className="relative z-10">🔷 PIX (R$ 39,90)</span>
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

      {/* Enhanced Affiliate Proposal Section - SIMPLIFIED */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-900/30 to-blue-900/30 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm p-8 rounded-2xl border border-purple-400/40 shadow-2xl transition-all duration-500 card-hover-effect">
            
            
            <h2 className="text-3xl md:text-4xl font-black text-center mb-6 text-gradient-gold drop-shadow-2xl text-shadow-gold"> TRANSFORME SUA PAIXÃO EM RENDA EXTRA!</h2>
            
            <p className="text-xl font-bold text-gray-300 mb-4 leading-relaxed">
              Você acredita no poder transformador da fé? Então por que não ajudar outras pessoas e ainda ganhar por isso?
            </p>
            
            <p className="text-lg font-semibold text-gray-300 mb-6 leading-relaxed">
              Como nosso afiliado, você ganha <span className="text-green-400 font-black text-2xl">60% de comissão</span> em cada venda! 
              Isso significa <span className="text-yellow-400 font-black">R$ 23,94</span> para cada pessoa que você ajudar a transformar sua vida espiritual.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/40 p-6 rounded-xl border border-purple-400/30 transition-transform duration-300 hover:scale-105">
                <div className="text-4xl mb-3">💰</div>
                <div className="font-bold text-purple-300 text-lg mb-2">Comissões Altas</div>
                <div className="text-gray-300">60% por venda = R$ 23,94</div>
              </div>
              <div className="bg-gradient-to-br from-green-900/40 to-green-800/40 p-6 rounded-xl border border-green-400/30 transition-transform duration-300 hover:scale-105">
                <div className="text-4xl mb-3">🎯</div>
                <div className="font-bold text-green-300 text-lg mb-2">Material Pronto</div>
                <div className="text-gray-300">Banners, textos e estratégias</div>
              </div>
              <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/40 p-6 rounded-xl border border-blue-400/30 transition-transform duration-300 hover:scale-105">
                <div className="text-4xl mb-3">⚡</div>
                <div className="font-bold text-blue-300 text-lg mb-2">Pagamento Rápido</div>
                <div className="text-gray-300">Receba em até 7 dias úteis</div>
              </div>
            </div>

            
            
            <a href="https://ev.braip.com/afiliados/convite/pro1vv47/use2128rk9" target="_blank" rel="noopener noreferrer" className="button-professional bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/30 text-lg inline-block relative overflow-hidden backdrop-blur-sm mb-4">
              <span className="relative z-10">💼 QUERO SER AFILIADO AGORA!</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] animate-shimmer"></div>
            </a>
            
            <p className="text-sm text-gray-400 font-semibold">
              ⏱️ Cadastro gratuito • Aprovação em até 24h • Suporte completo
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-12 px-4 bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          {/* Affiliate Link in Footer */}
          <div className="text-center mb-8">
            
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-black text-gradient-gold mb-4">Links Úteis</h4>
              <ul className="space-y-2">
                <li><Link to="/sobre" className="text-gray-400 hover:text-yellow-400 font-semibold transition-colors duration-300">Sobre</Link></li>
                <li><Link to="/contato" className="text-gray-400 hover:text-yellow-400 font-semibold transition-colors duration-300">Contato</Link></li>
                <li><a href="https://ev.braip.com/afiliados/convite/pro1vv47/use2128rk9" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 font-semibold transition-colors duration-300">Torne-se um Afiliado</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-gradient-gold mb-4">Política</h4>
              <ul className="space-y-2">
                <li><Link to="/politica-reembolso" className="text-gray-400 hover:text-yellow-400 font-semibold transition-colors duration-300">Reembolso</Link></li>
                <li><Link to="/termos" className="text-gray-400 hover:text-yellow-400 font-semibold transition-colors duration-300">Termos</Link></li>
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
