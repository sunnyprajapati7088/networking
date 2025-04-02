// // // import React, { useState, useEffect } from 'react';
// // // import { toast } from 'react-toastify';
// // // import 'react-toastify/dist/ReactToastify.css';

// // // const dummyCategories = [
// // //   { _id: '1', name: 'Cisco' },
// // //   { _id: '2', name: 'Microsoft' },
// // //   { _id: '3', name: 'Red Hat' }
// // // ];

// // // const dummyCourses = [
// // //   {
// // //     _id: '101',
// // //     name: 'CCNA',
// // //     description: 'Cisco Certified Network Associate (CCNA) is a foundational certification covering networking fundamentals.',
// // //     category: '1',
// // //     duration: '3-6 months',
// // //     level: 'Entry',
// // //     salary: '₹4-8 LPA',
// // //     demand: 'High',
// // //     image: 'https://res.cloudinary.com/drz6fzlpu/image/upload/v1743435202/ccna_x20rfz.jpg'
// // //   },
// // //   {
// // //     _id: '102',
// // //     name: 'CCNP',
// // //     description: 'Cisco Certified Network Professional (CCNP) builds on CCNA skills with advanced topics.',
// // //     category: '1',
// // //     duration: '6-12 months',
// // //     level: 'Intermediate',
// // //     salary: '₹8-15 LPA',
// // //     demand: 'Very High',
// // //     image: 'https://res.cloudinary.com/drz6fzlpu/image/upload/v1743438892/ccnp_ahqtns.jpg'
// // //   },
// // //   {
// // //     _id: '201',
// // //     name: 'AZ-800/801',
// // //     description: 'Windows Server Hybrid Core Infrastructure focuses on managing hybrid environments.',
// // //     category: '2',
// // //     duration: '4-8 months',
// // //     level: 'Intermediate',
// // //     salary: '₹6-12 LPA',
// // //     demand: 'High',
// // //     image: 'https://images.credly.com/images/cc3c9fd5-123a-439e-a297-e31f40b79aaa/image.png'
// // //   },
// // //   {
// // //     _id: '202',
// // //     name: 'Microsoft Azure Certifications',
// // //     description: 'Microsoft Azure Certifications validate your cloud expertise.',
// // //     category: '2',
// // //     duration: '3-9 months',
// // //     level: 'Beginner to Expert',
// // //     salary: '₹5-20 LPA',
// // //     demand: 'Very High',
// // //     image: 'https://th.bing.com/th/id/OIP.v6rlesHwf8qOadRPsUioogHaEo?rs=1&pid=ImgDetMain'
// // //   },
// // //   {
// // //     _id: '301',
// // //     name: 'RHCSA',
// // //     description: 'Red Hat Certified System Administrator proves core Linux administration skills.',
// // //     category: '3',
// // //     duration: '2-4 months',
// // //     level: 'Entry',
// // //     salary: '₹4-7 LPA',
// // //     demand: 'High',
// // //     image: 'https://www.webasha.com/uploads/course/images/633ab9d0b9e281664793040.RHCSA_Training-and-certification.jpg'
// // //   }
// // // ];

// // // const AdminCoursePanel = ({ onUpdate }) => {
// // //   const [courses, setCourses] = useState([]);
// // //   const [categories, setCategories] = useState([]);
// // //   const [editingCourse, setEditingCourse] = useState(null);
// // //   const [showForm, setShowForm] = useState(false);
// // //   const [loading, setLoading] = useState(false);
// // //   const [newCategory, setNewCategory] = useState('');

// // //   useEffect(() => {
// // //     setLoading(true);
// // //     setTimeout(() => {
// // //       setCourses(dummyCourses);
// // //       setCategories(dummyCategories);
// // //       setLoading(false);
// // //     }, 500);
// // //   }, []);

// // //   const createCourse = async (courseData) => {
// // //     const newCourse = {
// // //       ...courseData,
// // //       _id: Math.random().toString(36).substr(2, 9)
// // //     };
// // //     setCourses([...courses, newCourse]);
// // //     toast.success("Course created successfully (Dummy Data)");
// // //     setShowForm(false);
// // //     onUpdate();
// // //   };

// // //   const updateCourse = async (id, courseData) => {
// // //     setCourses(courses.map(c => c._id === id ? { ...c, ...courseData } : c));
// // //     toast.success("Course updated successfully (Dummy Data)");
// // //     setEditingCourse(null);
// // //     setShowForm(false);
// // //     onUpdate();
// // //   };

// // //   const deleteCourse = async (id) => {
// // //     if (!window.confirm("Are you sure you want to delete this course?")) return;
// // //     setCourses(courses.filter(c => c._id !== id));
// // //     toast.success("Course deleted successfully (Dummy Data)");
// // //     onUpdate();
// // //   };

// // //   const addCategory = async () => {
// // //     if (!newCategory.trim()) return;
// // //     const newCat = {
// // //       _id: Math.random().toString(36).substr(2, 9),
// // //       name: newCategory
// // //     };
// // //     setCategories([...categories, newCat]);
// // //     setNewCategory('');
// // //     toast.success("Category added (Dummy Data)");
// // //   };

