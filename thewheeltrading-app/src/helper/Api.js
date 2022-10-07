import React from 'react'
import axios from 'axios'

export default class Api {
  constructor() {
    this.api_token = null
    this.client = null
    this.api_url = 'https://localhost:7241/'
    //this.api_url = process.env.REACT_APP_API_ENDPOINT
  }
  init = () => {
    let headers = {
      Accept: 'application/json',
    }
    /* this.api_token = getCookie('ACCESS_TOKEN')
    let headers = {
      Accept: 'application/json',
    }
    if (this.api_token) {
      headers.Authorization = `Bearer ${this.api_token}`
    } */
    this.client = axios.create({ baseURL: this.api_url, timeout: 31000, headers: headers })

    return this.client
  }
  getUserList = (params) => {
    const options = this.init()
      .get('/api/WheelOptions')
      .then(function (response) {
        var data = response.data
        data.forEach((element) => {
          debugger
          element.openDate = new Date(element.openDate).toISOString().split('T')[0]
          element.expirationDate = new Date(element.expirationDate).toISOString().split('T')[0]
          if (element.fees == 0) element.fees = '0'
        })
        return data
      })
      .catch(function (error) {
        console.log(error)
      })
    return options
  }
  addNewUser = (data) => {
    return this.init().post('/users', data)
  }
}
