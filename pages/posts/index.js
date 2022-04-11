import Head from "next/head";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { Card, Row, Col } from "react-bootstrap";
// import styles from "../../styles/posts/Posts.module.css";

function Posts() {
  const [posts, setPosts] = useState(null);
  const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
    setPosts(data.slice(0, 10));
  };
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <Head>
        <title>Next Posts</title>
      </Head>
      <Row xs={1} md={2} className="g-4">
        {posts ? (
          posts.map((post) => (
            <Col>
              <Card>
                <Card.Img variant="top" src="/python.jpeg" />
                <Card.Body>
                  <Link href={`posts/${post.id}`}>
                    <Card.Title>{post.title}</Card.Title>
                  </Link>

                  <Card.Text>{post.body}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </Col>
          ))
        ) : (
          <h6>No Posts available</h6>
        )}
      </Row>
    </>
  );
}

export default Posts;
