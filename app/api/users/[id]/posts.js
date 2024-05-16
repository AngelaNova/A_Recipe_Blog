import { connectToDB } from '@utils/database';
import Post from '@models/post';

export default async function handler(req, res) {
  const { id } = req.query;

  try {
    await connectToDB();

    // Fetch posts for the specific user
    const posts = await Post.find({ user: id });

    res.status(200).json(posts);
  } catch (error) {
    console.error('Error fetching user posts:', error);
    res.status(500).json({ message: 'Failed to fetch posts' });
  }
}