// // //   const deleteCategory = async (id) => {
// // //     if (!window.confirm("This will delete all courses in this category. Continue?")) return;
// // //     setCategories(categories.filter(c => c._id !== id));
// // //     setCourses(courses.filter(c => c.category !== id));
// // //     toast.success("Category deleted (Dummy Data)");
// // //     onUpdate();
// // //   };

// // //   if (loading) return <div className="text-center py-8 text-black">Loading dummy data...</div>;

// // //   return (
// // //     <div className="bg-white rounded-lg shadow-md p-6 mb-8 text-black">
// // //       <h2 className="text-2xl font-bold mb-6 text-black">Course Management (Dummy Data)</h2>
      
// // //       <div className="mb-8">
// // //         <h3 className="text-xl font-semibold mb-4 text-black">Categories</h3>
// // //         <div className="flex flex-wrap gap-2 mb-4">
// // //           {categories.map(cat => (
// // //             <div key={cat._id} className="bg-gray-100 px-4 py-2 rounded-full flex items-center">
// // //               <span className="text-black">{cat.name}</span>
// // //               <button 
// // //                 onClick={() => deleteCategory(cat._id)}
// // //                 className="ml-2 text-black hover:text-red-700"
// // //               >
// // //                 ×
// // //               </button>
// // //             </div>
// // //           ))}
// // //         </div>
// // //         <div className="flex">
// // //           <input
// // //             type="text"
// // //             value={newCategory}
// // //             onChange={(e) => setNewCategory(e.target.value)}
// // //             placeholder="New category name"
// // //             className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 text-black"
// // //           />
// // //           <button 
// // //             onClick={addCategory}
// // //             className="bg-gray-800 text-white px-4 py-2 rounded-r-lg hover:bg-gray-700"
// // //           >
// // //             Add
// // //           </button>
// // //         </div>
// // //       </div>

// // //       <div>
// // //         <div className="flex justify-between items-center mb-4">
// // //           <h3 className="text-xl font-semibold text-black">Courses</h3>
// // //           <button 
// // //             onClick={() => {
// // //               setEditingCourse(null);
// // //               setShowForm(true);
// // //             }}
// // //             className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
// // //           >
// // //             Add New Course
// // //           </button>
// // //         </div>

// // //         <div className="overflow-x-auto">
// // //           <table className="min-w-full bg-white">
// // //             <thead>
// // //               <tr className="bg-gray-100">
// // //                 <th className="py-3 px-4 text-left text-black">Name</th>
// // //                 <th className="py-3 px-4 text-left text-black">Category</th>
// // //                 <th className="py-3 px-4 text-left text-black">Duration</th>
// // //                 <th className="py-3 px-4 text-left text-black">Level</th>
// // //                 <th className="py-3 px-4 text-left text-black">Actions</th>
// // //               </tr>
// // //             </thead>
// // //             <tbody>
// // //               {courses.map(course => (
// // //                 <tr key={course._id} className="border-b border-gray-200 hover:bg-gray-50">
// // //                   <td className="py-3 px-4 text-black">{course.name}</td>
// // //                   <td className="py-3 px-4 text-black">
// // //                     {categories.find(c => c._id === course.category)?.name || 'N/A'}
// // //                   </td>
// // //                   <td className="py-3 px-4 text-black">{course.duration}</td>
// // //                   <td className="py-3 px-4 text-black">{course.level}</td>
// // //                   <td className="py-3 px-4 text-black">
// // //                     <button 
// // //                       onClick={() => {
// // //                         setEditingCourse(course);
// // //                         setShowForm(true);
// // //                       }}
// // //                       className="text-blue-700 hover:text-blue-900 mr-3"
// // //                     >
// // //                       Edit
// // //                     </button>
// // //                     <button 
// // //                       onClick={() => deleteCourse(course._id)}
// // //                       className="text-red-700 hover:text-red-900"
// // //                     >
// // //                       Delete
// // //                     </button>
// // //                   </td>
// // //                 </tr>
// // //               ))}
// // //             </tbody>
// // //           </table>
// // //         </div>
// // //       </div>

// // //       {showForm && (
// // //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
// // //           <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-2xl text-black">
// // //             <div className="flex justify-between items-center mb-4">
// // //               <h3 className="text-xl font-bold text-black">
// // //                 {editingCourse ? 'Edit Course' : 'Add New Course'}
// // //               </h3>
// // //               <button 
// // //                 onClick={() => setShowForm(false)}
// // //                 className="text-black hover:text-gray-700"
// // //               >
// // //                 ×
// // //               </button>
// // //             </div>

// // //             <form onSubmit={(e) => {
// // //               e.preventDefault();
// // //               const formData = new FormData(e.target);
// // //               const courseData = {
// // //                 name: formData.get('name'),
// // //                 description: formData.get('description'),
// // //                 category: formData.get('category'),
// // //                 duration: formData.get('duration'),
// // //                 level: formData.get('level'),
// // //                 salary: formData.get('salary'),
// // //                 demand: formData.get('demand'),
// // //                 image: formData.get('image')
// // //               };

