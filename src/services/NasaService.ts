import http from "./../http-commons";
class NasaService {
  getAll(): Promise<any> {
    return http.get("https://api.nasa.gov/neo/rest/v1/feed?start_date=2022-03-07&end_date=2022-03-08&api_key=nruMGb6RcwVllXytnpG4XeBgJUt7YyJhZt7c4j9G");
  }
//   get(id: any): Promise<any> {
//     return http.get(`/tutorials/${id}`);
//   }
//   create(data: any): Promise<any> {
//     return http.post("/tutorials", data);
//   }
//   update(id: any, data: any): Promise<any> {
//     return http.put(`/tutorials/${id}`, data);
//   }
//   delete(id: any): Promise<any> {
//     return http.delete(`/tutorials/${id}`);
//   }
//   deleteAll(): Promise<any> {
//     return http.delete(`/tutorials`);
//   }
//   findByTitle(title: string): Promise<any> {
//     return http.get(`/tutorials?title=${title}`);
//   }
}
export default new NasaService();