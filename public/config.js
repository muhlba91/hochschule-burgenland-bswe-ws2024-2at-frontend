window.APP_CONFIG = {
  // Whether to use this runtime configuration. Set to true to override build-time env vars.
  enabled: false,

  // Base URL for the backend API.
  VITE_BACKEND_API_URL: 'http://localhost:8080/api',

  // URL template for the METAR API endpoint.
  VITE_METAR_API_URL: 'https://avwx.rest/api/metar/{icao}',

  // Authentication token for the AVWX weather service.
  VITE_AVWX_API_KEY: 'Token avwx_api_key'
};
