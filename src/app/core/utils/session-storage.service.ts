





export class SessionStorage {

  private readonly tokenKey = 'accessToken';

  getToken(): string{
    const accessToken = sessionStorage.getItem(this.tokenKey)
    if(accessToken){
      return accessToken;
    }
    return '';
  }


  setToken(token : string){
    sessionStorage.setItem(this.tokenKey, token);
  }





}
