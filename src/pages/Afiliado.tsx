
import { useState } from 'react';
import { toast } from 'sonner';
import { Users, TrendingUp, DollarSign, Target, CheckCircle, Star, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Link } from 'react-router-dom';

const Afiliado = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    experience: '',
    motivation: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      toast.success('Solicitação enviada! Entraremos em contato em breve! 🎉');
      setFormData({
        name: '',
        email: '',
        experience: '',
        motivation: ''
      });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Enhanced Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Animated geometric shapes */}
        <div className="absolute top-10 left-5 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-purple-600/5 rounded-full animate-float blur-xl"></div>
        <div className="absolute top-40 right-10 w-24 h-24 bg-gradient-to-br from-green-500/15 to-green-400/8 rounded-full animate-bounce-gentle blur-lg" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-blue-300/8 to-blue-500/12 rounded-full animate-pulse-slow blur-2xl"></div>
        <div className="absolute top-60 right-40 w-16 h-16 bg-gradient-to-br from-yellow-600/20 to-yellow-400/10 rounded-full animate-float blur-md" style={{animationDelay: '2s'}}></div>
        
        {/* Moving gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/3 via-transparent to-green-800/3 animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 p-6">
        <Link to="/" className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-bold transition-colors duration-300">
          <ArrowRight className="rotate-180" size={20} />
          Voltar ao Site
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Users className="text-purple-400" size={48} />
            <TrendingUp className="text-green-400" size={48} />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-gradient-gold drop-shadow-2xl">
            TORNE-SE NOSSO AFILIADO
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 font-bold mb-8 leading-relaxed">
            Ganhe <span className="text-green-400 font-black text-3xl">60% de comissão</span> divulgando produtos que realmente transformam vidas!
          </p>
          
          <div className="bg-gradient-to-br from-gray-900/70 to-black/70 backdrop-blur-sm p-8 rounded-2xl border border-yellow-400/20 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <DollarSign className="text-green-400 mx-auto mb-3" size={40} />
                <div className="text-2xl font-black text-green-400">60%</div>
                <div className="text-gray-300 font-bold">Comissão por Venda</div>
              </div>
              <div className="text-center">
                <Target className="text-purple-400 mx-auto mb-3" size={40} />
                <div className="text-2xl font-black text-purple-400">R$ 11,94</div>
                <div className="text-gray-300 font-bold">Por Cada Venda</div>
              </div>
              <div className="text-center">
                <Star className="text-yellow-400 mx-auto mb-3" size={40} />
                <div className="text-2xl font-black text-yellow-400">4.9⭐</div>
                <div className="text-gray-300 font-bold">Produto Avaliado</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-gradient-gold">
            VANTAGENS DE SER NOSSO AFILIADO
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <DollarSign className="text-green-400" size={32} />,
                title: "Comissões Altíssimas",
                description: "60% de comissão em cada venda - uma das maiores do mercado digital brasileiro"
              },
              {
                icon: <Target className="text-purple-400" size={32} />,
                title: "Produto Testado",
                description: "Produto com alta conversão e aprovação, facilitando suas vendas"
              },
              {
                icon: <Users className="text-blue-400" size={32} />,
                title: "Suporte Completo",
                description: "Material de divulgação pronto e suporte dedicado para afiliados"
              },
              {
                icon: <TrendingUp className="text-yellow-400" size={32} />,
                title: "Pagamentos Rápidos",
                description: "Receba suas comissões de forma rápida e segura através da Braip"
              },
              {
                icon: <CheckCircle className="text-green-400" size={32} />,
                title: "Sem Mensalidade",
                description: "Gratuito para se tornar afiliado, sem taxas ou custos escondidos"
              },
              {
                icon: <Star className="text-yellow-400" size={32} />,
                title: "Produto Premium",
                description: "Material de alta qualidade que realmente transforma a vida das pessoas"
              }
            ].map((benefit, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-900/70 to-black/70 backdrop-blur-sm border border-yellow-400/20 hover:scale-105 transition-transform duration-300 shadow-2xl">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-3">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-gradient-gold font-black">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 font-medium text-center">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-900/30 to-black/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-8 text-gradient-gold">
            PRONTO PARA COMEÇAR?
          </h2>
          
          <div className="bg-gradient-to-br from-gray-900/70 to-black/70 backdrop-blur-sm p-8 rounded-2xl border border-yellow-400/20 shadow-2xl mb-8">
            <p className="text-xl text-gray-300 font-bold mb-6">
              Clique no botão abaixo e se torne nosso afiliado agora mesmo!
            </p>
            
            <a 
              href="https://ev.braip.com/afiliados/convite/pro1vv47/use2128rk9" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/30 text-lg inline-block relative overflow-hidden"
            >
              <span className="relative z-10">💼 QUERO SER AFILIADO AGORA!</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] animate-shimmer"></div>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900/70 to-black/70 backdrop-blur-sm p-8 rounded-2xl border border-yellow-400/20 shadow-2xl">
            <h2 className="text-3xl font-black text-center mb-6 text-gradient-gold">
              DÚVIDAS SOBRE AFILIAÇÃO?
            </h2>
            <p className="text-center text-gray-300 font-semibold mb-8">
              Preencha o formulário abaixo e entraremos em contato!
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
                placeholder="Experiência com marketing digital (opcional)" 
                value={formData.experience}
                onChange={(e) => setFormData({...formData, experience: e.target.value})}
                className="bg-gray-800 border-yellow-400/30 text-white font-semibold shadow-2xl" 
                rows={3} 
              />
              <Textarea 
                placeholder="Por que quer ser nosso afiliado? (opcional)" 
                value={formData.motivation}
                onChange={(e) => setFormData({...formData, motivation: e.target.value})}
                className="bg-gray-800 border-yellow-400/30 text-white font-semibold shadow-2xl" 
                rows={3} 
              />
              <Button type="submit" className="btn-gold w-full shadow-2xl shadow-yellow-500/50 relative overflow-hidden">
                <span className="relative z-10">ENVIAR SOLICITAÇÃO 🚀</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] animate-shimmer"></div>
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-black border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 font-semibold">
            © 2025 Gabriel Alcântara - Empreendedor Digital. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Afiliado;
