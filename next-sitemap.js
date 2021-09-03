const siteUrl = "https://www.next-av-app.com";

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
  additionalSitemaps: [
    `${siteUrl}/sitemap.xml`,
    `${siteUrl}/posts-sitemap.xml`,
    `${siteUrl}/actress-sitemap.xml`,
    `${siteUrl}/director-sitemap.xml`,
    `${siteUrl}/series-sitemap.xml`,
    `${siteUrl}/maker-sitemap.xml`,
    `${siteUrl}/genre-sitemap.xml`,
  ],
};
