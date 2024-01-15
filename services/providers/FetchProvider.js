export default class FetchProvider {
  interceptors = [];

  // Метод для добавления параметров запроса
  computeQueryParams(query) {
    if (!query) return '';
    const queryParams = new URLSearchParams(query);
    return `?${queryParams.toString()}`;
  }

  // Метод для конкретного запроса
  async request(options) {
    const body = options.data ? JSON.stringify(options.data) : null;
    try {
      const { data, pending, error } = await useFetch(
        options.baseUrl + options.path + this.computeQueryParams(options.query),
        { headers: options.headers, body, method: options.method },
      );
      if (error.value) {
        this.onError(error.value);
      }

      return data.value;
    } catch (e) {
      throw Error(e);
    }
  }

  // Метод для добавления перехватчиков
  addInterceptor(interceptor) {
    if (interceptor && interceptor.onError) {
      this.interceptors.push(interceptor);
    } else {
      throw Error('Interceptor не поддерживается');
    }
    return this;
  }

  // Метод для отработки ошибок
  onError({ message, statusCode }) {
    this.interceptors.forEach((interceptor) => {
      if (interceptor.onError) {
        interceptor.onError(statusCode, message);
      }
    });
    throw Error(message);
  }

  get(path, requestOptions) {
    return this.request({ path, method: 'GET', ...requestOptions });
  }

  post(path, requestOptions) {
    return this.request({ path, method: 'POST', ...requestOptions });
  }

  put(path, requestOptions) {
    return this.request({ path, method: 'PUT', ...requestOptions });
  }

  delete(path, requestOptions) {
    return this.request({ path, method: 'DELETE', ...requestOptions });
  }
}
