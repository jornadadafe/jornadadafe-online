
import { ArrowLeft, FileText, User, Shield, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Termos = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 mb-8 font-bold">
          <ArrowLeft size={20} />
          Voltar para o início
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-gradient-gold mb-8 text-center">
            Termos de Uso
          </h1>

          <div className="card-dark p-6 rounded-2xl border-gradient-gold mb-8">
            <p className="text-gray-300 font-semibold text-center">
              <strong className="text-yellow-400">Última atualização:</strong> Janeiro de 2025
            </p>
          </div>

          <div className="space-y-8">
            <Card className="card-dark border-gradient-gold">
              <CardHeader>
                <CardTitle className="text-gradient-gold font-black flex items-center gap-3">
                  <FileText className="text-yellow-400" size={24} />
                  1. Aceitação dos Termos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 font-semibold">
                  Ao adquirir e utilizar o produto digital "Jornada de Fé - 30 Dias de Reflexões", você concorda automaticamente com todos os termos e condições descritos neste documento.
                </p>
                <p className="text-gray-300 font-semibold">
                  Se você não concorda com qualquer parte destes termos, não deve utilizar nosso produto ou serviços.
                </p>
              </CardContent>
            </Card>

            <Card className="card-dark border-gradient-gold">
              <CardHeader>
                <CardTitle className="text-gradient-gold font-black flex items-center gap-3">
                  <User className="text-yellow-400" size={24} />
                  2. Uso do Produto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-black text-green-400 mb-2">Uso Permitido:</h3>
                  <ul className="text-gray-300 font-semibold space-y-1 list-disc ml-6">
                    <li>Uso pessoal e familiar</li>
                    <li>Compartilhamento com familiares próximos</li>
                    <li>Presente para amigos e conhecidos</li>
                    <li>Uso em grupos de estudos bíblicos (citando a fonte)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-black text-red-400 mb-2">Uso Proibido:</h3>
                  <ul className="text-gray-300 font-semibold space-y-1 list-disc ml-6">
                    <li>Revenda ou comercialização</li>
                    <li>Distribuição em massa</li>
                    <li>Modificação do conteúdo original</li>
                    <li>Uso para fins comerciais sem autorização</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="card-dark border-gradient-gold">
              <CardHeader>
                <CardTitle className="text-gradient-gold font-black flex items-center gap-3">
                  <Shield className="text-yellow-400" size={24} />
                  3. Propriedade Intelectual
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 font-semibold">
                  Todo o conteúdo da "Jornada de Fé", incluindo textos, reflexões, desafios e layout, é de propriedade exclusiva de Gabriel Alcântara e está protegido por leis de direitos autorais.
                </p>
                <p className="text-gray-300 font-semibold">
                  Os versículos bíblicos utilizados são de domínio público, mas as reflexões e interpretações são originais e protegidas.
                </p>
              </CardContent>
            </Card>

            <Card className="card-dark border-gradient-gold">
              <CardHeader>
                <CardTitle className="text-gradient-gold font-black flex items-center gap-3">
                  <AlertTriangle className="text-yellow-400" size={24} />
                  4. Limitação de Responsabilidade
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 font-semibold">
                  O produto "Jornada de Fé" é oferecido como material de crescimento espiritual e desenvolvimento pessoal. Os resultados podem variar de pessoa para pessoa.
                </p>
                <p className="text-gray-300 font-semibold">
                  Não substituímos aconselhamento psicológico, psiquiátrico ou médico profissional. Em casos de depressão severa ou problemas de saúde mental, procure ajuda especializada.
                </p>
                <p className="text-gray-300 font-semibold">
                  O conteúdo religioso reflete convicções cristãs, mas respeitamos todas as denominações e credos.
                </p>
              </CardContent>
            </Card>

            <Card className="card-dark border-gradient-gold">
              <CardHeader>
                <CardTitle className="text-gradient-gold font-black">5. Entrega e Acesso</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 font-semibold">
                  O produto é entregue imediatamente após a confirmação do pagamento, através de link de download enviado por email.
                </p>
                <p className="text-gray-300 font-semibold">
                  O acesso ao material é vitalício, mas recomendamos fazer backup de seus arquivos.
                </p>
                <p className="text-gray-300 font-semibold">
                  Em caso de problemas técnicos na entrega, entre em contato conosco em até 48 horas.
                </p>
              </CardContent>
            </Card>

            <Card className="card-dark border-gradient-gold">
              <CardHeader>
                <CardTitle className="text-gradient-gold font-black">6. Política de Reembolso</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 font-semibold">
                  Oferecemos garantia incondicional de 7 dias a partir da data da compra.
                </p>
                <p className="text-gray-300 font-semibold">
                  Para solicitar reembolso, envie email para: 
                  <a href="mailto:ogabrielempreendedor@gmail.com" className="text-yellow-400 font-bold ml-1">
                    ogabrielempreendedor@gmail.com
                  </a>
                </p>
                <p className="text-gray-300 font-semibold">
                  Detalhes completos estão disponíveis em nossa Política de Reembolso.
                </p>
              </CardContent>
            </Card>

            <Card className="card-dark border-gradient-gold">
              <CardHeader>
                <CardTitle className="text-gradient-gold font-black">7. Privacidade e Dados</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 font-semibold">
                  Coletamos apenas informações necessárias para processar sua compra e entregar o produto.
                </p>
                <p className="text-gray-300 font-semibold">
                  Não compartilhamos seus dados pessoais com terceiros, exceto processadores de pagamento.
                </p>
                <p className="text-gray-300 font-semibold">
                  Podemos enviar emails relacionados ao produto ou ofertas similares, mas você pode cancelar a qualquer momento.
                </p>
              </CardContent>
            </Card>

            <Card className="card-dark border-gradient-gold">
              <CardHeader>
                <CardTitle className="text-gradient-gold font-black">8. Modificações nos Termos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 font-semibold">
                  Reservamos o direito de modificar estes termos a qualquer momento, com aviso prévio aos usuários.
                </p>
                <p className="text-gray-300 font-semibold">
                  Modificações não afetam compras já realizadas, apenas futuras aquisições.
                </p>
              </CardContent>
            </Card>

            <Card className="card-dark border-gradient-gold">
              <CardHeader>
                <CardTitle className="text-gradient-gold font-black">9. Contato e Suporte</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 font-semibold">
                  Para dúvidas sobre estes termos ou qualquer questão relacionada ao produto:
                </p>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <p className="text-yellow-400 font-bold">Email: ogabrielempreendedor@gmail.com</p>
                  <p className="text-gray-300 font-semibold">Tempo de resposta: até 24 horas úteis</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="card-dark p-8 rounded-2xl border-gradient-gold mt-8 text-center">
            <p className="text-gray-300 font-semibold mb-4">
              Ao prosseguir com a compra, você declara ter lido, compreendido e aceito todos os termos acima.
            </p>
            <p className="text-yellow-400 font-bold">
              Que Deus abençoe sua jornada de fé! 🙏
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Termos;
