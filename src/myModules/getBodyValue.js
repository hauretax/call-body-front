import {authFetch} from './token-auth'
import addr from '../adress'

export default class BodyValue {
    constructor(id) {
      authFetch(addr + '/api/user/show',{
        headers: { "Content-Type": "application/json" },
          method: 'POST',
          body: `{"userId":"`+ id + `"}` ,
        })
        .then(r => r.json())
        .then(data => console.log(data)) 
      //this.caloDay = (370+21.6*(1-tauxg)*weight)*activity;
    }
  }