// // //               if (editingCourse) {
// // //                 updateCourse(editingCourse._id, courseData);
// // //               } else {
// // //                 createCourse(courseData);
// // //               }
// // //             }}>
// // //               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
// // //                 <div>
// // //                   <label className="block mb-2 text-black">Name</label>
// // //                   <input
// // //                     type="text"
// // //                     name="name"
// // //                     defaultValue={editingCourse?.name}
// // //                     className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black"
// // //                     required
// // //                   />
// // //                 </div>
// // //                 <div>
// // //                   <label className="block mb-2 text-black">Category</label>
// // //                   <select
// // //                     name="category"
// // //                     defaultValue={editingCourse?.category}
// // //                     className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black"
// // //                     required
// // //                   >
// // //                     {categories.map(cat => (
// // //                       <option key={cat._id} value={cat._id}>{cat.name}</option>
// // //                     ))}
// // //                   </select>
// // //                 </div>
// // //                 <div>
// // //                   <label className="block mb-2 text-black">Duration</label>
// // //                   <input
// // //                     type="text"
// // //                     name="duration"
// // //                     defaultValue={editingCourse?.duration}
// // //                     className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black"
// // //                     required
// // //                   />
// // //                 </div>
// // //                 <div>
// // //                   <label className="block mb-2 text-black">Level</label>
// // //                   <input
// // //                     type="text"
// // //                     name="level"
// // //                     defaultValue={editingCourse?.level}
// // //                     className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black"
// // //                     required
// // //                   />
// // //                 </div>
// // //                 <div>
// // //                   <label className="block mb-2 text-black">Salary</label>
// // //                   <input
// // //                     type="text"
// // //                     name="salary"
// // //                     defaultValue={editingCourse?.salary}
// // //                     className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black"
// // //                     required
// // //                   />
// // //                 </div>
// // //                 <div>
// // //                   <label className="block mb-2 text-black">Demand</label>
// // //                   <input
// // //                     type="text"
// // //                     name="demand"
// // //                     defaultValue={editingCourse?.demand}
// // //                     className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black"
// // //                     required
// // //                   />
// // //                 </div>
// // //                 <div className="md:col-span-2">
// // //                   <label className="block mb-2 text-black">Description</label>
// // //                   <textarea
// // //                     name="description"
// // //                     defaultValue={editingCourse?.description}
// // //                     className="w-full border border-gray-300 rounded-lg px-4 py-2 h-24 text-black"
// // //                     required
// // //                   />
// // //                 </div>
// // //                 <div className="md:col-span-2">
// // //                   <label className="block mb-2 text-black">Image URL</label>
// // //                   <input
// // //                     type="text"
// // //                     name="image"
// // //                     defaultValue={editingCourse?.image}
// // //                     className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black"
// // //                     required
// // //                   />
// // //                 </div>
// // //               </div>

// // //               <div className="flex justify-end space-x-3">
// // //                 <button
// // //                   type="button"
// // //                   onClick={() => setShowForm(false)}
// // //                   className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 text-black"
// // //                 >
// // //                   Cancel
// // //                 </button>
// // //                 <button
// // //                   type="submit"
// // //                   className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
// // //                 >
// // //                   {editingCourse ? 'Update Course' : 'Create Course'}
// // //                 </button>
// // //               </div>
// // //             </form>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default AdminCoursePanel;

// // import React, { useState, useEffect } from 'react';
// // import { toast } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';
// // import axios from 'axios';

// // const API_BASE_URL = 'http://localhost:5000/api';

// // const AdminCoursePanel = ({ onUpdate }) => {
// //   const [courses, setCourses] = useState([]);
// //   const [categories, setCategories] = useState([]);
// //   const [editingCourse, setEditingCourse] = useState(null);
// //   const [showForm, setShowForm] = useState(false);
// //   const [loading, setLoading] = useState(false);
// //   const [newCategory, setNewCategory] = useState('');

// //   // Load data from backend
// //   useEffect(() => {
// //     const loadData = async () => {
// //       setLoading(true);
// //       try {
// //         const [coursesResponse, categoriesResponse] = await Promise.all([
// //           axios.get(`/course/${API_BASE_URL}`),
// //           axios.get(`${API_BASE_URL}/categories`)
// //         ]);
// //         setCourses(coursesResponse.data);
// //         setCategories(categoriesResponse.data);
// //       } catch (error) {
// //         console.error("Error loading data:", error);
// //         // Fallback to dummy data if API fails
// //         setCourses([
          
// //           // ... other dummy courses
// //         ]);
// //         setCategories([
        
// //         ]);
// //         toast.error("Failed to load data from server. Using demo data.");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     loadData();
// //   }, [onUpdate]);

// //   const createCourse = async (courseData) => {
// //     try {
// //       const response = await axios.post(API_BASE_URL, courseData);
// //       setCourses([...courses, response.data]);
// //       toast.success("Course created successfully");
// //       setShowForm(false);
// //       onUpdate();
// //     } catch (error) {
// //       console.error("Error creating course:", error);
// //       toast.error("Failed to create course");
// //     }
// //   };

// //   const updateCourse = async (id, courseData) => {
// //     try {
// //       const response = await axios.patch(`${API_BASE_URL}/${id}`, courseData);
// //       setCourses(courses.map(c => c._id === id ? response.data : c));
// //       toast.success("Course updated successfully");
// //       setEditingCourse(null);
// //       setShowForm(false);
// //       onUpdate();
// //     } catch (error) {
// //       console.error("Error updating course:", error);
// //       toast.error("Failed to update course");
// //     }
// //   };

