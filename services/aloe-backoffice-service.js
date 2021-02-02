import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://3.210.189.247:3001",
  timeout: 4500,
});

class AloeBackofficeService {
  static async downloadBackgroundDesktop() {
    let base64;
    try {
      const res = await axiosInstance.get(`/download_desktop`);
      base64 = res.data.base64;
    } catch (error) {
      console.log(error);
      return null;
    }

    return base64;
  }

  static async downloadBackgroundMobile() {
    let base64;
    try {
      const res = await axiosInstance.get(`/download_mobile`);
      base64 = res.data.base64;
    } catch (error) {
      console.log(error);
      return null;
    }
    return base64;
  }

  static async uploadBackgroundDesktop(file) {
    const fr = new FileReader();
    fr.addEventListener("load", async (event) => {
      const base64 = event.target.result;
      await axiosInstance.post(`/upload_desktop`, { base64 });
    });
    fr.readAsDataURL(file);
  }

  static async uploadBackgroundMobile(file) {
    const fr = new FileReader();
    fr.addEventListener("load", async (event) => {
      const base64 = event.target.result;
      await axiosInstance.post(`/upload_mobile`, { base64 });
    });
    fr.readAsDataURL(file);
  }
}

export default AloeBackofficeService;
