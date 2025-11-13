import api from '../config/api';

const authService = {
  // Login
  async login(username, password) {
    const response = await api.post('/token/', {
      username,
      password,
    });
    
    if (response.data.access) {
      localStorage.setItem('access_token', response.data.access);
      localStorage.setItem('refresh_token', response.data.refresh);
    }
    
    return response.data;
  },

  // Logout
  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  },

  // Obtener usuario actual
  async getCurrentUser() {
    const response = await api.get('/usuarios/me/');
    return response.data;
  },

  // Verificar si está autenticado
  isAuthenticated() {
    return !!localStorage.getItem('access_token');
  },

  // Obtener token
  getToken() {
    return localStorage.getItem('access_token');
  },
};

export default authService;
