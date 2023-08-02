export default async function handler(req, res) {
  // Validate secret
  if (req.query.secret !== process.env.REVALIDATION_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }
  // Validate path
  const path = req.query.path;
  if (!path) return res.status(400).json({ message: "Please provide a path" });

  try {
    await res.revalidate(path);
    return res.json({ revalidated: true });
  } catch (err) {
    console.error(err);
    return res.status(500).send("Error revalidating");
  }
}
