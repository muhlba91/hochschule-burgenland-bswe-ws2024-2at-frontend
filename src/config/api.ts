/**
 * Configuration class for API endpoints and authentication.
 * Contains environment-specific configuration values for backend and external API services.
 */
const DEFAULT_BACKEND_API_URL = 'http://localhost:8080/api'
const DEFAULT_METAR_API_URL = 'https://avwx.rest/api/metar/{icao}'
const DEFAULT_AVWX_API_KEY = 'Token avwx_api_key'

export class ApiConfig {
  /** Base URL for the backend API. Defaults to localhost in development */
  static get API_URL(): string {
    if (window.APP_CONFIG?.enabled) {
      return window.APP_CONFIG.VITE_BACKEND_API_URL || DEFAULT_BACKEND_API_URL
    }
    return import.meta.env.VITE_BACKEND_API_URL || DEFAULT_BACKEND_API_URL
  }

  /** URL template for the METAR API endpoint. Contains a placeholder {icao} for the airport code */
  static get METAR_API_URL(): string {
    if (window.APP_CONFIG?.enabled) {
      return window.APP_CONFIG.VITE_METAR_API_URL || DEFAULT_METAR_API_URL
    }
    return import.meta.env.VITE_METAR_API_URL || DEFAULT_METAR_API_URL
  }

  /** Authentication token for the AVWX weather service */
  static get AVWX_API_KEY(): string {
    if (window.APP_CONFIG?.enabled) {
      return window.APP_CONFIG.VITE_AVWX_API_KEY || DEFAULT_AVWX_API_KEY
    }
    return import.meta.env.VITE_AVWX_API_KEY || DEFAULT_AVWX_API_KEY
  }
}
