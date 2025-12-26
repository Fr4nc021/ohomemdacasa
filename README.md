# O Homem da Casa - Site Institucional

Site institucional moderno e responsivo para serviços de manutenção residencial, desenvolvido com React + Vite.

## 🚀 Tecnologias

- **React 19** - Biblioteca JavaScript para interfaces
- **Vite** - Build tool e dev server ultra-rápido
- **CSS Modules** - Estilos modulares e escopados
- **JavaScript ES6+** - Linguagem moderna

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 🎨 Características

- ✨ Design dark premium com tema moderno
- 📱 100% responsivo (mobile-first)
- 🎭 Animações suaves com CSS e Intersection Observer
- ⚡ Performance otimizada
- 📄 Pronto para deploy no GitHub Pages

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Hero.jsx              # Seção hero com logo e CTA
│   ├── Services.jsx          # Cards de serviços
│   ├── HowItWorks.jsx        # Processo em 3 passos
│   ├── CTA.jsx               # Call-to-action
│   └── Footer.jsx            # Rodapé
├── assets/
│   └── logo.svg              # Logo da empresa
├── App.jsx                   # Componente principal
├── main.jsx                  # Entry point
└── index.css                 # Estilos globais
```

## 🌐 Deploy no GitHub Pages

1. Faça o build do projeto:
   ```bash
   npm run build
   ```

2. O diretório `dist` será gerado com os arquivos estáticos

3. Configure o GitHub Pages para servir a pasta `dist`

## 📝 Personalização

### Alterar número do WhatsApp

Edite os números nos componentes `Hero.jsx` e `CTA.jsx`:

```javascript
const phone = '5511999999999' // Seu número aqui
```

### Cores do tema

As cores podem ser personalizadas no arquivo `src/index.css` através das variáveis CSS:

```css
:root {
  --primary-blue: #5EC6FF;
  --dark-blue: #0A1A2E;
  --navy-blue: #162447;
  --graphite: #1A1A2E;
  /* ... */
}
```

## 📄 Licença

© 2025 O Homem da Casa. Todos os direitos reservados.