// //   const deleteCourse = async (id) => {
// //     if (!window.confirm("Are you sure you want to delete this course?")) return;
// //     try {
// //       await axios.delete(`${API_BASE_URL}/${id}`);
// //       setCourses(courses.filter(c => c._id !== id));
// //       toast.success("Course deleted successfully");
// //       onUpdate();
// //     } catch (error) {
// //       console.error("Error deleting course:", error);
// //       toast.error("Failed to delete course");
// //     }
// //   };

// //   const addCategory = async () => {
// //     if (!newCategory.trim()) return;
// //     try {
// //       const response = await axios.post(`${API_BASE_URL}/categories`, { name: newCategory });
// //       setCategories([...categories, response.data]);
// //       setNewCategory('');
// //       toast.success("Category added successfully");
// //     } catch (error) {
// //       console.error("Error adding category:", error);
// //       toast.error("Failed to add category");
// //     }
// //   };

// //   const deleteCategory = async (id) => {
// //     if (!window.confirm("This will delete all courses in this category. Continue?")) return;
// //     try {
// //       await axios.delete(`${API_BASE_URL}/categories/${id}`);
// //       setCategories(categories.filter(c => c._id !== id));
// //       setCourses(courses.filter(c => c.category !== id));
// //       toast.success("Category deleted successfully");
// //       onUpdate();
// //     } catch (error) {
// //       console.error("Error deleting category:", error);
// //       toast.error("Failed to delete category");
// //     }
// //   };

// //   if (loading) return <div className="text-center py-8 text-black">Loading data...</div>;

// //   // The rest of your component remains exactly the same
// //   return (
// //     <div className="bg-white rounded-lg shadow-md p-6 mb-8 text-black">
// //       <h2 className="text-2xl font-bold mb-6 text-black">Course Management (Dummy Data)</h2>
      
// //       <div className="mb-8">
// //         <h3 className="text-xl font-semibold mb-4 text-black">Categories</h3>
// //         <div className="flex flex-wrap gap-2 mb-4">
// //           {categories?.map(cat => (
// //             <div key={cat._id} className="bg-gray-100 px-4 py-2 rounded-full flex items-center">
// //               <span className="text-black">{cat.name}</span>
// //               <button 
// //                 onClick={() => deleteCategory(cat._id)}
// //                 className="ml-2 text-black hover:text-red-700"
// //               >
// //                 ×
// //               </button>
// //             </div>
// //           ))}
// //         </div>
// //         <div className="flex">
// //           <input
// //             type="text"
// //             value={newCategory}
// //             onChange={(e) => setNewCategory(e.target.value)}
// //             placeholder="New category name"
// //             className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 text-black"
// //           />
// //           <button 
// //             onClick={addCategory}
// //             className="bg-gray-800 text-white px-4 py-2 rounded-r-lg hover:bg-gray-700"
// //           >
// //             Add
// //           </button>
// //         </div>
// //       </div>

// //       <div>
// //         <div className="flex justify-between items-center mb-4">
// //           <h3 className="text-xl font-semibold text-black">Courses</h3>
// //           <button 
// //             onClick={() => {
// //               setEditingCourse(null);
// //               setShowForm(true);
// //             }}
// //             className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
// //           >
// //             Add New Course
// //           </button>
// //         </div>

// //         <div className="overflow-x-auto">
// //           <table className="min-w-full bg-white">
// //             <thead>
// //               <tr className="bg-gray-100">
// //                 <th className="py-3 px-4 text-left text-black">Name</th>
// //                 <th className="py-3 px-4 text-left text-black">Category</th>
// //                 <th className="py-3 px-4 text-left text-black">Duration</th>
// //                 <th className="py-3 px-4 text-left text-black">Level</th>
// //                 <th className="py-3 px-4 text-left text-black">Actions</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {courses?.map(course => (
// //                 <tr key={course._id} className="border-b border-gray-200 hover:bg-gray-50">
// //                   <td className="py-3 px-4 text-black">{course.name}</td>
// //                   <td className="py-3 px-4 text-black">
// //                     {categories.find(c => c._id === course.category)?.name || 'N/A'}
// //                   </td>
// //                   <td className="py-3 px-4 text-black">{course.duration}</td>
// //                   <td className="py-3 px-4 text-black">{course.level}</td>
// //                   <td className="py-3 px-4 text-black">
// //                     <button 
// //                       onClick={() => {
// //                         setEditingCourse(course);
// //                         setShowForm(true);
// //                       }}
// //                       className="text-blue-700 hover:text-blue-900 mr-3"
// //                     >
// //                       Edit
// //                     </button>
// //                     <button 
// //                       onClick={() => deleteCourse(course._id)}
// //                       className="text-red-700 hover:text-red-900"
// //                     >
// //                       Delete
// //                     </button>
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //       </div>

// //       {showForm && (
// //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
// //           <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-2xl text-black">
// //             <div className="flex justify-between items-center mb-4">
// //               <h3 className="text-xl font-bold text-black">
// //                 {editingCourse ? 'Edit Course' : 'Add New Course'}
// //               </h3>
// //               <button 
// //                 onClick={() => setShowForm(false)}
// //                 className="text-black hover:text-gray-700"
// //               >
// //                 ×
// //               </button>
// //             </div>

