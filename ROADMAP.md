STACK/ react typescript UI(shadcn, tailwind)

1. npx create-next-app@latest my-app --yes
2. npm i -D prettier eslint-config-prettier
3. "scripts": {
   "prettier":"prettier -w ."
   }, - пройтись по всему проекту и автоматически исправить форматирование
4. ESLint — это инструмент, который проверяет твой код на ошибки и плохие практики.
5. eslintrc.json - extends = “взять готовые наборы правил и использовать их”
   "next/core-web-vitals" Это конфиг от Next.js
   "prettier" = отключение конфликтов с ESLint.

6.shadcn/ui - библиотека с генерацией готовых ui коппанентов (не просто библиотека откуда мы испортируем а именно он добавляет прямо в проект так мы можем делать с ними что хотим либо использовать уже как есть).

7. npx shadcn@latest init

8. проверь настроены ли алисы в tsconfig
   "baseUrl": ".",
   "paths": {
   "@/_": ["src/_"]
   }
9. что бы компаненты создаовались в нужном месте в components.json:
   "aliases": {
   "components": "@/shared/ui",
   "utils": "@/shared/lib/utils",
   }
10. npm install -D tailwindcss postcss autoprefixer
11. вручную добавляем tailwind.config.js и внутри в content content: ["./src/**/*.{ts,tsx}"],
12. extend: {
    fontFamily: {
    sans: ["var(--font-sans)", ...fontFamily.sans], // import fontFamily from "tailwindcss/defaultTheme";
    },
    },
