import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deletePostReducer } from "../store/store";

function DeletePost() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { postId } = useParams();

	useEffect(() => {
		dispatch(deletePost({ id: postId }));
		setTimeout(() => {
			navigate("/");
		}, 5000);
	});
	return <div>Post Deleted Successful</div>;
}

export default DeletePost;
