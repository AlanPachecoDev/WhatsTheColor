class ColorByNow {
    static r = 0;
    static g = 0;
    static b = 0;
    
    static getR() {
      return r;
    }

    static getG() {
        return g;
    }

    static getB() {
        return b;
    }

    static setR(rr) {
        r = rr;
    }
  
    static setG(gg) {
        g = gg;
    }
  
    static setB(bb) {
        b = bb;
    }
    // static {
    //   console.log('Class static initialization block called');
    // }
  }