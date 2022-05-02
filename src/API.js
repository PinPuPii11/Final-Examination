export default class API {
    static async getAll() {
       return JSON.parse(localStorage.getItem("userData") || "[]"); 
    }

    static async save(data) {
        localStorage.setItem("userData", JSON.stringify(data));
    }
}