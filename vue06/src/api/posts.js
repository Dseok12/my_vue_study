import axios from "axios";

// axios
// const posts = [
//   { id: 1, title: "제목1", content: "내용1", createdAt: "2026-05-25" },
//   { id: 2, title: "제목2", content: "내용2", createdAt: "2026-05-01" },
//   { id: 3, title: "제목3", content: "내용3", createdAt: "2026-05-05" },
//   { id: 4, title: "제목4", content: "내용4", createdAt: "2026-05-10" },
//   { id: 5, title: "제목5", content: "내용5", createdAt: "2026-05-12" },
//   { id: 6, title: "제목6", content: "내용6", createdAt: "2026-05-15" },
// ];

export function getPosts(params) {
  return axios.get("http://localhost:5000/posts", { params });
}

export function getPostById(id) {
  return axios.get(`http://localhost:5000/posts/${id}`);
}

export function createPost(data) {
  return axios.post("http://localhost:5000/posts", data);
}

export function updatePost(id, data) {
  return axios.put(`http://localhost:5000/posts/${id}`, data);
}

export function deletePost(id) {
  return axios.delete(`http://localhost:5000/posts/${id}`);
}