// //             <form onSubmit={(e) => {
// //               e.preventDefault();
// //               const formData = new FormData(e.target);
// //               const courseData = {
// //                 name: formData.get('name'),
// //                 description: formData.get('description'),
// //                 category: formData.get('category'),
// //                 duration: formData.get('duration'),
// //                 level: formData.get('level'),
// //                 salary: formData.get('salary'),
// //                 demand: formData.get('demand'),
// //                 image: formData.get('image')
// //               };

// //               if (editingCourse) {
// //                 updateCourse(editingCourse._id, courseData);
// //               } else {
// //                 createCourse(courseData);
// //               }
// //             }}>
// //               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
// //                 <div>
// //                   <label className="block mb-2 text-black">Name</label>
// //                   <input
// //                     type="text"
// //                     name="name"
// //                     defaultValue={editingCourse?.name}
// //                     className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black"
// //                     required
// //                   />
// //                 </div>
// //                 <div>
// //                   <label className="block mb-2 text-black">Category</label>
// //                   <select
// //                     name="category"
// //                     defaultValue={editingCourse?.category}
// //                     className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black"
// //                     required
// //                   >
// //                     {categories?.map(cat => (
// //                       <option key={cat._id} value={cat._id}>{cat.name}</option>
// //                     ))}
// //                   </select>
// //                 </div>
// //                 <div>
// //                   <label className="block mb-2 text-black">Duration</label>
// //                   <input
// //                     type="text"
// //                     name="duration"
// //                     defaultValue={editingCourse?.duration}
// //                     className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black"
// //                     required
// //                   />
// //                 </div>
// //                 <div>
// //                   <label className="block mb-2 text-black">Level</label>
// //                   <input
// //                     type="text"
// //                     name="level"
// //                     defaultValue={editingCourse?.level}
// //                     className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black"
// //                     required
// //                   />
// //                 </div>
// //                 <div>
// //                   <label className="block mb-2 text-black">Salary</label>
// //                   <input
// //                     type="text"
// //                     name="salary"
// //                     defaultValue={editingCourse?.salary}
// //                     className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black"
// //                     required
// //                   />
// //                 </div>
// //                 <div>
// //                   <label className="block mb-2 text-black">Demand</label>
// //                   <input
// //                     type="text"
// //                     name="demand"
// //                     defaultValue={editingCourse?.demand}
// //                     className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black"
// //                     required
// //                   />
// //                 </div>
// //                 <div className="md:col-span-2">
// //                   <label className="block mb-2 text-black">Description</label>
// //                   <textarea
// //                     name="description"
// //                     defaultValue={editingCourse?.description}
// //                     className="w-full border border-gray-300 rounded-lg px-4 py-2 h-24 text-black"
// //                     required
// //                   />
// //                 </div>
// //                 <div className="md:col-span-2">
// //                   <label className="block mb-2 text-black">Image URL</label>
// //                   <input
// //                     type="text"
// //                     name="image"
// //                     defaultValue={editingCourse?.image}
// //                     className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black"
// //                     required
// //                   />
// //                 </div>
// //               </div>

// //               <div className="flex justify-end space-x-3">
// //                 <button
// //                   type="button"
// //                   onClick={() => setShowForm(false)}
// //                   className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 text-black"
// //                 >
// //                   Cancel
// //                 </button>
// //                 <button
// //                   type="submit"
// //                   className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
// //                 >
// //                   {editingCourse ? 'Update Course' : 'Create Course'}
// //                 </button>
// //               </div>
// //             </form>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };


// // export default AdminCoursePanel;


// import React, { useState, useEffect } from 'react';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios';

// const API_BASE_URL = 'http://localhost:5000/api';

// const AdminCoursePanel = ({ onUpdate }) => {
//   const [courses, setCourses] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [editingCourse, setEditingCourse] = useState(null);
//   const [showForm, setShowForm] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [newCategory, setNewCategory] = useState('');

//   // Load data from backend
//   useEffect(() => {
//     const loadData = async () => {
//       setLoading(true);
//       try {
//         const [coursesResponse, categoriesResponse] = await Promise.all([
//           axios.get(`${API_BASE_URL}/courses`),
//           axios.get(`${API_BASE_URL}/categories`)
//         ]);
//         setCourses(coursesResponse.data);
//         setCategories(categoriesResponse.data);
//       } catch (error) {
//         console.error("Error loading data:", error);
//         toast.error("Failed to load data from server");
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadData();
//   }, [onUpdate]);

//   const createCourse = async (courseData) => {
//     try {
//       const response = await axios.post(`${API_BASE_URL}/courses`, courseData);
//       setCourses([...courses, response.data]);
//       toast.success("Course created successfully");
//       setShowForm(false);
//       onUpdate();
//     } catch (error) {
//       console.error("Error creating course:", error);
//       toast.error("Failed to create course");
//     }
//   };

//   const updateCourse = async (id, courseData) => {
//     try {
//       const response = await axios.put(`${API_BASE_URL}/courses/${id}`, courseData);
//       setCourses(courses.map(c => c._id === id ? response.data : c));
//       toast.success("Course updated successfully");
//       setEditingCourse(null);
//       setShowForm(false);
//       onUpdate();
//     } catch (error) {
//       console.error("Error updating course:", error);
//       toast.error("Failed to update course");
//     }
//   };

