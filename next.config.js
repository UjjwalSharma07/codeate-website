/** @type {import('next').NextConfig} */
const removeImports = require("next-remove-imports")();

// const nextConfig = {
//   eslint: {
//     ignoreDuringBuilds: true,
// },
//   reactStrictMode: true,
//   swcMinify: true,
// };

module.exports = (phase, { defaultConfig }) => {
  return removeImports({
    ...defaultConfig,
  });
};

// module.exports = nextConfig;
