




export class LocalStorage {

  private readonly tokenKey = 'accessToken';

  getToken(): string{
    const accessToken = localStorage.getItem(this.tokenKey)
    if(accessToken){
      return accessToken;
    }
    return '';
  }


  setToken(token : string){
    localStorage.setItem(this.tokenKey, token);
  }



}
