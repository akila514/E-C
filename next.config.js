/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "res.cloudinary.com",
      "avatars.githubusercontent.com",
      "images.unsplash.com",
      "utfs.io",
      "lh3.googleusercontent.com",
    ],
  },
};

module.exports = nextConfig;
