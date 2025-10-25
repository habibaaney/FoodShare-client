// import { useState } from "react";
// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import axios from "axios";
// import Swal from "sweetalert2";

// const Blogs = () => {
//   const queryClient = useQueryClient();

//   const [selectedBlog, setSelectedBlog] = useState(null);
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [editBlog, setEditBlog] = useState(null);

//   const [newBlog, setNewBlog] = useState({
//     title: "",
//     image: "",
//     content: "",
//     author: "",
//   });

//   // Fetch blogs
//   const { data: blogs = [], isLoading } = useQuery({
//     queryKey: ["blogs"],
//     queryFn: async () => {
//       const res = await axios.get(
//         "https://mission-scic11-server.vercel.app/blogs"
//       );
//       return res.data;
//     },
//   });

//   // Add blog mutation
//   const addBlogMutation = useMutation({
//     mutationFn: async (blog) => {
//       return axios.post(
//         "https://mission-scic11-server.vercel.app/blogs",
//         blog,
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("access-token")}`,
//           },
//         }
//       );
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries(["blogs"]);
//       Swal.fire("Success!", "Blog added successfully!", "success");
//       setShowAddModal(false);
//       setNewBlog({ title: "", image: "", content: "", author: "" });
//     },
//     onError: () => Swal.fire("Error!", "Failed to add blog", "error"),
//   });

//   // Edit blog mutation
//   const editBlogMutation = useMutation({
//     mutationFn: async ({ id, updatedBlog }) => {
//       return axios.patch(
//         `https://mission-scic11-server.vercel.app/blogs/${id}`,
//         updatedBlog,
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("access-token")}`,
//           },
//         }
//       );
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries(["blogs"]);
//       Swal.fire("Success!", "Blog updated successfully!", "success");
//       setEditBlog(null);
//     },
//     onError: () => Swal.fire("Error!", "Failed to update blog", "error"),
//   });

//   // Delete blog mutation
//   const deleteBlogMutation = useMutation({
//     mutationFn: async (id) => {
//       return axios.delete(
//         `https://mission-scic11-server.vercel.app/blogs/${id}`,
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("access-token")}`,
//           },
//         }
//       );
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries(["blogs"]);
//       Swal.fire("Deleted!", "Blog deleted successfully!", "success");
//     },
//     onError: () => Swal.fire("Error!", "Failed to delete blog", "error"),
//   });

//   const handleAddBlog = (e) => {
//     e.preventDefault();
//     addBlogMutation.mutate(newBlog);
//   };

//   const handleEditBlog = (e) => {
//     e.preventDefault();
//     editBlogMutation.mutate({ id: editBlog._id, updatedBlog: editBlog });
//   };

//   if (isLoading)
//     return <div className="text-center mt-20">Loading blogs...</div>;

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <div className="flex justify-between items-center mb-8">
//         <h2 className="text-3xl font-bold">Our Latest Blogs</h2>
//         <button
//           onClick={() => setShowAddModal(true)}
//           className="btn btn-primary"
//         >
//           Add Blog
//         </button>
//       </div>

//       {/* Blog Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {blogs.map((blog) => (
//           <div
//             key={blog._id}
//             className="card bg-base-100 shadow-lg hover:shadow-2xl transition"
//           >
//             <figure>
//               <img
//                 src={blog.image}
//                 alt={blog.title}
//                 className="h-48 w-full object-cover"
//               />
//             </figure>
//             <div className="card-body">
//               <h3 className="card-title">{blog.title}</h3>
//               <p className="text-sm text-gray-500 mb-2">
//                 By {blog.author} •{" "}
//                 {new Date(blog.createdAt).toLocaleDateString()}
//               </p>
//               <p className="text-gray-600 line-clamp-3">{blog.content}</p>
//               <div className="card-actions justify-end mt-3 gap-2">
//                 <button
//                   className="btn btn-sm btn-outline"
//                   onClick={() => setSelectedBlog(blog)}
//                 >
//                   Read More
//                 </button>
//                 <button
//                   className="btn btn-sm bg-green-600 text-white hover:bg-green-700"
//                   onClick={() => setEditBlog(blog)}
//                 >
//                   Edit
//                 </button>
//                 <button
//                   className="btn btn-sm bg-red-600 text-white hover:bg-red-700"
//                   onClick={() => deleteBlogMutation.mutate(blog._id)}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Blog Details Modal */}
//       {selectedBlog && (
//         <dialog open className="modal modal-bottom sm:modal-middle">
//           <div className="modal-box">
//             <h3 className="font-bold text-2xl mb-2">{selectedBlog.title}</h3>
//             <p
//               className="text-sm text-gray-8

//             00 mb-4"
//             >
//               By {selectedBlog.author} •{" "}
//               {new Date(selectedBlog.createdAt).toLocaleDateString()}
//             </p>
//             <img
//               src={selectedBlog.image}
//               alt={selectedBlog.title}
//               className="rounded-lg mb-4"
//             />
//             <p className="text-gray-800">{selectedBlog.content}</p>
//             <div className="modal-action">
//               <button className="btn" onClick={() => setSelectedBlog(null)}>
//                 Close
//               </button>
//             </div>
//           </div>
//         </dialog>
//       )}

//       {/* Add Blog Modal */}
//       {showAddModal && (
//         <dialog open className="modal modal-bottom sm:modal-middle">
//           <div className="modal-box">
//             <h3 className="font-bold text-xl mb-4">Add a New Blog</h3>
//             <form onSubmit={handleAddBlog} className="space-y-3">
//               <input
//                 type="text"
//                 placeholder="Title"
//                 value={newBlog.title}
//                 onChange={(e) =>
//                   setNewBlog({ ...newBlog, title: e.target.value })
//                 }
//                 className="input input-bordered w-full"
//                 required
//               />
//               <input
//                 type="text"
//                 placeholder="Image URL"
//                 value={newBlog.image}
//                 onChange={(e) =>
//                   setNewBlog({ ...newBlog, image: e.target.value })
//                 }
//                 className="input input-bordered w-full"
//                 required
//               />
//               <input
//                 type="text"
//                 placeholder="Author"
//                 value={newBlog.author}
//                 onChange={(e) =>
//                   setNewBlog({ ...newBlog, author: e.target.value })
//                 }
//                 className="input input-bordered w-full"
//                 required
//               />
//               <textarea
//                 placeholder="Content"
//                 value={newBlog.content}
//                 onChange={(e) =>
//                   setNewBlog({ ...newBlog, content: e.target.value })
//                 }
//                 className="textarea textarea-bordered w-full"
//                 required
//               />
//               <div className="modal-action">
//                 <button type="submit" className="btn btn-primary">
//                   Add
//                 </button>
//                 <button
//                   type="button"
//                   className="btn"
//                   onClick={() => setShowAddModal(false)}
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           </div>
//         </dialog>
//       )}

//       {/* Edit Blog Modal */}
//       {editBlog && (
//         <dialog open className="modal modal-bottom sm:modal-middle">
//           <div className="modal-box">
//             <h3 className="font-bold text-xl mb-4">Edit Blog</h3>
//             <form onSubmit={handleEditBlog} className="space-y-3">
//               <input
//                 type="text"
//                 placeholder="Title"
//                 value={editBlog.title}
//                 onChange={(e) =>
//                   setEditBlog({ ...editBlog, title: e.target.value })
//                 }
//                 className="input input-bordered w-full"
//                 required
//               />
//               <input
//                 type="text"
//                 placeholder="Image URL"
//                 value={editBlog.image}
//                 onChange={(e) =>
//                   setEditBlog({ ...editBlog, image: e.target.value })
//                 }
//                 className="input input-bordered w-full"
//                 required
//               />
//               <input
//                 type="text"
//                 placeholder="Author"
//                 value={editBlog.author}
//                 onChange={(e) =>
//                   setEditBlog({ ...editBlog, author: e.target.value })
//                 }
//                 className="input input-bordered w-full"
//                 required
//               />
//               <textarea
//                 placeholder="Content"
//                 value={editBlog.content}
//                 onChange={(e) =>
//                   setEditBlog({ ...editBlog, content: e.target.value })
//                 }
//                 className="textarea textarea-bordered w-full"
//                 required
//               />
//               <div className="modal-action">
//                 <button type="submit" className="btn btn-primary">
//                   Save
//                 </button>
//                 <button
//                   type="button"
//                   className="btn"
//                   onClick={() => setEditBlog(null)}
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           </div>
//         </dialog>
//       )}
//     </div>
//   );
// };

// export default Blogs;

import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";
import { useAuth } from "../../providers/AuthProvider"; // ✅ Add this

const Blogs = () => {
  const { user } = useAuth(); // ✅ Get logged-in user
  const queryClient = useQueryClient();

  const [selectedBlog, setSelectedBlog] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editBlog, setEditBlog] = useState(null);

  const [newBlog, setNewBlog] = useState({
    title: "",
    image: "",
    content: "",
    author: "",
  });

  // Fetch blogs
  const { data: blogs = [], isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await axios.get(
        "https://mission-scic11-server.vercel.app/blogs"
      );
      return res.data;
    },
  });

  // Add blog mutation
  const addBlogMutation = useMutation({
    mutationFn: async (blog) => {
      return axios.post(
        "https://mission-scic11-server.vercel.app/blogs",
        blog,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access-token")}`,
          },
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["blogs"]);
      Swal.fire("Success!", "Blog added successfully!", "success");
      setShowAddModal(false);
      setNewBlog({ title: "", image: "", content: "", author: "" });
    },
    onError: () => Swal.fire("Error!", "Failed to add blog", "error"),
  });

  // Edit blog mutation
  const editBlogMutation = useMutation({
    mutationFn: async ({ id, updatedBlog }) => {
      return axios.patch(
        `https://mission-scic11-server.vercel.app/blogs/${id}`,
        updatedBlog,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access-token")}`,
          },
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["blogs"]);
      Swal.fire("Success!", "Blog updated successfully!", "success");
      setEditBlog(null);
    },
    onError: () => Swal.fire("Error!", "Failed to update blog", "error"),
  });

  // Delete blog mutation
  const deleteBlogMutation = useMutation({
    mutationFn: async (id) => {
      return axios.delete(
        `https://mission-scic11-server.vercel.app/blogs/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access-token")}`,
          },
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["blogs"]);
      Swal.fire("Deleted!", "Blog deleted successfully!", "success");
    },
    onError: () => Swal.fire("Error!", "Failed to delete blog", "error"),
  });

  // Add blog handler
  const handleAddBlog = (e) => {
    e.preventDefault();

    // ✅ Include logged-in user's email and name
    const blogWithAuthorInfo = {
      ...newBlog,
      author: newBlog.author || user?.displayName || "Anonymous",
      authorEmail: user?.email, // store email for authorization
      createdAt: new Date().toISOString(),
    };

    addBlogMutation.mutate(blogWithAuthorInfo);
  };

  const handleEditBlog = (e) => {
    e.preventDefault();
    editBlogMutation.mutate({ id: editBlog._id, updatedBlog: editBlog });
  };

  if (isLoading)
    return <div className="text-center mt-20">Loading blogs...</div>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Our Latest Blogs</h2>
        {user && ( // ✅ Only logged-in users can add blogs
          <button
            onClick={() => setShowAddModal(true)}
            className="btn bg-green-600 text-white hover:bg-green-700"
          >
            Add Blog
          </button>
        )}
      </div>
      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="card bg-base-100 shadow-lg hover:shadow-2xl transition"
          >
            <figure>
              <img
                src={blog.image}
                alt={blog.title}
                className="h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title">{blog.title}</h3>
              <p className="text-sm text-gray-500 mb-2">
                By {blog.author} •{" "}
                {new Date(blog.createdAt).toLocaleDateString()}
              </p>
              <p className="text-gray-600 line-clamp-3">{blog.content}</p>
              <div className="card-actions justify-end mt-3 gap-2">
                <button
                  className="btn btn-sm btn-outline"
                  onClick={() => setSelectedBlog(blog)}
                >
                  Read More
                </button>

                {/* ✅ Show Edit/Delete only if the logged-in user is the author */}
                {user?.email === blog.authorEmail && (
                  <>
                    <button
                      className="btn btn-sm bg-green-600 text-white hover:bg-green-700"
                      onClick={() => setEditBlog(blog)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-sm bg-red-600 text-white hover:bg-red-700"
                      onClick={() => deleteBlogMutation.mutate(blog._id)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Blog Details Modal */}

      {selectedBlog && (
        <dialog open className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-2xl mb-2">{selectedBlog.title}</h3>
            <p
              className="text-sm text-gray-8
            
            00 mb-4"
            >
              By {selectedBlog.author} •{" "}
              {new Date(selectedBlog.createdAt).toLocaleDateString()}
            </p>
            <img
              src={selectedBlog.image}
              alt={selectedBlog.title}
              className="rounded-lg mb-4"
            />
            <p className="text-gray-500">{selectedBlog.content}</p>
            <div className="modal-action">
              <button className="btn" onClick={() => setSelectedBlog(null)}>
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}
      {/* Add Blog Modal */}
      {showAddModal && (
        <dialog open className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-xl mb-4">Add a New Blog</h3>
            <form onSubmit={handleAddBlog} className="space-y-3">
              <input
                type="text"
                placeholder="Title"
                value={newBlog.title}
                onChange={(e) =>
                  setNewBlog({ ...newBlog, title: e.target.value })
                }
                className="input input-bordered w-full"
                required
              />
              <input
                type="text"
                placeholder="Image URL"
                value={newBlog.image}
                onChange={(e) =>
                  setNewBlog({ ...newBlog, image: e.target.value })
                }
                className="input input-bordered w-full"
                required
              />
              <input
                type="text"
                placeholder="Author"
                value={newBlog.author}
                onChange={(e) =>
                  setNewBlog({ ...newBlog, author: e.target.value })
                }
                className="input input-bordered w-full"
                required
              />
              <textarea
                placeholder="Content"
                value={newBlog.content}
                onChange={(e) =>
                  setNewBlog({ ...newBlog, content: e.target.value })
                }
                className="textarea textarea-bordered w-full"
                required
              />
              <div className="modal-action">
                <button
                  type="submit"
                  className="btn bg-green-600 text-white hover:bg-green-700"
                >
                  Add
                </button>
                <button
                  type="button"
                  className="btn"
                  onClick={() => setShowAddModal(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </dialog>
      )}
      {/* Edit Blog Modal */}
      {editBlog && (
        <dialog open className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-xl mb-4">Edit Blog</h3>
            <form onSubmit={handleEditBlog} className="space-y-3">
              <input
                type="text"
                placeholder="Title"
                value={editBlog.title}
                onChange={(e) =>
                  setEditBlog({ ...editBlog, title: e.target.value })
                }
                className="input input-bordered w-full"
                required
              />
              <input
                type="text"
                placeholder="Image URL"
                value={editBlog.image}
                onChange={(e) =>
                  setEditBlog({ ...editBlog, image: e.target.value })
                }
                className="input input-bordered w-full"
                required
              />
              <input
                type="text"
                placeholder="Author"
                value={editBlog.author}
                onChange={(e) =>
                  setEditBlog({ ...editBlog, author: e.target.value })
                }
                className="input input-bordered w-full"
                required
              />
              <textarea
                placeholder="Content"
                value={editBlog.content}
                onChange={(e) =>
                  setEditBlog({ ...editBlog, content: e.target.value })
                }
                className="textarea textarea-bordered w-full"
                required
              />
              <div className="modal-action">
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
                <button
                  type="button"
                  className="btn"
                  onClick={() => setEditBlog(null)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default Blogs;
