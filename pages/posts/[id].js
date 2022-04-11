import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

function PostDetail() {
  const [post, setPost] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  const getPost = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await res.json();
    setPost(post);
  };

  console.log(post);

  useEffect(() => {
    if (id) {
      getPost();
    }
  }, [id]);
  return (
    <>
      {post && (
        <Card className="mt-2">
          <Card.Img variant="top" src="/python.jpeg" />
          <Card.Body>
            <h3>{post.title}</h3>
            {post.body}
          </Card.Body>
        </Card>
      )}
    </>
  );
}

export default PostDetail;
