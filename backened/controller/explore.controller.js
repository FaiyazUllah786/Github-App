export const explorePopularRepos = async (req, res) => {
  const { language } = req.params;
  try {
    const reposRes = await fetch(
      `https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc`,
      {
        headers: {
          authorization: `token ${process.env.GITHUB_API_KEY}`,
        },
      }
    );
    const repos = await reposRes.json();
    res.status(200).json({ repos: repos.items });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