//   const deleteCourse = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this course?")) return;
//     try {
//       await axios.delete(`${API_BASE_URL}/courses/${id}`);
//       setCourses(courses.filter(c => c._id !== id));
//       toast.success("Course deleted successfully");
//       onUpdate();
//     } catch (error) {
//       console.error("Error deleting course:", error);
//       toast.error("Failed to delete course");
//     }
//   };

//   const addCategory = async () => {
//     if (!newCategory.trim()) return;
//     try {
//       const response = await axios.post(`${API_BASE_URL}/categories`, { name: newCategory });
//       setCategories([...categories, response.data]);
//       setNewCategory('');
//       toast.success("Category added successfully");
//     } catch (error) {
//       console.error("Error adding category:", error);
//       toast.error("Failed to add category");
//     }
//   };

//   const deleteCategory = async (id) => {
//     if (!window.confirm("This will delete all courses in this category. Continue?")) return;
//     try {
//       await axios.delete(`${API_BASE_URL}/categories/${id}`);
//       setCategories(categories.filter(c => c._id !== id));
//       setCourses(courses.filter(c => c.category !== id));
//       toast.success("Category deleted successfully");
//       onUpdate();
//     } catch (error) {
//       console.error("Error deleting category:", error);
//       toast.error("Failed to delete category");
//     }
//   };

//   if (loading) return <div className="text-center py-8 text-black">Loading data...</div>;

//   return (
//     <div className="bg-white rounded-lg shadow-md p-6 mb-8 text-black">
//       <h2 className="text-2xl font-bold mb-6 text-black">Course Management</h2>
      
//       {/* Categories section */}
//       <div className="mb-8">
//         <h3 className="text-xl font-semibold mb-4 text-black">Categories</h3>
//         <div className="flex flex-wrap gap-2 mb-4">
//           {categories.map(cat => (
//             <div key={cat._id} className="bg-gray-100 px-4 py-2 rounded-full flex items-center">
//               <span className="text-black">{cat.name}</span>
//               <button 
//                 onClick={() => deleteCategory(cat._id)}
//                 className="ml-2 text-black hover:text-red-700"
//               >
//                 ×
//               </button>
//             </div>
//           ))}
//         </div>
//         <div className="flex">
//           <input
//             type="text"
//             value={newCategory}
//             onChange={(e) => setNewCategory(e.target.value)}
//             placeholder="New category name"
//             className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 text-black"
//           />
//           <button 
//             onClick={addCategory}
//             className="bg-gray-800 text-white px-4 py-2 rounded-r-lg hover:bg-gray-700"
//           >
//             Add
//           </button>
//         </div>
//       </div>

//       {/* Courses section */}
//       <div>
//         <div className="flex justify-between items-center mb-4">
//           <h3 className="text-xl font-semibold text-black">Courses</h3>
//           <button 
//             onClick={() => {
//               setEditingCourse(null);
//               setShowForm(true);
//             }}
//             className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
//           >
//             Add New Course
//           </button>
//         </div>

//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white">
//             <thead>
//               <tr className="bg-gray-100">
//                 <th className="py-3 px-4 text-left text-black">Name</th>
//                 <th className="py-3 px-4 text-left text-black">Category</th>
//                 <th className="py-3 px-4 text-left text-black">Duration</th>
//                 <th className="py-3 px-4 text-left text-black">Level</th>
//                 <th className="py-3 px-4 text-left text-black">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {courses.map(course => (
//                 <tr key={course._id} className="border-b border-gray-200 hover:bg-gray-50">
//                   <td className="py-3 px-4 text-black">{course.name}</td>
//                   <td className="py-3 px-4 text-black">
//                     {categories.find(c => c._id === course.category)?.name || 'N/A'}
//                   </td>
//                   <td className="py-3 px-4 text-black">{course.duration}</td>
//                   <td className="py-3 px-4 text-black">{course.level}</td>
//                   <td className="py-3 px-4 text-black">
//                     <button 
//                       onClick={() => {
//                         setEditingCourse(course);
//                         setShowForm(true);
//                       }}
//                       className="text-blue-700 hover:text-blue-900 mr-3"
//                     >
//                       Edit
//                     </button>
//                     <button 
//                       onClick={() => deleteCourse(course._id)}
//                       className="text-red-700 hover:text-red-900"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Course Form Modal */}
//       {showForm && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-2xl text-black">
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="text-xl font-bold text-black">
//                 {editingCourse ? 'Edit Course' : 'Add New Course'}
//               </h3>
//               <button 
//                 onClick={() => setShowForm(false)}
//                 className="text-black hover:text-gray-700"
//               >
//                 ×
//               </button>
//             </div>

//             <form onSubmit={(e) => {
//               e.preventDefault();
//               const formData = new FormData(e.target);
//               const courseData = {
//                 name: formData.get('name'),
//                 description: formData.get('description'),
//                 category: formData.get('category'),
//                 duration: formData.get('duration'),
//                 level: formData.get('level'),
//                 salary: formData.get('salary'),
//                 demand: formData.get('demand'),
//                 image: formData.get('image')
//               };

