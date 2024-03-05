import { useSelector } from "react-redux";
import { Stack, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Posts() {
	const posts = useSelector((state) => {
		return state.post;
	});
	console.log(posts);
	return (
		<Stack gap={3} className="container mt-5">
			{posts.map((post) => (
				<div className="card" key={post.id}>
					<div className="card-header">{post.title}</div>
					<div className="card-body">{post.content}</div>
					<div className="card-footer d-flex gap-4">
						<Link to={`${post.id}/edit`}>
							<Button className="btn btn-info">Edit Post</Button>
						</Link>
						<Link to={`${post.id}/delete`}>
							<Button className="btn btn-info">Delete Post</Button>
						</Link>
					</div>
				</div>
			))}
		</Stack>
	);
}

export default Posts;
