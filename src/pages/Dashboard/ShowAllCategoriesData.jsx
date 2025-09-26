import React, { useState, useEffect } from 'react';

import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';

export default function ShowAllCategoriesData() {
  const axiosSecure = useAxiosSecure();
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [editingCategory, setEditingCategory] = useState(null);
  const [formData, setFormData] = useState({
    key: '',
    title: '',
    description: '',
    image: '',
    icon: '',
    galleryImages: '',
  });

  // Fetch all categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setIsLoading(true);
        const response = await axiosSecure.get('/categories');
        // Ensure galleryImages is always an array
        const normalizedCategories = response.data.map((cat) => ({
          ...cat,
          galleryImages: Array.isArray(cat.galleryImages) ? cat.galleryImages : [],
        }));
        setCategories(normalizedCategories);
      } catch (e) {
        setError(e.response?.data?.message || 'Failed to load categories');
        console.error('Error fetching categories:', e.response?.data || e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCategories();
  }, [axiosSecure]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle gallery images input (comma-separated strings to array)
  const handleGalleryImagesChange = (e) => {
    const images = e.target.value.split(',').map((img) => img.trim()).filter((img) => img);
    setFormData((prev) => ({ ...prev, galleryImages: images.join(', ') }));
  };

  // Open edit modal and populate form
  const handleEdit = (category) => {
    setEditingCategory(category);
    setFormData({
      key: category.key,
      title: category.title,
      description: category.description,
      image: category.image,
      icon: category.icon,
      galleryImages: Array.isArray(category.galleryImages) ? category.galleryImages.join(', ') : '',
    });
  };

  // Save edited category
  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const galleryImagesArray = formData.galleryImages.split(',').map((img) => img.trim()).filter((img) => img);
      const updatedData = {
        ...formData,
        galleryImages: galleryImagesArray,
      };
      const response = await axiosSecure.put(`/categories/${editingCategory.key}`, updatedData);
      Swal.fire({
        title: 'Success!',
        text: response.data.message || 'Category updated successfully',
        icon: 'success',
        confirmButtonText: 'OK',
        confirmButtonColor: '#0A3D91',
      });
      setCategories((prev) =>
        prev.map((cat) =>
          cat.key === editingCategory.key ? { ...cat, ...updatedData } : cat
        )
      );
      setEditingCategory(null);
      setFormData({
        key: '',
        title: '',
        description: '',
        image: '',
        icon: '',
        galleryImages: '',
      });
    } catch (e) {
      Swal.fire({
        title: 'Error!',
        text: e.response?.data?.message || 'Failed to update category',
        icon: 'error',
        confirmButtonText: 'OK',
        confirmButtonColor: '#B91C1C',
      });
      console.error('Error updating category:', e.response?.data || e);
    }
  };

  // Delete category
  const handleDelete = async (key) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'You won’t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#0A3D91',
      cancelButtonColor: '#B91C1C',
      confirmButtonText: 'Yes, delete it!',
    });
    if (result.isConfirmed) {
      try {
        const response = await axiosSecure.delete(`/categories/${key}`);
        Swal.fire({
          title: 'Deleted!',
          text: response.data.message || 'Category deleted successfully',
          icon: 'success',
          confirmButtonText: 'OK',
          confirmButtonColor: '#0A3D91',
        });
        setCategories((prev) => prev.filter((cat) => cat.key !== key));
      } catch (e) {
        Swal.fire({
          title: 'Error!',
          text: e.response?.data?.message || 'Failed to delete category',
          icon: 'error',
          confirmButtonText: 'OK',
          confirmButtonColor: '#B91C1C',
        });
        console.error('Error deleting category:', e.response?.data || e);
      }
    }
  };

  if (isLoading) {
    return <div className="text-center py-12 text-charcoal">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-12 text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-charcoal mb-6">All Categories</h1>

      {categories.length === 0 ? (
        <p className="text-center text-charcoal/80">No categories available.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead>
              <tr className="bg-deep-teal text-white">
                <th className="py-2 px-4 border-b">Key</th>
                <th className="py-2 px-4 border-b">Title</th>
                <th className="py-2 px-4 border-b">Description</th>
                <th className="py-2 px-4 border-b">Image</th>
                <th className="py-2 px-4 border-b">Icon</th>
                <th className="py-2 px-4 border-b">Gallery Images</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <tr key={category.key} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b text-center">{category.key}</td>
                  <td className="py-2 px-4 border-b text-center">{category.title}</td>
                  <td className="py-2 px-4 border-b text-center">{category.description}</td>
                  <td className="py-2 px-4 border-b text-center">
                    <a href={category.image} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                      View Image
                    </a>
                  </td>
                  <td className="py-2 px-4 border-b text-center">{category.icon}</td>
                  <td className="py-2 px-4 border-b text-center">
                    {Array.isArray(category.galleryImages) && category.galleryImages.length > 0 ? (
                      category.galleryImages.map((img, i) => (
                        <a key={i} href={img} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline block">
                          Image {i + 1}
                        </a>
                      ))
                    ) : (
                      <span className="text-gray-500">No gallery images</span>
                    )}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    <button
                      onClick={() => handleEdit(category)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded mr-2 hover:bg-yellow-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(category.key)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Edit Modal */}
      {editingCategory && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold text-charcoal mb-4">Edit Category</h2>
            <form onSubmit={handleSave}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Key</label>
                <input
                  type="text"
                  name="key"
                  value={formData.key}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  disabled
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Image URL</label>
                <input
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Icon</label>
                <select
                  name="icon"
                  value={formData.icon}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  required
                >
                  <option value="Shirt">Shirt</option>
                  <option value="Scissors">Scissors</option>
                  <option value="Package">Package</option>
                  <option value="Palette">Palette</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Gallery Images (comma-separated URLs)</label>
                <input
                  type="text"
                  name="galleryImages"
                  value={formData.galleryImages}
                  onChange={handleGalleryImagesChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  placeholder="e.g., url1, url2, url3"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setEditingCategory(null)}
                  className="bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-deep-teal text-white px-4 py-2 rounded hover:bg-[#70C5D7]"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}