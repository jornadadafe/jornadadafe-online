
import { ArrowLeft, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Contato = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 mb-8 font-bold">
          <ArrowLeft size={20} />
          Voltar para o início
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-gradient-gold mb-8 text-center">
            Entre em Contato
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="card-dark border-gradient-gold">
              <CardHeader>
                <CardTitle className="text-gradient-gold font-black flex items-center gap-3">
                  <Mail className="text-yellow-400" size={24} />
                  Email Principal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a 
                  href="mailto:ogabrielempreendedor@gmail.com"
                  className="text-yellow-400 hover:text-yellow-300 font-bold text-lg"
                >
                  ogabrielempreendedor@gmail.com
                </a>
                <p className="text-gray-300 font-semibold mt-2">
                  Para dúvidas sobre produtos, suporte técnico ou parcerias.
                </p>
              </CardContent>
            </Card>

            <Card className="card-dark border-gradient-gold">
              <CardHeader>
                <CardTitle className="text-gradient-gold font-black flex items-center gap-3">
                  <Clock className="text-yellow-400" size={24} />
                  Tempo de Resposta
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-yellow-400 font-bold text-lg mb-2">Até 24 horas úteis</p>
                <p className="text-gray-300 font-semibold">
                  Respondemos todos os emails de segunda a sexta, das 8h às 18h.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="card-dark p-8 rounded-2xl border-gradient-gold mb-8">
            <h2 className="text-2xl font-black text-gradient-gold mb-6">Como Podemos Ajudar?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-black text-yellow-400 mb-3">Suporte ao Produto</h3>
                <ul className="text-gray-300 font-semibold space-y-2">
                  <li>• Problemas no download</li>
                  <li>• Dificuldades no acesso</li>
                  <li>• Questões técnicas</li>
                  <li>• Solicitações de reembolso</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-black text-yellow-400 mb-3">Outros Assuntos</h3>
                <ul className="text-gray-300 font-semibold space-y-2">
                  <li>• Parcerias e colaborações</li>
                  <li>• Palestras e mentorias</li>
                  <li>• Sugestões de produtos</li>
                  <li>• Feedback sobre conteúdo</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card-dark p-8 rounded-2xl border-gradient-gold mb-8">
            <h2 className="text-2xl font-black text-gradient-gold mb-6">Antes de Entrar em Contato</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-black text-yellow-400 mb-2">Problemas com Download?</h3>
                <p className="text-gray-300 font-semibold">
                  Verifique sua caixa de spam primeiro. Nossos emails podem ser direcionados para lá automaticamente.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-black text-yellow-400 mb-2">Não Recebeu o Produto?</h3>
                <p className="text-gray-300 font-semibold">
                  O material é enviado imediatamente após a confirmação do pagamento. Se não recebeu, entre em contato conosco.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-black text-yellow-400 mb-2">Quer Solicitar Reembolso?</h3>
                <p className="text-gray-300 font-semibold">
                  Você tem 7 dias de garantia incondicional. Basta nos enviar um email solicitando o reembolso.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center card-dark p-8 rounded-2xl border-gradient-gold">
            <h2 className="text-2xl font-black text-gradient-gold mb-4">Redes Sociais</h2>
            <p className="text-gray-300 font-semibold mb-6">
              Acompanhe nosso conteúdo e fique por dentro das novidades
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-yellow-400 font-bold">
                @gabrielalcantara (em breve)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contato;
