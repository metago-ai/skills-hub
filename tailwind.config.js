/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // 深色背景层级（与 MetaGO 品牌一致）
        'bg-deep': '#09090b',
        'bg-card': '#131316',
        'bg-elevated': '#1b1b20',
        'bg-hover': '#232329',
        // 边框层级
        'border-subtle': '#27272f',
        'border-default': '#3a3a45',
        // MetaGO 品牌强调色（emerald 系 = 核心；sky/blue 系 = Dev Kit）
        'accent-emerald': '#10d985',
        'accent-teal': '#14b8a6',
        'accent-green': '#00ff88',
        'accent-blue': '#38bdf8',
        'accent-sky': '#0ea5e9',
      },
      fontFamily: {
        // Bricolage Grotesque 作为标题/正文拉丁字体，中文回退到系统 CJK
        sans: ['"Bricolage Grotesque"', 'PingFang SC', 'Microsoft YaHei', 'Noto Sans SC', 'sans-serif'],
        display: ['"Bricolage Grotesque"', 'PingFang SC', 'Microsoft YaHei', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Consolas', 'Courier New', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 24px rgba(16, 217, 133, 0.25)',
        'glow-hover': '0 0 36px rgba(16, 217, 133, 0.4)',
        'glow-blue': '0 0 24px rgba(56, 189, 248, 0.25)',
        card: '0 4px 24px -6px rgba(0, 0, 0, 0.7)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'slide-down': 'slideDown 0.2s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(16px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-12px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.96)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(12px, -12px)' },
        },
      },
    },
  },
  plugins: [],
}
