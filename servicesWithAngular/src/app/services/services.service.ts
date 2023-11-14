import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { EditData, Registro, RequestService, Service } from '../interfaces/cuenta';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  private myAppUrl: string = environment.endpoint;
  private microUsers: string = environment.urlAPIMicroServicesUser;
  private myApiUrl: string = '/api/services/';
  private myApiUsers: string = '/api/MyUser/';
  private myApiUrlR: string = '/api/request/';
  userID = '';
  private userID$ = new BehaviorSubject<string>(this.userID);

  public datosPerfil!: EditData;

  constructor(private http: HttpClient) {}

  crearService(service: Service): Observable<any> {
    return this.http.post(
      `${this.myAppUrl}${this.myApiUrl}createService/`,
      service
    );
  }

  getServices(): Observable<any> {
    return this.http.get(`${this.myAppUrl}${this.myApiUrl}listServices`);
  }

  getMyServices( idUser:string): Observable<any> {
    return this.http.get(`${this.myAppUrl}${this.myApiUrl}listServicesByIdUser?idUser=${idUser}`);
  }
  getContactServices( number_document:string): Observable<any> {
    // return this.http.get(`${this.microUsers}${this.myApiUsers}dataContactService?number_document=${number_document}`);
    return this.http.get(`https://localhost:7137${this.myApiUsers}dataContactService?number_document=${number_document}`);
  }

  crearRequest(request: RequestService): Observable<any> {
    return this.http.post(
      `${this.myAppUrl}${this.myApiUrlR}createRequest/`,
      request
    );
  }

  getMyRequest( idUser:string): Observable<any> {
    return this.http.get(`${this.myAppUrl}${this.myApiUrlR}listServicesByIdUser?idUser=${idUser}`);
  }
  deleteRequest( serviceId:string , userId:string): Observable<any> {
    return this.http.delete(`${this.myAppUrl}${this.myApiUrlR}deleteRequest?serviceId=${serviceId}&userId=${userId}`);
  }

  deleteService( serviceId:string): Observable<any> {
    return this.http.delete(`${this.myAppUrl}${this.myApiUrl}deleteService?serviceId=${serviceId}`);
  }


  cargarDepartment():Observable<any>{
    return this.http.get(`${this.myAppUrl}/Department/`)
    }
    
      cargarCities(idDepartment:number): Observable<any>{
        return this.http.get(`${this.myAppUrl}/Department/GetCities?codigoDepartamento=${idDepartment}`,{});
      }

  
}
