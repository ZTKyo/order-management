import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  
  // 基础路径（使用相对路径，适配 Netlify）
  base: './',
  
  // 路径别名
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@hooks': resolve(__dirname, 'src/hooks'),
      '@utils': resolve(__dirname, 'src/utils'),
      '@types': resolve(__dirname, 'src/types'),
      '@constants': resolve(__dirname, 'src/constants'),
      '@styles': resolve(__dirname, 'src/styles'),
    },
  },
  
  // 构建配置
  build: {
    // 输出目录
    outDir: 'dist',
    
    // 资源内联限制
    assetsInlineLimit: 4096,
    
    // 代码分割
    rollupOptions: {
      output: {
        // 手动代码分割
        manualChunks: {
          // React 相关库单独打包
          'react-vendor': ['react', 'react-dom'],
        },
        // 静态资源命名
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/\.(png|jpe?g|gif|svg|webp|ico)$/i.test(assetInfo.name)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        // JS 文件命名
        chunkFileNames: 'assets/js/[name]-[hash].js',
        // 入口文件命名
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
    
    // 压缩配置（使用默认的 esbuild，不需要额外安装）
    minify: 'esbuild',
    
    // 源映射
    sourcemap: false,
    
    // 清空输出目录
    emptyOutDir: true,
  },
  
  // 开发服务器配置
  server: {
    port: 5173,
    host: true,
    open: true,
  },
  
  // 预览服务器配置
  preview: {
    port: 4173,
    host: true,
  },
  
  // CSS 配置
  css: {
    modules: {
      // CSS Modules 配置
      localsConvention: 'camelCaseOnly',
      generateScopedName: '[name]__[local]___[hash:base64:5]',
    },
    // 预处理器配置
    preprocessorOptions: {
      // 如果需要使用 SCSS/Less 可以在这里配置
    },
  },
  
  // 优化依赖预构建
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
});
