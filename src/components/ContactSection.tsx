export const ContactSection = () => {
  return <section className="py-12 md:py-16 px-6 md:px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 text-center md:text-left">
          {/* Contato */}
          <div className="space-y-3">
            <h3 className="text-lg md:text-xl font-display font-bold text-bg-dark mb-4">Contato</h3>
            <div className="space-y-2 text-bg-dark/80 text-xs md:text-sm">
              <p className="text-xs">
                <span className="font-semibold">Telefone:</span> +55 4004-2568
              </p>
              <p className="text-xs">
                <span className="font-semibold">WhatsApp:</span> (81) 98791-8281
              </p>
              <p className="text-xs">
                <span className="font-semibold">E-mail:</span> caio.pessoa@performe.com.br
              </p>
            </div>
          </div>

          {/* Nosso Escritório */}
          <div className="space-y-3">
            <h3 className="text-lg md:text-xl font-display font-bold text-bg-dark mb-4">Nosso Escritório</h3>
            <div className="space-y-1 text-bg-dark/80 text-xs md:text-sm">
              <p className="text-xs">Avenida Governador Agamenon Magalhães, 4775</p>
              <p className="text-xs">Empresarial Thomas Edison – Salas 1407/1408</p>
              <p className="text-xs">Recife – PE</p>
              <p className="text-xs">CEP 50070-160</p>
            </div>
          </div>

          {/* Aviso Legal */}
          <div className="space-y-3">
            <h3 className="text-lg md:text-xl font-display font-bold text-bg-dark mb-4">Aviso Legal</h3>
            <p className="text-xs text-bg-dark/70 leading-relaxed md:text-xs text-justify">A Performe Corretora e Administradora de Seguros LTDA não é uma instituição financeira e não realiza operações de crédito diretamente. Somos uma plataforma que atua como corretores e parceiros das administradoras de consórcio. Antes da contratação de qualquer serviço através de nossos parceiros, você receberá todas as condições e informações relativas ao produto a ser contratado, de forma completa e transparente. As taxas e prazos de pagamento praticados nos consórcios, bem como a política de crédito da instituição financeira a ser utilizada, podem variar conforme análise individual.</p>
            <p className="text-xs text-bg-dark/70 leading-relaxed md:text-xs">
          </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-bg-dark/10 text-center">
          <p className="text-bg-dark/60 md:text-sm text-xs">© 2025 Todos os direitos reservados.</p>
        </div>
      </div>
    </section>;
};