//               if (editingCourse) {
//                 updateCourse(editingCourse._id, courseData);
//               } else {
//                 createCourse(courseData);
//               }
//             }}>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                 <div>
//                   <label className="block mb-2 text-black">Name</label>
//                   <input
//                     type="text"
//                     name="name"
//                     defaultValue={editingCourse?.name}
//                     className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block mb-2 text-black">Category</label>
//                   <select
//                     name="category"
//                     defaultValue={editingCourse?.category}
//                     className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black"
//                     required
//                   >
//                     {categories.map(cat => (
//                       <option key={cat._id} value={cat._id}>{cat.name}</option>
//                     ))}
//                   </select>
//                 </div>
//                 <div>
//                   <label className="block mb-2 text-black">Duration</label>
//                   <input
//                     type="text"
//                     name="duration"
//                     defaultValue={editingCourse?.duration}
//                     className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block mb-2 text-black">Level</label>
//                   <input
//                     type="text"
//                     name="level"
//                     defaultValue={editingCourse?.level}
//                     className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block mb-2 text-black">Salary</label>
//                   <input
//                     type="text"
//                     name="salary"
//                     defaultValue={editingCourse?.salary}
//                     className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block mb-2 text-black">Demand</label>
//                   <input
//                     type="text"
//                     name="demand"
//                     defaultValue={editingCourse?.demand}
//                     className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black"
//                     required
//                   />
//                 </div>
//                 <div className="md:col-span-2">
//                   <label className="block mb-2 text-black">Description</label>
//                   <textarea
//                     name="description"
//                     defaultValue={editingCourse?.description}
//                     className="w-full border border-gray-300 rounded-lg px-4 py-2 h-24 text-black"
//                     required
//                   />
//                 </div>
//                 <div className="md:col-span-2">
//                   <label className="block mb-2 text-black">Image URL</label>
//                   <input
//                     type="text"
//                     name="image"
//                     defaultValue={editingCourse?.image}
//                     className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black"
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="flex justify-end space-x-3">
//                 <button
//                   type="button"
//                   onClick={() => setShowForm(false)}
//                   className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 text-black"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
//                 >
//                   {editingCourse ? 'Update Course' : 'Create Course'}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminCoursePanel;


import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const LEVEL_OPTIONS = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];
const DEMAND_OPTIONS = ['Low', 'Medium', 'High', 'Very High'];

