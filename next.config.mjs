/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: true,
  },
  // Prevent Next.js/Turbopack from bundling Node.js-only modules
  serverExternalPackages: ['nodemailer'],
}

export default nextConfig
