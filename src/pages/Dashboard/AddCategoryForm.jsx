import React, { useState } from 'react';

import Swal from 'sweetalert2';
import axios from 'axios';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const AddCategoryForm = () => {
  const axiosSecure = useAxiosSecure();
  const [formData, setFormData] = useState({
    key: '',
    title: '',
    description: '',
    image: '',
    icon: '',
    galleryImages: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  const [mainImageFile, setMainImageFile] = useState(null); // For main image file
  const [galleryFiles, setGalleryFiles] = useState([]); // For gallery image files

  // ImgBB API configuration
  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle main image file input change
  const handleMainImageChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setMainImageFile(selectedFile);
      setFormData({ ...formData, image: '' }); // Clear image URL if file is selected
    }
  };

  // Handle gallery images file input change
  const handleGalleryImagesChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setGalleryFiles(selectedFiles);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      let imageUrl = formData.image;

      // Upload main image to ImgBB if a file is selected
      if (mainImageFile) {
        const formDataToUpload = new FormData();
        formDataToUpload.append('image', mainImageFile);

        const response = await axios.post(image_hosting_api, formDataToUpload, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        if (response.data.success) {
          imageUrl = response.data.data.url;
        } else {
          throw new Error('Main image upload failed');
        }
      }

      // Upload gallery images to ImgBB
      const galleryImageUrls = [];
      for (const file of galleryFiles) {
        const formDataToUpload = new FormData();
        formDataToUpload.append('image', file);

        const response = await axios.post(image_hosting_api, formDataToUpload, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        if (response.data.success) {
          galleryImageUrls.push(response.data.data.url);
        } else {
          throw new Error(`Gallery image upload failed for ${file.name}`);
        }
      }

      // Validate required fields
      if (!formData.key || !formData.title || !formData.description || !imageUrl || !formData.icon || galleryImageUrls.length === 0) {
        throw new Error('All fields (key, title, description, image, icon, gallery images) are required');
      }

      // Submit category data to backend
      const categoryData = {
        ...formData,
        image: imageUrl,
        galleryImages: galleryImageUrls,
        createdAt: new Date(),
      };

      const response = await axiosSecure.post('/categories', categoryData);
      Swal.fire({
        title: 'Success!',
        text: response.data.message,
        icon: 'success',
        confirmButtonText: 'OK',
        confirmButtonColor: '#0A3D91',
      });

      // Reset form
      setFormData({ key: '', title: '', description: '', image: '', icon: '', galleryImages: [] });
      setMainImageFile(null);
      setGalleryFiles([]);
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: error.response?.data?.message || error.message || 'Failed to add category',
        icon: 'error',
        confirmButtonText: 'OK',
        confirmButtonColor: '#B91C1C',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 space-y-6">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700 mb-1">Key</label>
        <input
          type="text"
          name="key"
          value={formData.key}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#70C5D7] text-[#005482] text-sm"
          required
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#70C5D7] text-[#005482] text-sm"
          required
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#70C5D7] text-[#005482] text-sm"
          required
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700 mb-1">Category Image</label>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <input
              type="file"
              accept="image/*"
              onChange={handleMainImageChange}
              className="hidden"
              id="main-photo-upload"
            />
            <label
              htmlFor="main-photo-upload"
              className="cursor-pointer inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#70C5D7]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Choose Photo
            </label>
            <span className="text-sm text-gray-500">or</span>
          </div>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Enter photo URL"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#70C5D7] text-[#005482] text-sm"
            disabled={mainImageFile} // Disable URL input if a file is selected
          />
          <p className="text-xs text-gray-500">Upload a photo or provide an image URL</p>
          {mainImageFile && <p className="text-sm text-gray-700">Selected file: {mainImageFile.name}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700 mb-1">Icon</label>
        <select
          name="icon"
          value={formData.icon}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#70C5D7] text-[#005482] text-sm"
          required
        >
          <option value="">Select an icon</option>
          <option value="Shirt">Shirt</option>
          <option value="Scissors">Scissors</option>
          <option value="Package">Package</option>
          <option value="Palette">Palette</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700 mb-1">Gallery Images</label>
        <div className="space-y-2">
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleGalleryImagesChange}
            className="hidden"
            id="gallery-photos-upload"
          />
          <label
            htmlFor="gallery-photos-upload"
            className="cursor-pointer inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#70C5D7]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Choose Gallery Photos
          </label>
          <p className="text-xs text-gray-500">Select multiple images for the gallery</p>
          {galleryFiles.length > 0 && (
            <div className="text-sm text-gray-700">
              <p>Selected files:</p>
              <ul className="list-disc pl-5">
                {galleryFiles.map((file, index) => (
                  <li key={index}>{file.name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className={`w-full px-4 py-2 text-white rounded-lg ${
          isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-deep-teal hover:bg-[#70C5D7]'
        }`}
      >
        {isLoading ? 'Submitting...' : 'Add Category'}
      </button>
    </form>
  );
};

export default AddCategoryForm;