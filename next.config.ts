import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: {
    appIsrStatus: false,//SE "true" OU A KEY 'devIndicators' NÃO FOR EXPLICITADA AQUI, FICARÁ APARECENDO UM ÍCONE NA PARTE DEBAIXO À ESQUERDA SOBRE O STATUS DA ROUTE (STATIC OU DYNAMIC)
  },
  output:"standalone",//Quando o tamanho do aplicativo excede 250 MB, o recurso Next.js Rastreamento de Arquivo de Saída ajuda a otimizar o tamanho do aplicativo e a melhorar o desempenho. O Rastreamento de Arquivo de Saída cria uma versão compactada de todo o aplicativo com as dependências de pacote necessárias.
};

export default nextConfig;