const AdminCoursePanel = ({ onUpdate }) => {
  const [courses, setCourses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [editingCourse, setEditingCourse] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [newCategory, setNewCategory] = useState('');

  // Load data from backend
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const [coursesResponse, categoriesResponse] = await Promise.all([
          axios.get(`${API_BASE_URL}/courses`),
          axios.get(`${API_BASE_URL}/categories`)
        ]);
        setCourses(coursesResponse.data);
        setCategories(categoriesResponse.data);
      } catch (error) {
        console.error("Error loading data:", error);
        toast.error("Failed to load data from server");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [onUpdate]);

  const createCourse = async (courseData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/courses`, courseData);
      setCourses([...courses, response.data]);
      toast.success("Course created successfully");
      setShowForm(false);
      onUpdate();
    } catch (error) {
      console.error("Error creating course:", error);
      toast.error("Failed to create course");
    }
  };

  const updateCourse = async (id, courseData) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/courses/${id}`, courseData);
      setCourses(courses.map(c => c._id === id ? response.data : c));
      toast.success("Course updated successfully");
      setEditingCourse(null);
      setShowForm(false);
      onUpdate();
    } catch (error) {
      console.error("Error updating course:", error);
      toast.error("Failed to update course");
    }
  };

  const deleteCourse = async (id) => {
    if (!window.confirm("Are you sure you want to delete this course?")) return;
    try {
      await axios.delete(`${API_BASE_URL}/courses/${id}`);
      setCourses(courses.filter(c => c._id !== id));
      toast.success("Course deleted successfully");
      onUpdate();
    } catch (error) {
      console.error("Error deleting course:", error);
      toast.error("Failed to delete course");
    }
  };

  const addCategory = async () => {
    if (!newCategory.trim()) return;
    try {
      const response = await axios.post(`${API_BASE_URL}/categories`, { name: newCategory });
      setCategories([...categories, response.data]);
      setNewCategory('');
      toast.success("Category added successfully");
    } catch (error) {
      console.error("Error adding category:", error);
      toast.error("Failed to add category");
    }
  };

  const deleteCategory = async (id) => {
    if (!window.confirm("This will delete all courses in this category. Continue?")) return;
    try {
      await axios.delete(`${API_BASE_URL}/categories/${id}`);
      setCategories(categories.filter(c => c._id !== id));
      setCourses(courses.filter(c => c.category !== id));
      toast.success("Category deleted successfully");
      onUpdate();
    } catch (error) {
      console.error("Error deleting category:", error);
      toast.error("Failed to delete category");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        <span className="ml-4 text-gray-600">Loading data...</span>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4 md:p-6 mb-8 text-black">
      <h2 className="text-2xl font-bold mb-4 md:mb-6 text-black">Course Management</h2>
      
      {/* Categories section */}
      <div className="mb-6 md:mb-8">
        <h3 className="text-xl font-semibold mb-3 md:mb-4 text-black">Categories</h3>
        <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
          {categories.map(cat => (
            <div key={cat._id} className="bg-gray-100 px-3 py-1 md:px-4 md:py-2 rounded-full flex items-center">
              <span className="text-sm md:text-base text-black">{cat.name}</span>
              <button 
                onClick={() => deleteCategory(cat._id)}
                className="ml-1 md:ml-2 text-black hover:text-red-700 text-sm md:text-base"
              >
                ×
              </button>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row gap-2">
          <input
            type="text"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            placeholder="New category name"
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 md:px-4 md:py-2 text-black md:rounded-r-none"
          />
          <button 
            onClick={addCategory}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg md:rounded-l-none hover:bg-gray-700"
          >
            Add Category
          </button>
        </div>
      </div>

      {/* Courses section */}
      <div>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
          <h3 className="text-xl font-semibold text-black mb-2 md:mb-0">Courses</h3>
          <button 
            onClick={() => {
              setEditingCourse(null);
              setShowForm(true);
            }}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 w-full md:w-auto"
          >
            Add New Course
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-3 md:py-3 md:px-4 text-left text-sm md:text-base text-black">Name</th>
                <th className="py-2 px-3 md:py-3 md:px-4 text-left text-sm md:text-base text-black">Category</th>
                <th className="py-2 px-3 md:py-3 md:px-4 text-left text-sm md:text-base text-black">Duration</th>
                <th className="py-2 px-3 md:py-3 md:px-4 text-left text-sm md:text-base text-black">Level</th>
                <th className="py-2 px-3 md:py-3 md:px-4 text-left text-sm md:text-base text-black">Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses.map(course => (
                <tr key={course._id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-2 px-3 md:py-3 md:px-4 text-sm md:text-base text-black">{course.name}</td>
                  <td className="py-2 px-3 md:py-3 md:px-4 text-sm md:text-base text-black">
                    {categories.find(c => c._id === course.category)?.name || 'N/A'}
                  </td>
                  <td className="py-2 px-3 md:py-3 md:px-4 text-sm md:text-base text-black">{course.duration}</td>
                  <td className="py-2 px-3 md:py-3 md:px-4 text-sm md:text-base text-black">{course.level}</td>
                  <td className="py-2 px-3 md:py-3 md:px-4 text-sm md:text-base text-black">
                    <button 
                      onClick={() => {
                        setEditingCourse(course);
                        setShowForm(true);
                      }}
                      className="text-blue-700 hover:text-blue-900 mr-2 md:mr-3 text-sm md:text-base"
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => deleteCourse(course._id)}
                      className="text-red-700 hover:text-red-900 text-sm md:text-base"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Course Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-lg shadow-xl p-4 md:p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-black">
                {editingCourse ? 'Edit Course' : 'Add New Course'}
              </h3>
              <button 
                onClick={() => setShowForm(false)}
                className="text-black hover:text-gray-700 text-2xl"
              >
                &times;
              </button>
            </div>

            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const courseData = {
                name: formData.get('name'),
                description: formData.get('description'),
                category: formData.get('category'),
                duration: formData.get('duration'),
                level: formData.get('level'),
                salary: formData.get('salary'),
                demand: formData.get('demand'),
                image: formData.get('image')
              };

              if (editingCourse) {
                updateCourse(editingCourse._id, courseData);
              } else {
                createCourse(courseData);
              }
            }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-4">
                <div className="md:col-span-2">
                  <label className="block mb-1 md:mb-2 text-sm md:text-base text-black">Name*</label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={editingCourse?.name}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-black"
                    required
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block mb-1 md:mb-2 text-sm md:text-base text-black">Category*</label>
                  <select
                    name="category"
                    defaultValue={editingCourse?.category}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-black"
                    required
                  >
                    <option value="">Select a category</option>
                    {categories.map(cat => (
                      <option key={cat._id} value={cat._id}>{cat.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block mb-1 md:mb-2 text-sm md:text-base text-black">Duration*</label>
                  <input
                    type="text"
                    name="duration"
                    defaultValue={editingCourse?.duration}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-black"
                    required
                  />
                </div>

                <div>
                  <label className="block mb-1 md:mb-2 text-sm md:text-base text-black">Level*</label>
                  <select
                    name="level"
                    defaultValue={editingCourse?.level}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-black"
                    required
                  >
                    <option value="">Select level</option>
                    {LEVEL_OPTIONS.map(level => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block mb-1 md:mb-2 text-sm md:text-base text-black">Salary*</label>
                  <input
                    type="text"
                    name="salary"
                    defaultValue={editingCourse?.salary}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-black"
                    required
                  />
                </div>

                <div>
                  <label className="block mb-1 md:mb-2 text-sm md:text-base text-black">Demand*</label>
                  <select
                    name="demand"
                    defaultValue={editingCourse?.demand}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-black"
                    required
                  >
                    <option value="">Select demand</option>
                    {DEMAND_OPTIONS.map(demand => (
                      <option key={demand} value={demand}>{demand}</option>
                    ))}
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block mb-1 md:mb-2 text-sm md:text-base text-black">Description*</label>
                  <textarea
                    name="description"
                    defaultValue={editingCourse?.description}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 h-24 text-black"
                    required
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block mb-1 md:mb-2 text-sm md:text-base text-black">Image URL*</label>
                  <input
                    type="text"
                    name="image"
                    defaultValue={editingCourse?.image}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-black"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-end space-y-2 md:space-y-0 md:space-x-3">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 text-black w-full md:w-auto"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 w-full md:w-auto"
                >
                  {editingCourse ? 'Update Course' : 'Create Course'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminCoursePanel;