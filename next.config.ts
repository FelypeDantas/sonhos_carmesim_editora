import type { NextConfig } from "next";

/** @type {NextConfig} */
const nextConfig: NextConfig = {
  reactStrictMode: true,       // ajuda a pegar bugs e práticas de código ruins         // usa o SWC para minificar JS/TS, mais rápido
  output: "standalone",        // bom para deploy em containers/servers
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",        // permite imagens de qualquer domínio (ou restrinja ao necessário)
      },
    ],
  },
  compiler: {
    styledComponents: true,     // se usar styled-components, ativa suporte SSR
  },
};

export default nextConfig;