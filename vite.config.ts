import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [tailwindcss(), react()],
    resolve: {
      alias: {
        '@app': '/src/app',
        '@pages': '/src/pages',
        '@widgets': '/src/widgets',
        '@features': '/src/features',
        '@entities': '/src/entities',
        '@shared': '/src/shared',
      },
    },
    server: {
      proxy: {
        '/api': {
          target: env.VITE_BACKEND_API_V1,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, ''),
        },
      },
    },
    // preview-сервер (npm run preview, как в Docker) за nginx:
    // разрешаем проксированный Host, иначе vite отдаёт "Blocked request".
    preview: {
      allowedHosts: true,
    },
  };
});
