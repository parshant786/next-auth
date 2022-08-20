import { comments } from "../../../data/comments";
export default function handler(req, res) {
  const { commentById } = req.query;
  if (req.method === "GET") {
    const comment = comments.find((comment) => comment.id === parseInt(commentById));
    console.log(comment);
    res.status(200).json(comment);
  } else if (req.method === "DELETE") {
    const comment = comments.find((comment) => comment.id === parseInt(commentById));
    console.log(comment);
    const index = comments.findIndex((comment) => comment.id === parseInt(commentById));
    comments.splice(index, 1);
    res.status(200).json(comment);
  }
}
