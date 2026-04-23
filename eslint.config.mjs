import { defineConfig, globalIgnores } from "eslint/config";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

/**
 * ESLint configuration for Next.js + TypeScript
 * - Includes Next.js Core Web Vitals rules
 * - Includes TypeScript rules
 * - Overrides global ignores for build folders and generated files
 */
export default defineConfig([
  ...nextCoreWebVitals,
  ...nextTypescript,

  // Overrides for global ignores
  globalIgnores([
    ".next/**",       // pasta de build Next.js
    "out/**",         // pasta de export estático
    "build/**",       // qualquer build custom
    "next-env.d.ts",  // arquivo gerado pelo Next.js
  ]),

  // Aqui você pode adicionar overrides, regras customizadas ou plugins
  // {
  //   files: ["*.ts", "*.tsx"],
  //   rules: {
  //     "@typescript-eslint/no-unused-vars": ["warn"],
  //   },
  // },
]);