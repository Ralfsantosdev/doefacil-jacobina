import React, { useState } from 'react';
import {
  HeartHandshake,
  MapPin,
  Phone,
  Clock,
  Camera,
  Share2,
  MessageSquare,
  CheckCircle2,
  Users,
  Layers,
  Send,
  Instagram,
  Facebook,
  Navigation,
  Sparkles,
  Globe,
  Copy,
  Check
} from 'lucide-react';

export default function App() {
  const [fidelidade, setFidelidade] = useState('alta'); // 'baixa' | 'alta'
  const [abaAtiva, setAbaAtiva] = useState('campanhas');
  const [pixCopiado, setPixCopiado] = useState(false);

  // Estado dos itens urgentes (Coordenação + Mecanismo de Percepção M3C)
  const [itens, setItens] = useState([
    {
      id: 1,
      nome: 'Fraldas Geriátricas (G e XG)',
      categoria: 'Higiene',
      atual: 34,
      meta: 50,
      unidade: 'pacotes',
      urgencia: 'Crítica'
    },
    {
      id: 2,
      nome: 'Leite Integral (Caixa 1L)',
      categoria: 'Alimentação',
      atual: 68,
      meta: 100,
      unidade: 'litros',
      urgencia: 'Alta'
    },
    {
      id: 3,
      nome: 'Sabonete Líquido e Lenços Umedecidos',
      categoria: 'Higiene',
      atual: 18,
      meta: 40,
      unidade: 'unidades',
      urgencia: 'Média'
    },
    {
      id: 4,
      nome: 'Arroz, Feijão e Café',
      categoria: 'Alimentação',
      atual: 42,
      meta: 60,
      unidade: 'kg',
      urgencia: 'Alta'
    }
  ]);

  // Mural de Comunicação (Pilar 1 M3C)
  const [mensagens, setMensagens] = useState([
    {
      id: 1,
      autor: 'Coordenação Lar Cruzada do Bem',
      cargo: 'Equipe Interna',
      texto: 'Estamos com necessidade urgente de fraldas geriátricas tamanho XG para esta semana. Agradecemos a todos!',
      hora: 'Hoje, 09:15'
    },
    {
      id: 2,
      autor: 'Mariana Souza',
      cargo: 'Doadora Voluntária',
      texto: 'Acabei de confirmar a entrega de 4 pacotes de fraldas G e 12 caixas de leite hoje às 14h30!',
      hora: 'Hoje, 10:40'
    }
  ]);
  const [novaMensagem, setNovaMensagem] = useState('');

  // Formulário de Contato / Agendamento
  const [contato, setContato] = useState({ nome: '', telefone: '', tipo: 'Entrega de Doação', mensagem: '' });
  const [contatoEnviado, setContatoEnviado] = useState(false);

  const registrarDoacao = (id) => {
    setItens((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, atual: Math.min(item.meta, item.atual + 1) } : item
      )
    );
  };

  const enviarMensagemMural = (e) => {
    e.preventDefault();
    if (!novaMensagem.trim()) return;
    setMensagens([
      {
        id: Date.now(),
        autor: 'Visitante / Doador',
        cargo: 'Comunidade Jacobina',
        texto: novaMensagem,
        hora: 'Agora'
      },
      ...mensagens
    ]);
    setNovaMensagem('');
  };

  const enviarContato = (e) => {
    e.preventDefault();
    setContatoEnviado(true);
    setTimeout(() => {
      setContatoEnviado(false);
      setContato({ nome: '', telefone: '', tipo: 'Entrega de Doação', mensagem: '' });
    }, 4000);
  };

  const copiarPix = () => {
    navigator.clipboard.writeText('cruzadadobem@gmai.com');
    setPixCopiado(true);
    setTimeout(() => setPixCopiado(false), 3000);
  };

  const compartilharWhatsApp = () => {
    const texto = encodeURIComponent(
      'Olá! Conheça o DoeFácil Jacobina e ajude o Lar do Idoso Cruzada do Bem (Rua da Fraternidade, 254 - Félix Tomaz). Veja os itens mais urgentes no portal: https://doefacil-jacobina.vercel.app/'
    );
    window.open(`https://wa.me/?text=${texto}`, '_blank');
  };

  const isLowFi = fidelidade === 'baixa';

  // Fotos reais extraídas da página institucional do Lar do Idoso Cruzada do Bem
  const galeriaFotos = [
    {
      titulo: 'Desfile de 7 de Setembro em Jacobina',
      descricao: 'Participação especial dos residentes e equipe do Lar do Idoso Cruzada do Bem nas celebrações cívicas da cidade.',
      imagem: 'https://sites.google.com/sitesv-images-rt/APXyLQcyiPDCnFGSmrZE8drefiM8ATPc9TxKiZ0TLy_G4e4B0BIVPhM-IvFOONXlxW1NT7nM_EUf69Gne87HTsvxmjAGsQIh4KzgP8hIhxEEj_gBN8wlbs6Do4VZg1rGpstdG3elNo7f_c_dH9lvr-1Dl8po-GpR57FZzeNHP1yCyqCb8v1eIXJxQ8NO2Okio7Ois-cOOZxd7fmXNuDV3MPMzNkJkYJLRGTCPgASEBIj=w1280',
      data: 'Setembro/2025'
    },
    {
      titulo: 'Visita do Clube da Fraternidade',
      descricao: 'Momento de confraternização, apoio comunitário e entrega de doações realizada pelo Clube da Fraternidade.',
      imagem: 'https://sites.google.com/sitesv-images-rt/APXyLQfg2P0EozimrjBEaZh5zJu5uV2-RYA-70O70_KBkVLVRMGlYpw7WIPs0zKXPHt6ZV5lggoWU1NVCXV7yMc07FNjIsVZW8tCHlZE0PUcPsKGCNLDbkGTIWeZN6nK7rgVoDX66je-txO2DHToqkYxUs-mbaKbiuMXb5KY-ggrQrIgvWDlvvCIkqHEj_k0Iuf97U1PKIjxXLupBSs80CP-N6G5OozTJMKeRfNT3GFP0R8=w1280',
      data: 'Setembro/2025'
    },
    {
      titulo: 'Projeto de Mobilidade e Dança',
      descricao: 'Atividades físicas, expressão corporal e estímulo motor promovidos com os idosos acolhidos pela instituição.',
      imagem: 'https://sites.google.com/sitesv-images-rt/APXyLQdUgmSp4kgky2uht20nF33XIs8mOjY6BU01_Y7RBtiSdq0ELHn4Z0aPUUAXwA9tUbuOqRc8snFgKnqyFR9gr4bkwc7oKModkda5H_SQoDpDG4p0E9H1Zco_hAk6cZzKcTZmN7prEeo1N8s6zCzWzn62Ttx1sZQezl3QumEjwqqVBNX7QZBbut8nWWrVtlGaKBsWF3OVFxhU8WfLpYUtIeUQo3V2eS5Rrx7BaKU9=w1280',
      data: 'Setembro/2025'
    },
    {
      titulo: 'Visita dos Estudantes do CETEP Piemonte da Diamantina II',
      descricao: 'Integração intergeracional e ações solidárias desenvolvidas pelos estudantes de Jacobina junto aos moradores.',
      imagem: 'https://sites.google.com/sitesv-images-rt/APXyLQdaXmlVo3BYBO0EGJRE6vZfbQVIAf51-HDu4ENDX-RymMF5RJOTtpMOTbuULX6XSYtEovD8E_Dypn2m0kQSdZeg5_GySGhpbcxD5rvORj7zQKaRjLmZH4PPVk9AKK4m-nzMy5Yu-l6jS-9lS1hFXPYKsxdJfcYIT2kZCAA6LPBCZnc6NnolZB5D8zFLKZd0WTvkidOlbZDJsgREzeosvT_o7ySkbOHi8pEfdCnn0RE=w1280',
      data: 'Outubro/2025'
    },
    {
      titulo: 'Oficina de Mobilidade com Ivan',
      descricao: 'Acompanhamento funcional e exercícios de bem-estar realizados na área de convivência do Lar.',
      imagem: 'https://sites.google.com/sitesv-images-rt/APXyLQdw8SzfW2Ubf7O0Cbg-zCTt6fKZ9huxvOwHFgicYmty0BuQTy5k88AMkbYq7VYx0xIftbkfxzMTtpfZPYTWhd3UDFRTJJL3Axo9Cs92WPVqk6LCsYkFZvihXDqWSUDCsjiowoJStZoiMveZgpZDyRrVTlcmQfy4eBYdVKDt5vX0OM3ZyUWXM6ojQ2Ip98uFoWiExSBL3UItxBV5UACIN9NabSsOcsSVvFBnrV0_tco=w1280',
      data: 'Outubro/2025'
    },
    {
      titulo: 'Oficina de Artesanato e Expressão Corporal',
      descricao: 'Atividades artísticas e terapêuticas que fortalecem a autonomia, memória e alegria dos residentes.',
      imagem: 'https://sites.google.com/sitesv-images-rt/APXyLQco7vfAfk_6gSUqp5KdpTEg6zgd-NkctyCefDKqhwxeI8_-L0hKtUdUtQX0Bt-VvMr0gDSlur5KIZr_aA7Scuw2-BpL3DxrAqemoNLfnjG0nY2ZgKnH0PQhYF7OcYItWZZzVJ6dtvEut5zTGWIDlzrqj3Ikvvza8n_KrPlaj1DULekQ_7n5PIvjfiNTqmdMfjZwPyX1navJYaWxrq_3AlKh-yDHiYkwKo6j7iFdcmI=w1280',
      data: 'Outubro/2025'
    }
  ];

  return (
    <div className={`min-h-screen transition-colors ${isLowFi ? 'bg-gray-100 font-mono text-gray-900' : 'bg-slate-50 text-slate-800'}`}>
      {/* Barra Superior de Demonstração Acadêmica (Alternador Baixa vs Alta Fidelidade) */}
      <div className="bg-slate-900 text-white px-4 py-2 text-xs flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-emerald-400" />
          <span>Extensão Universitária • Modelo 3C + Material Design 3 + Heurísticas de Nielsen</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-slate-400">Modo de Protótipo:</span>
          <button
            onClick={() => setFidelidade('baixa')}
            className={`px-2.5 py-1 rounded ${isLowFi ? 'bg-white text-slate-900 font-bold' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
          >
            Baixa Fidelidade (Wireframe)
          </button>
          <button
            onClick={() => setFidelidade('alta')}
            className={`px-2.5 py-1 rounded ${!isLowFi ? 'bg-emerald-600 text-white font-bold' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
          >
            Alta Fidelidade
          </button>
        </div>
      </div>

      {/* Cabeçalho Institucional */}
      <header className={`${isLowFi ? 'bg-white border-b-2 border-dashed border-gray-400' : 'bg-gradient-to-r from-emerald-700 to-teal-700 text-white shadow-md'}`}>
        <div className="max-w-5xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2.5">
                <HeartHandshake className={`w-8 h-8 ${isLowFi ? 'text-gray-800' : 'text-emerald-200'}`} />
                <h1 className="text-2xl font-bold tracking-tight">DoeFácil Jacobina</h1>
              </div>
              <p className={`mt-1 text-sm ${isLowFi ? 'text-gray-600' : 'text-emerald-100'}`}>
                Plataforma Colaborativa • Lar do Idoso Cruzada do Bem
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={compartilharWhatsApp}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition ${
                  isLowFi
                    ? 'border-2 border-gray-800 bg-white text-gray-900'
                    : 'bg-white text-emerald-800 hover:bg-emerald-50 shadow-sm'
                }`}
              >
                <Share2 className="w-4 h-4" />
                Divulgar no WhatsApp
              </button>
            </div>
          </div>

          {/* Navegação Principal */}
          <nav className="mt-6 flex flex-wrap gap-2 border-t border-white/15 pt-4">
            {[
              { id: 'campanhas', label: 'Necessidades & Metas' },
              { id: 'mural', label: 'Mural 3C' },
              { id: 'localizacao', label: 'Localização & Horários' },
              { id: 'galeria', label: 'Galeria de Transparência' },
              { id: 'contato', label: 'Contato & Voluntariado' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setAbaAtiva(tab.id)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
                  abaAtiva === tab.id
                    ? isLowFi
                      ? 'bg-gray-900 text-white'
                      : 'bg-white text-emerald-800 shadow-sm'
                    : isLowFi
                    ? 'bg-gray-200 text-gray-800'
                    : 'bg-emerald-800/40 text-white hover:bg-emerald-800/70'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="max-w-5xl mx-auto px-4 py-8">
        {/* ABA 1: COOPERAÇÃO E COORDENAÇÃO (NECESSIDADES EM TEMPO REAL) */}
        {abaAtiva === 'campanhas' && (
          <section className="space-y-6">
            {/* Banner Pix Oficial */}
            <div className={`p-4 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${isLowFi ? 'bg-white border-2 border-gray-800' : 'bg-emerald-900 text-white shadow-sm'}`}>
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold opacity-80">Doação Financeira Direta (Chave Pix Oficial)</span>
                <p className="text-base font-bold mt-0.5">cruzadadobem@gmai.com</p>
                <p className="text-xs opacity-80">Lar do Idoso Cruzada do Bem • Jacobina - BA</p>
              </div>
              <button
                onClick={copiarPix}
                className={`px-4 py-2 rounded-xl text-sm font-semibold inline-flex items-center gap-2 shrink-0 ${
                  isLowFi ? 'bg-gray-900 text-white' : 'bg-emerald-500 text-slate-950 hover:bg-emerald-400'
                }`}
              >
                {pixCopiado ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {pixCopiado ? 'Chave Copiada!' : 'Copiar Chave Pix'}
              </button>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h2 className="text-xl font-bold">Itens Prioritários da Semana</h2>
                <p className="text-sm text-slate-600">
                  Mecanismo de Percepção (Modelo 3C): acompanhe o estoque e registre sua contribuição.
                </p>
              </div>
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${isLowFi ? 'border border-gray-800' : 'bg-emerald-100 text-emerald-800'}`}>
                <Sparkles className="w-3.5 h-3.5" /> Atualizado pela equipe do Lar
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {itens.map((item) => {
                const pct = Math.round((item.atual / item.meta) * 100);
                return (
                  <div
                    key={item.id}
                    className={`p-5 rounded-2xl transition ${
                      isLowFi
                        ? 'bg-white border-2 border-dashed border-gray-500'
                        : 'bg-white border border-slate-200 shadow-sm hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                          {item.categoria}
                        </span>
                        <h3 className="text-lg font-bold mt-0.5">{item.nome}</h3>
                      </div>
                      <span
                        className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                          isLowFi
                            ? 'border border-gray-800'
                            : item.urgencia === 'Crítica'
                            ? 'bg-rose-100 text-rose-700'
                            : 'bg-amber-100 text-amber-800'
                        }`}
                      >
                        Urgência {item.urgencia}
                      </span>
                    </div>

                    <div className="mt-4">
                      <div className="flex justify-between text-sm mb-1.5">
                        <span>
                          Arrecadado: <strong>{item.atual}</strong> de {item.meta} {item.unidade}
                        </span>
                        <span className="font-bold">{pct}%</span>
                      </div>
                      <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full transition-all ${isLowFi ? 'bg-gray-800' : 'bg-emerald-600'}`}
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>

                    <button
                      onClick={() => registrarDoacao(item.id)}
                      className={`mt-4 w-full py-2.5 px-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition ${
                        isLowFi
                          ? 'border-2 border-gray-900 bg-gray-100 hover:bg-gray-200'
                          : 'bg-emerald-600 text-white hover:bg-emerald-700'
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      Confirmar Doação (+1 {item.unidade.slice(0, -1)})
                    </button>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* ABA 2: COMUNICAÇÃO COLABORATIVA (MURAL 3C) */}
        {abaAtiva === 'mural' && (
          <section className="space-y-6">
            <div>
              <h2 className="text-xl font-bold">Mural de Comunicação e Coordenação</h2>
              <p className="text-sm text-slate-600">
                Espaço aberto para alinhar entregas, tirar dúvidas e compartilhar avisos da campanha.
              </p>
            </div>

            <form onSubmit={enviarMensagemMural} className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={novaMensagem}
                onChange={(e) => setNovaMensagem(e.target.value)}
                placeholder="Ex.: Vou levar 3 pacotes de fraldas hoje às 15h..."
                className="flex-1 px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button
                type="submit"
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold inline-flex items-center justify-center gap-2 ${
                  isLowFi ? 'bg-gray-900 text-white' : 'bg-emerald-600 text-white hover:bg-emerald-700'
                }`}
              >
                <Send className="w-4 h-4" /> Publicar Aviso
              </button>
            </form>

            <div className="space-y-3">
              {mensagens.map((msg) => (
                <div key={msg.id} className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-emerald-600" />
                      <span className="font-bold text-sm">{msg.autor}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                        {msg.cargo}
                      </span>
                    </div>
                    <span className="text-xs text-slate-400">{msg.hora}</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-700">{msg.texto}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ABA 3: LOCALIZAÇÃO OFICIAL, HORÁRIOS E REDES SOCIAIS */}
        {abaAtiva === 'localizacao' && (
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl font-bold">Ponto Oficial de Coleta</h2>
              <p className="text-sm text-slate-600">Lar do Idoso Cruzada do Bem — Jacobina/BA</p>

              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Endereço:</strong>
                    <p className="text-slate-600">
                      Rua da Fraternidade, 254 - Félix Tomaz (Caixa D'água), Jacobina - BA, CEP 44700-000
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Telefone Fixo:</strong>
                    <p className="text-slate-600">(74) 3621-4215</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Horários de Visita e Entrega de Doações:</strong>
                    <ul className="text-slate-600 list-disc list-inside mt-1">
                      <li>Segunda a sexta-feira: das 14h às 16h</li>
                      <li>Sábados e domingos: das 11h às 12h e das 14h às 16h</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-2.5">
                <a
                  href="https://sites.google.com/view/lar-do-idosocruzada-do-bem/inicio"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-semibold hover:bg-emerald-100"
                >
                  <Globe className="w-4 h-4" /> Portal Oficial (Google Sites)
                </a>
                <a
                  href="https://www.instagram.com/lardoidoso_cruzadadobem/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-pink-50 text-pink-700 text-xs font-semibold hover:bg-pink-100"
                >
                  <Instagram className="w-4 h-4" /> Instagram Oficial
                </a>
                <a
                  href="https://www.facebook.com/lardoidosocruzadadobem1962/?locale=pt_BR"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-blue-50 text-blue-700 text-xs font-semibold hover:bg-blue-100"
                >
                  <Facebook className="w-4 h-4" /> Facebook Oficial
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold mb-2">Mapa de Acesso</h3>
                <p className="text-sm text-slate-600 mb-4">
                  Bairro Félix Tomaz (Caixa D'água), próximo ao centro de Jacobina.
                </p>
                <div className="w-full h-56 rounded-xl overflow-hidden border border-slate-200">
                  <iframe
                    title="Mapa Lar do Idoso Cruzada do Bem"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    src="https://maps.google.com/maps?q=Rua%20da%20Fraternidade,%20254,%20Jacobina,%20BA&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  />
                </div>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Rua+da+Fraternidade+254+Jacobina+BA"
                target="_blank"
                rel="noreferrer"
                className="mt-4 w-full py-2.5 px-4 rounded-xl bg-slate-900 text-white text-sm font-semibold flex items-center justify-center gap-2 hover:bg-slate-800"
              >
                <Navigation className="w-4 h-4" /> Abrir Rota no Google Maps
              </a>
            </div>
          </section>
        )}

        {/* ABA 4: GALERIA DE TRANSPARÊNCIA COM FOTOS REAIS DA INSTITUIÇÃO */}
        {abaAtiva === 'galeria' && (
          <section className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h2 className="text-xl font-bold">Galeria de Ações e Transparência</h2>
                <p className="text-sm text-slate-600">
                  Registros reais das atividades, oficinas e visitas comunitárias no Lar do Idoso Cruzada do Bem.
                </p>
              </div>
              <a
                href="https://sites.google.com/view/lar-do-idosocruzada-do-bem/blog"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold text-emerald-700 hover:underline inline-flex items-center gap-1"
              >
                Ver blog institucional completo <Globe className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {galeriaFotos.map((foto, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col">
                  <div className="relative h-48 bg-slate-100 overflow-hidden">
                    {isLowFi ? (
                      <div className="w-full h-full flex flex-col items-center justify-center border-b-2 border-dashed border-gray-400 text-gray-600">
                        <Camera className="w-8 h-8 mb-1" />
                        <span className="text-xs">[Imagem #{idx + 1}]</span>
                      </div>
                    ) : (
                      <img
                        src={foto.imagem}
                        alt={foto.titulo}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    )}
                    <span className="absolute top-2 right-2 bg-slate-900/75 text-white text-[11px] font-medium px-2.5 py-0.5 rounded-full">
                      {foto.data}
                    </span>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-base leading-snug">{foto.titulo}</h3>
                      <p className="text-sm text-slate-600 mt-1.5">{foto.descricao}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ABA 5: PÁGINA DE CONTATO E VOLUNTARIADO */}
        {abaAtiva === 'contato' && (
          <section className="max-w-2xl mx-auto bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold">Fale com a Equipe / Agendar Entrega</h2>
            <p className="text-sm text-slate-600 mt-1">
              Use este canal para combinar doações em grande quantidade ou se inscrever como voluntário.
            </p>

            {contatoEnviado ? (
              <div className="mt-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 shrink-0" />
                <div>
                  <strong>Solicitação registrada com sucesso!</strong>
                  <p className="text-sm">A equipe do Lar do Idoso Cruzada do Bem recebeu sua mensagem.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={enviarContato} className="mt-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Seu Nome</label>
                  <input
                    required
                    type="text"
                    value={contato.nome}
                    onChange={(e) => setContato({ ...contato, nome: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm"
                    placeholder="Nome completo"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">WhatsApp / Telefone</label>
                    <input
                      required
                      type="text"
                      value={contato.telefone}
                      onChange={(e) => setContato({ ...contato, telefone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm"
                      placeholder="(74) 99999-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Assunto</label>
                    <select
                      value={contato.tipo}
                      onChange={(e) => setContato({ ...contato, tipo: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm bg-white"
                    >
                      <option>Entrega de Doação</option>
                      <option>Coleta em Domicílio</option>
                      <option>Apresentação / Voluntariado</option>
                      <option>Dúvidas Gerais</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Detalhes</label>
                  <textarea
                    required
                    rows={3}
                    value={contato.mensagem}
                    onChange={(e) => setContato({ ...contato, mensagem: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm"
                    placeholder="Descreva os itens que deseja doar ou o melhor horário..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-700 flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" /> Enviar Mensagem
                </button>
              </form>
            )}
          </section>
        )}
      </main>

      {/* Rodapé */}
      <footer className="border-t border-slate-200 bg-white mt-12 py-6 text-center text-xs text-slate-500">
        <p>DoeFácil Jacobina • Projeto de Extensão Universitária (ODS 1 — Erradicação da Pobreza)</p>
        <p className="mt-1">Lar do Idoso Cruzada do Bem • Rua da Fraternidade, 254, Jacobina - BA</p>
      </footer>
    </div>
  );
}
