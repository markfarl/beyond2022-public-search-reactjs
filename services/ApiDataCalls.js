class HttpService {
  constructor() {
    this.data = "Hello data from HttpService"
    this.getFondsData = this.getFondsData.bind(this)
  }

  getFondsData() {
    return this.data
  }
}
export default HttpService