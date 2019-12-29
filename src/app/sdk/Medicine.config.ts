export class MedicineConfig {
    //private static path = 'https://medicinetorexpress.herokuapp.com/';

    private static path = 'http://localhost:3000';
  
    public static getPath(): string {
      return MedicineConfig.path;
    }
  }