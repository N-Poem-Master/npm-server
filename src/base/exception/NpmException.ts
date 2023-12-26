class NpmException {
  code: string;
  message: string;

  constructor({ code, message }) {
    this.code = code;
    this.message = message;
  }
}

export default NpmException;
