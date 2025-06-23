
import { ArrowLeft, Shield, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PoliticaReembolso = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 mb-8 font-bold">
          <ArrowLeft size={20} />
          Voltar para o início
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-gradient-gold mb-8 text-center">
            Política de Reembolso
          </h1>

          <div className="card-dark p-8 rounded-2xl border-gradient-gold mb-8 text-center">
            <Shield className="text-green-400 mx-auto mb-4" size={64} />
            <h2 className="text-3xl font-black text-green-400 mb-4">GARANTIA DE 7 DIAS</h2>
            <p className="text-xl font-bold text-gray-300">
              100% do seu dinheiro de volta, sem perguntas, sem complicações!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card className="card-dark border-gradient-gold">
              <CardHeader>
                <CardTitle className="text-gradient-gold font-black flex items-center gap-3">
                  <Clock className="text-yellow-400" size={24} />
                  Prazo da Garantia
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 font-semibold">
                  <strong className="text-green-400">7 dias corridos</strong> a partir da data da compra para solicitar o reembolso.
                </p>
                <p className="text-gray-300 font-semibold">
                  Esse prazo é mais que suficiente para você testar todo o conteúdo e ver os primeiros resultados.
                </p>
              </CardContent>
            </Card>

            <Card className="card-dark border-gradient-gold">
              <CardHeader>
                <CardTitle className="text-gradient-gold font-black flex items-center gap-3">
                  <CheckCircle className="text-yellow-400" size={24} />
                  Como Solicitar
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 font-semibold">
                  Envie um email para: 
                  <a href="mailto:ogabrielempreendedor@gmail.com" className="text-yellow-400 font-bold ml-1">
                    ogabrielempreendedor@gmail.com
                  </a>
                </p>
                <p className="text-gray-300 font-semibold">
                  Com o assunto: "Solicitação de Reembolso - Jornada de Fé"
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="card-dark p-8 rounded-2xl border-gradient-gold mb-8">
            <h2 className="text-2xl font-black text-gradient-gold mb-6">Processo de Reembolso</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-black w-8 h-8 rounded-full flex items-center justify-center text-sm">1</div>
                <div>
                  <h3 className="text-lg font-black text-yellow-400 mb-2">Solicitação</h3>
                  <p className="text-gray-300 font-semibold">
                    Envie um email solicitando o reembolso dentro do prazo de 7 dias.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-black w-8 h-8 rounded-full flex items-center justify-center text-sm">2</div>
                <div>
                  <h3 className="text-lg font-black text-yellow-400 mb-2">Confirmação</h3>
                  <p className="text-gray-300 font-semibold">
                    Respondemos em até 24 horas confirmando o recebimento da solicitação.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-black w-8 h-8 rounded-full flex items-center justify-center text-sm">3</div>
                <div>
                  <h3 className="text-lg font-black text-yellow-400 mb-2">Processamento</h3>
                  <p className="text-gray-300 font-semibold">
                    O reembolso é processado em até 5 dias úteis após a confirmação.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-black w-8 h-8 rounded-full flex items-center justify-center text-sm">4</div>
                <div>
                  <h3 className="text-lg font-black text-yellow-400 mb-2">Estorno</h3>
                  <p className="text-gray-300 font-semibold">
                    O valor é estornado na mesma forma de pagamento utilizada na compra.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card-dark p-8 rounded-2xl border-gradient-gold mb-8">
            <h2 className="text-2xl font-black text-gradient-gold mb-6">Informações Importantes</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-black text-yellow-400 mb-2">Não Precisa Justificar</h3>
                <p className="text-gray-300 font-semibold">
                  Nossa garantia é incondicional. Você não precisa explicar o motivo do reembolso.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-black text-yellow-400 mb-2">Sem Taxas Adicionais</h3>
                <p className="text-gray-300 font-semibold">
                  Não cobramos nenhuma taxa para processar o reembolso. Você recebe 100% do valor pago.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-black text-yellow-400 mb-2">Tempo de Estorno</h3>
                <p className="text-gray-300 font-semibold">
                  Cartão de crédito: 1-2 faturas | PIX: até 5 dias úteis | Boleto: até 10 dias úteis
                </p>
              </div>
            </div>
          </div>

          <div className="card-dark p-8 rounded-2xl border-gradient-gold">
            <h2 className="text-2xl font-black text-gradient-gold mb-6">Por Que Oferecemos Esta Garantia?</h2>
            <p className="text-gray-300 font-semibold mb-4">
              Temos absoluta confiança na qualidade e no poder transformador da "Jornada de Fé". Esta garantia existe para que você se sinta completamente seguro em sua decisão de investir em sua vida espiritual.
            </p>
            <p className="text-gray-300 font-semibold mb-4">
              Acreditamos que quando você experimentar o conteúdo, sentirá a diferença em sua fé e vida espiritual. Mas caso isso não aconteça, queremos que você saiba que seu investimento está 100% protegido.
            </p>
            <p className="text-yellow-400 font-bold text-center">
              Você não tem nada a perder, apenas uma vida espiritual transformada para ganhar! 🙏
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoliticaReembolso;
