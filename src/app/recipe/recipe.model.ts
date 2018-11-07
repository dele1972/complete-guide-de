export class Recipe {
/*
  // long way
  // define properties
  public pname: string;
  public pdescription: string;
  public pimagePath: string;

  // define constructor with parameters
  constructor(cname: string, cdescription: string, cimagePath: string) {
    // store parameter values to properties:
    this.pname = cname;
    this.pdescription = cdescription;
    this.pimagePath = cimagePath;
  }
*/
  // short-cut
  constructor(public name: string, public description: string, public imagepath: string) {

  }
}
