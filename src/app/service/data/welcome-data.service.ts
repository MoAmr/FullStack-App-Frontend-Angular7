import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export class HelloWorldBean {
  constructor(public message: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
    // console.log('Execute Hello World Beans Service');
  }

  executeHelloWorldBeanServiceWithPathVariable(name) {

    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    //
    // let headers = new HttpHeaders({
    //   Authorization: basicAuthHeaderString
    // })

    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`,
      // {headers}
      );
    // console.log('Execute Hello World Beans Service');
  }

  // createBasicAuthenticationHttpHeader() {
  //
  //   let username = 'Mohammed'
  //   let password = '12345'
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
  //
  //   return basicAuthHeaderString;
  //
  // }

}

