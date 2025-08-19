import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

// const BASE_URL = 'http://localhost:3400/api/v1'; // Replace with your actual backend URL
const BASE_URL = 'https://waste-management-backend-fwir.onrender.com/api/v1'

export const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


// Users
export const createUser = async (userData) => {
  return api.post('/users/register', userData)
  .then(response => {
     console.log("User created successfully:", response.data);
     toast.success(response.data + ", Redirecting to login...");
     
  }).catch(error => {
    console.log(error)
    toast.error(error.response?.data?.msg || "Failed to create user");   
  });
};

export const loginUser = async (loginData) => {
  return api.post('/users/login', loginData);
};


// Reports
export const createReport = async (formData) => {
  return api.post('/reports', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};

export const getReports = async (page = 1, limit = 10) => {
  return api.get(`/reports?page=${page}&limit=${limit}`);
};

export const getNearbyReports = async (latitude, longitude, page = 1, limit = 10) => {
  return api.get(`/reports/nearby?latitude=${latitude}&longitude=${longitude}&page=${page}&limit=${limit}`);
};

export const getReportById = async (id) => {
  return api.get(`/reports/${id}`);
};

export const approveReport = async (id, scheduledPickupTime) => {
  return api.put(`/reports/approve/${id}`, { scheduledPickupTime });
};

export const updateReport = async (id, status) => {
  return api.put(`/reports/${id}`, { status });
};

export const deleteReport = async (id) => {
  return api.delete(`/reports/${id}`);
};

// Notifications
export const getNotifications = async (page = 1, limit = 10) => {
  return api.get(`/notifications?page=${page}&limit=${limit}`);
};

export const getNotificationById = async (id) => {
  return api.get(`/notifications/${id}`);
};

export const markNotificationAsRead = async (id) => {
  return api.put(`/notifications/${id}/read`);
};

export const markAllNotificationsAsRead = async () => {
  return api.put('/notifications/read-all');
};

// Users
export const getUsers = async (page = 1, limit = 10) => {
  return api.get(`/users?page=${page}&limit=${limit}`);
};

// Fetch user details
export const getUserDetails = async () => {
  return api.get('/users/me');
};