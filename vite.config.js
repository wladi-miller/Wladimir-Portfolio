export default {
  base: "/wladimir-portfolio/",
  build: {
    rollupOptions: {
      input: {
        index: "./index.html",
        impressum: "./impressum.html",
      },
    },
  },
};
