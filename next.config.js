module.exports = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "cache-control",
            value: "public, max-age=30",
          },
        ],
      },
    ];
  },
};
